//index, show, store, update, destroy
const Spot = require("../models/Spot");


module.exports = {

    async show(req, res){
        const {user_id} = req.headers;

        //Mesmo o obj sendo um array, se eu passar só uma string o mongo vai buscar
        //apenas os resultados que contem essa string
        const spots = await Spot.find({user: user_id}) 

        return res.json(spots);
    }
}