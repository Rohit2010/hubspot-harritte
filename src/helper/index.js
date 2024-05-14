const VeritySubmission = require("../model/veritysubmission");
const { hubSpotToVerityProgramValues } = require("./hubkeyVerityKey")

function normalizeString(str) {
    // Normalize the string by removing all non-alphanumeric characters and converting to lowercase
    // return str.replace(/[^\w\s]/g, '').toLowerCase();
    return str;
}
const getProgramValue = (course) => {
    const getObj = hubSpotToVerityProgramValues.find((obj) => normalizeString(obj.course) === normalizeString(course));
    return getObj?.program;
}
const getCampaignType = (course) => {
    const getObj = hubSpotToVerityProgramValues.find((obj) => normalizeString(obj.course) === normalizeString(course));
    return getObj?.campaignType;
}

const getVerityCourseValue = (course) => {
    const getObj = hubSpotToVerityProgramValues.find((obj) => normalizeString(obj.course) === normalizeString(course));
    return getObj?.verityCourseValue;
}

const saveEmailToMongo = async (dataObj) => {
        const checkEmailExist = await VeritySubmission.findOne({timeStamp:dataObj?.timeStamp, email:dataObj?.email});

        if(checkEmailExist){
            return false;
        } else {
            const data = new VeritySubmission(dataObj);
            await data.save();
            return true;
        }
}
const checkLeadExists = async (dataObj) => {
    const check = await VeritySubmission.findOne({timeStamp:dataObj?.timeStamp, email:dataObj?.email});
    if(check){
        return true;
    } else {
        return false;
    }
}


module.exports = {getCampaignType, getProgramValue, getVerityCourseValue, saveEmailToMongo, checkLeadExists}