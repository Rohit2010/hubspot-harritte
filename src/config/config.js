const Joi = require('joi');
const path = require('path');
const dotnev = require('dotenv');

dotnev.config({path: path.join(__dirname, '../../.env')});

// schema of env files for validation
const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid('test', 'development', 'production')
      .required(),
    PORT: Joi.number().default(8082),
    HUBSPOT_ACCESS_TOKEN: Joi.string(),
    HUBSPOT_BASE_URL:Joi.string(),
    VERITY_SYSTEM_KEY:Joi.string(),
    VERITY_TENANT_ID:Joi.number(),
    NEVER_BOUNCE_API_KEY:Joi.string(),
    TRIGGER_HUBSPOT_FORM_ID:Joi.string(),
MONGODB_URL:Joi.string()

  })
  .unknown();

// validating the process.env object that contains all the env variables
const {value: envVars, error} = envVarsSchema.prefs({errors: {label: 'key'}}).validate(process.env);

// throw error if the validation fails or results into false
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  HUBSPOT_ACCESS_TOKEN:envVars.HUBSPOT_ACCESS_TOKEN,
  HUBSPOT_BASE_URL:envVars.HUBSPOT_BASE_URL,
  VERITY_TENANT_ID:envVars.VERITY_TENANT_ID,
  VERITY_SYSTEM_KEY:envVars.VERITY_SYSTEM_KEY,
  NEVER_BOUNCE_API_KEY:envVars.NEVER_BOUNCE_API_KEY,
  TRIGGER_HUBSPOT_FORM_ID:envVars.TRIGGER_HUBSPOT_FORM_ID,
  MONGODB_URL:envVars.MONGODB_URL
};
