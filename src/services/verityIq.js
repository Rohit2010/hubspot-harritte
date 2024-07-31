const axios = require('axios');
const config = require("../config/config");
const { hubToVerityformkeys } = require('../helper/hubkeyVerityKey');
const { getCampaignType, getProgramValue, getVerityCourseValue } = require('../helper');


async function sendLeadDataToVerity(formValues, submittedAt) {
    const url = 'https://api.verityiq.com/api/leadpost';
    const data = new URLSearchParams();
    data.append('veritySysKey', config.VERITY_SYSTEM_KEY);
    data.append('tenantid', config.VERITY_TENANT_ID);
    data.append('leadid', submittedAt);
    data.append('Campaigncode', 'Applicants');
    data.append('campus', 'Propel Learn');
    data.append('schoolname', 'Propel Center');
    data.append('leadsource', 'Email Marketing');
    data.append("externalapplicationid", submittedAt);
    data.append("leadstatus", 'Application Requested');

    formValues.map((field) => {
        hubToVerityformkeys[field.name] && !data.has(hubToVerityformkeys[field.name]) && data.append(hubToVerityformkeys[field.name], field.value);

        if(field.name === 'select_course'){
            data.append("SelectCourse", getVerityCourseValue(field.value))
            data.append('Campaigntype', getCampaignType(field.value))
            data.append('program', getProgramValue(field.value))    
            data.append('programofenrollment', getProgramValue(field.value))
        }
    })
    // console.log(data,"email------", data.email)
    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}



module.exports = {sendLeadDataToVerity}
