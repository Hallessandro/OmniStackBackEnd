const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
    }
}, {
    toJSON: {
        virtuals: true
    },
});

//Tem q ser function e nao arrow function
SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:8000/files/${this.thumbnail}`
});

module.exports = mongoose.model("Spot", SpotSchema);