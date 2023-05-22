const Usuario = require('../models/usuario.model'); // Model em que vai buscar autenticar
const authService = require('../services/auth.service')
const config = require('../config')
const md5 = require('md5');

// Validar usuário
exports.usuarioValidar = async (req, res) => {
    try {
        const usuario = await Usuario.findOne({
            where: {
                email: req.body.email,
                senha: req.body.senha + config.SALT_KEY
            }
        });

        if (!usuario) {
            res.status(404).send({
                message: 'Usuário ou senha inválidos'
            });
            return;
        }

        const token = await authService.generateToken({
            email: usuario.email,
            nome: usuario.nome,    
        });

        res.status(201).send({
            token: token,
            data: {
                email: usuario.email,
                nome: usuario.nome
            }
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};