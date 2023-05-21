// Importe os modelos necessários
const Usuario = require('../models/usuario.model'); // Importe o modelo Usuario
const Carona = require('../models/carona.model'); // Importe o modelo Carona
const UsuarioCarona = require('../models/usuarioCarona.model'); // Importe o modelo Usuario

// Controller para criar carona
exports.caronaCreate = async(req, res) =>  {
  const { horario, vagas, status, ehMotorista , usuarioId} = req.body;

  try {
    // Verifique se o usuário existe
    const usuario = await Usuario.findByPk(usuarioId);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Verifique se o usuário já possui uma carona aberta
    // const caronaAberta = await Carona.findOne({
    //   where: { usuarioId: usuarioId, status: 0 }
    // });
    // if (caronaAberta) {
    //   return res.status(400).json({ error: 'Usuário já possui uma carona aberta' });
    // }

    // Crie a carona
    const carona = await Carona.create({
      horario,
      vagas,
      status,
      ehMotorista,
    });

    // Crie a entrada na tabela de junção UsuarioCarona
    await UsuarioCarona.create({
      usuarioId: usuarioId,
      caronaId: carona.id,
    });

    return res.status(201).json(carona);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Erro ao criar a carona' });
  }
}

// Controller para criar carona
exports.caronaJoin = async(req, res) =>  {
  const { horario, vagas, status, ehMotorista=false , usuarioId, caronaId} = req.body;

  try {
    // Verifique se o usuário existe
    const usuario = await Usuario.findByPk(usuarioId);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Verifique se o usuário já possui uma carona aberta
    // const caronaAberta = await Carona.findOne({
    //   where: { usuarioId: usuarioId, status: 0 }
    // });
    // if (caronaAberta) {
    //   return res.status(400).json({ error: 'Usuário já possui uma carona aberta' });
    // }

    // Crie a carona
    const carona = await Carona.create({
      horario,
      vagas,
      status,
      ehMotorista,    
    });

    console.log(usuarioId);
    console.log(caronaId);

    // Crie a entrada na tabela de junção UsuarioCarona
    await UsuarioCarona.create({
      usuarioId: usuarioId,
      caronaId: caronaId,      
    });

    console.log(usuarioId);
    console.log(caronaId);

    return res.status(201).json(carona);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Erro ao criar a carona' });
  }
}

