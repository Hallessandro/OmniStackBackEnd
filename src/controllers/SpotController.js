//index, show, store, update, destroy
const Spot = require("../models/Spot");


module.exports = {

    async index(req, res){
        const {tech} = req.query;

        //Mesmo o obj sendo um array, se eu passar só uma string o mongo vai buscar
        //apenas os resultados que contem essa string
        const spots = await Spot.find({techs: tech}) 

        return res.json(spots);
    },

    async store(req, res){
        const { filename } = req.file; //Pega a informacao do campo filename da req e salva numa var de mesmo nome
        const { company, price, techs } = req.body;
        
        const { user_id } = req.headers;

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename, 
            company, 
            price,
            techs: techs.split(",").map(tech => tech.trim()),
        })

        return res.json(spot);
    }
}