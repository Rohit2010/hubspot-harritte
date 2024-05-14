const NeverBounce = require('neverbounce');
const config = require('../config/config')
const client = new NeverBounce({apiKey: config.NEVER_BOUNCE_API_KEY});

 async function checkEmailExistence(email) {
    try {
        const result = await client.single.check(email);
        return result;
    } catch (error) {
        console.error('Error verifying emails in bulk through NeverBounce:', error.message);
        return null;
    }
}

module.exports = {
    checkEmailExistence
}
