require('dotenv').config()
const express = require("express")
const ApiError = require('./utils/ApiError');
const {errorConverter, errorHandler} = require('./middlewares/error');
const httpStatus = require('http-status');
const {getFormSubmissionInLastOneHour, getFormFields} = require("./services/hubspotList");
const {  checkEmailExistence } = require("./services/neverBounce");
var cron = require('node-cron');
const { sendLeadDataToVerity } = require("./services/verityIq");
const config = require("./config/config");
const mongoose = require('mongoose');
const { saveEmailToMongo , checkLeadExists} = require("./helper");


const app = express();
const port = config.port || 3000;

app.use(express.json());

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/updated', (req, res) => {
    res.send('Hello World updated3');
});

// Error handling middleware
// app.use(errorHandler);// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);
  
// handle error
app.use(errorHandler);

//db connection
mongoose.connect('mongodb+srv://product:noAz9Iuapsw3GFdj@propel0.872kjy7.mongodb.net/verity-harritte').then(() => {
    console.log("db connected")
}).catch((err) => console.log("error connecting db:::" , err))


// scheduler for sending data from hubspot to verity every hour;
cron.schedule('* * * * *', async () => {
   const LastHourSubmissionOnHubspot = await getFormSubmissionInLastOneHour(config.TRIGGER_HUBSPOT_FORM_ID);
   LastHourSubmissionOnHubspot?.map(async (submission) => {
    const emailToCheck = submission?.values.length > 0 && submission.values.find((field) => field.name === 'email')?.value;

   const res = await checkLeadExists({timeStamp:submission?.submittedAt, email:emailToCheck})
        if(!res){
            const checkEmail = await checkEmailExistence(emailToCheck);
            console.log(checkEmail, "checkemaail")
            if(checkEmail.getResult() === 'valid' || checkEmail.getResult() === 'catchall' && checkEmail?.response?.status === 'success'){
                const senddataVerity = await sendLeadDataToVerity(submission?.values, submission?.submittedAt);
                    if(senddataVerity && senddataVerity?.data == 'success'){
                        const saveLead = await saveEmailToMongo({timeStamp:submission?.submittedAt, email:emailToCheck});
                    }
            } else {
                const saveLead = await saveEmailToMongo({timeStamp:submission?.submittedAt, email:emailToCheck});
                console.log("Email verification failed");
            }
        } else {
            console.log("lead already exists")
        }
   })
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

