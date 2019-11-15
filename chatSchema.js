var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var chatSchema = new Schema(
    
    {
    message: {
        type: String
    },
    sender: {
        type: String
         }
    },
       { 

        timestamps: true

});

let Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;

