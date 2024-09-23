const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Udh31RxR#-2RdNhkgNp9yQVwVPRI5j1Ag-OE_ROPS43Qv8XxvKFE",
MONGODB: process.env.MONGODB || "enter mongodb here",
};
