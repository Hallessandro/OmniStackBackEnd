const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const path = require('path');

const app = express();

mongoose.connect("mongodb://omnistack:omnistack@omnistack-shard-00-00-y8ml4.mongodb.net:27017,omnistack-shard-00-01-y8ml4.mongodb.net:27017,omnistack-shard-00-02-y8ml4.mongodb.net:27017/semana09?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//req.query = Acessar query params /paciente?idade=20
//req.params = Acessar route params
//req.body = Acessar o body das req

app.use(cors());

//Estou dizendo para o express q por padrão ele recebe
//requisições em formato JSON 
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(8000);