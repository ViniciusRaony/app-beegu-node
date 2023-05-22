const Sequelize = require('sequelize');
const sequelize = require('./server');

// Importando dados
const Usuario = require('./models/usuario.model');
// const Passageiro = require('./models/passageiro.model');
// const Motorista = require('./models/motorista.model');
const Carona = require('./models/carona.model');
const Veiculo = require('./models/veiculo.model');
const Rota = require('./models/rota.model');
const usuarioCarona = require('./models/usuarioCarona.model');
const PassageiroCarona = require('./models/PassageiroCarona.model');
const historicoUsuario = require('./models/historicoUsuario.model');

const express = require("express");
const cors = require("cors");

const usuario = require("./routes/usuario.route");
const carona = require("./routes/carona.route");
const autenticacao = require("./routes/autenticacao.route")

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/cadastro", usuario);
app.use("/api/v1/carona", carona);
app.use("/api/v1/login", autenticacao);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server rodando em http://localhost:${PORT}`));


