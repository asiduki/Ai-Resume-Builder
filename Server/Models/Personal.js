const mongoose = require("mongoose")

const Personalinfo = mongoose.Schema({
    data: {
        String
    }
})
module.exports = mongoose.model("Info" , Personalinfo)
