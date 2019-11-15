var mongoose = require('mongoose');
mongoose.Promise  = require("bluebird");
let uri = "mongodb+srv://ivozee:f1jhPm1wy0ETBrkH@cluster-qhdmu.mongodb.net/test?retryWrites=true&w=majority";
var connect = mongoose.connect(uri, {useNewUrlParser: true});
module.exports = connect;