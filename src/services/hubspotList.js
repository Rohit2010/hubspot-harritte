const axios = require("axios");
const config = require("../config/config");
const { addPropertyQueries } = require("../helper/index");

const headers = {
    Authorization: `Bearer ${config.HUBSPOT_ACCESS_TOKEN}`
};


// Function to fetch form fields by form ID
const getFormFields = async (formId) => {
    try {
        // Fetch form fields from HubSpot API
        const response = await axios.get(`${config.HUBSPOT_BASE_URL}forms/v2/fields/${formId}`, { headers });
        
        // Extract names of form fields from the response data
        const arrOfProperty = response.data.map((field) => field.name);
        // Add additional property to the array
        return arrOfProperty; // Return array of form fields
    } catch (error) {
        // Handle errors during HTTP request
        console.error("Error fetching form fields:", error.message);
        throw error; // Throw error for higher level handling
    }
};
const getFormSubmissionInLastOneHour = async (formId) => {
    try {
        //api call
        const data = await axios.get(`${config.HUBSPOT_BASE_URL}form-integrations/v1/submissions/forms/${formId}?limit=5`, {headers});

        const submissions = data?.data?.results;
        // check the submission which submitted in last one hour
        return submissions;

    } catch (error) {
        return error.message;
    }
}

// const getFormSubmissionInLastOneHour = async (formId) => {
//     try {
//         let finalDataToSend;
//         // Calculate timestamp for 1 hour ago
//         const oneHourAgoTimestamp = Date.now() - 3600000;

//         // Make API call to fetch form submissions
//         const response = await axios.get(`${config.HUBSPOT_BASE_URL}form-integrations/v1/submissions/forms/${formId}?limit=50`, { headers });

//         if(response && response.data && response.data.results){
//             const submissions = response.data.results;
//             // Filter submissions submitted in the last hour
//              finalDataToSend = submissions.filter(submission => submission.submittedAt >= oneHourAgoTimestamp);
//         } 
//         return finalDataToSend;
//     } catch (error) {
//         console.error("Error fetching form submissions:", error);
//         throw error; // Re-throw error to handle it at a higher level
//     }
// }






module.exports = { getFormFields,  getFormSubmissionInLastOneHour };
