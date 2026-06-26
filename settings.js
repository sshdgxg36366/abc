const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

MONGODB: process.env.MONGODB_URI === undefined ? 'mongodb+srv://oshadamd05_db_user:LzWjINfr32GpUo6v@cluster0.mu6qfvw.mongodb.net/?appName=Cluster0' : process.env.MONGODB_URI,
SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=2898484ab4b7286a' : process.env.SESSION_ID,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
SESSION_NAME: process.env.SESSION_NAME === undefined ? "asitha" : process.env.SESSION_NAME,

};

