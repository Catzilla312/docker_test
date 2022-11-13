const mongoose = require('mongoose');
const {db}   = require('../configuration/index');
module.exports.connectDb = ()=>{
    mongoose.connect(db);
    return mongoose.connection;
}