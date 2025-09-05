const mongoose = require("mongoose")

const Personalinfo = mongoose.Schema({
    Personal: {
        type : String
    }
})
module.exports = mongoose.model("Info" , Personalinfo)
