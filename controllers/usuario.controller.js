const Usuario = require('../models/usuario.model');

Usuario.create({
    nome: "javabill",
    email: "java.bill@email.com",
    senha: "98765432",
    telefone: "8198877665544"
}).then(res => {
    console.log(res)
}).catch((error) => {
    console.error('Failed to create a new record : ', error);
});