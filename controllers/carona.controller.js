// Importe os modelos necessários
const Usuario = require('../models/usuario.model'); // Importe o modelo Usuario
const Carona = require('../models/carona.model'); // Importe o modelo Carona
const UsuarioCarona = require('../models/usuarioCarona.model'); // Importe o modelo Usuario

// Controller para criar carona
exports.caronaCreate = async(req, res) =>  {
  const { horario, vagas, enderecoInicial, enderecoFinal, createdAt, updatedAt  } = req.body;

  console.log('Valor do campo horario recebido do corpo da requisição:', horario);

  try {
    // Adicione uma instrução de log aqui para verificar o valor do campo horario antes de chamar o método Carona.create
    console.log('Valor do campo horario antes de chamar o método Carona.create:', horario);

    // Verifique se o usuário existe
    // const usuario = await Usuario.findByPk(usuarioId);
    // if (!usuario) {
    //   return res.status(404).json({ error: 'Usuário não encontrado' });
    // }

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
      enderecoInicial,
      enderecoFinal,
      createdAt,
      updatedAt,
    }); 

    // Crie a entrada na tabela de junção UsuarioCarona
    // await UsuarioCarona.create({
    //   usuarioId: usuarioId,
    //   caronaId: carona.id,
    // });

    return res.status(201).json(carona);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Erro ao criar a carona' });
  }
}

// Controller para criar carona
// exports.caronaJoin = async(req, res) =>  {
//   const { horario, vagas, status, ehMotorista=false , usuarioId, caronaId} = req.body;

//   try {
//     // Verifique se o usuário existe
//     const usuario = await Usuario.findByPk(usuarioId);
//     if (!usuario) {
//       return res.status(404).json({ error: 'Usuário não encontrado' });
//     }

    // Verifique se o usuário já possui uma carona aberta
    // const caronaAberta = await Carona.findOne({
    //   where: { usuarioId: usuarioId, status: 0 }
    // });
    // if (caronaAberta) {
    //   return res.status(400).json({ error: 'Usuário já possui uma carona aberta' });
    // }

//     // Crie a carona
//     const carona = await Carona.create({
//       horario: new Date(`1970-01-01T${horario}Z`),
//       vagas,
//       status,
//       ehMotorista,    
//     });

//     console.log(usuarioId);
//     console.log(caronaId);

//     // Crie a entrada na tabela de junção UsuarioCarona
//     await UsuarioCarona.create({
//       usuarioId: usuarioId,
//       caronaId: caronaId,      
//     });

//     console.log(usuarioId);
//     console.log(caronaId);

//     return res.status(201).json(carona);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: 'Erro ao criar a carona' });
//   }
// }

// Read - Obtém todos as caronas
exports.caronaGetAll = async (req, res) => {
  try {
    const caronas = await Carona.findAll({
      order: [['createdAt', 'DESC']]
    });
    
    res.json(caronas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter caronas' });
  }
};

// Read - Obtém um carona pelo ID
exports.caronaGetById = async (req, res) => {
  try {
    const carona = await Carona.findByPk(req.params.id);
    
    if (!carona) {
      return res.status(404).json({ error: 'Carona não encontrada' });
    }
    
    res.json(carona);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter carona' });
  }
};

// Update - Atualiza uma carona pelo ID
exports.caronaUpdate = async (req, res) => {
  try {
    const { horario, vagas, enderecoInicial, enderecoFinal } = req.body;
    
    const carona = await Carona.findByPk(req.params.id);
    
    if (!carona) {
      return res.status(404).json({ error: 'Carona não encontrada' });
    }
    
    // Atualize os campos do usuário
    carona.horario = horario;
    carona.vagas = vagas;
    carona.enderecoInicial = enderecoInicial;
    carona.enderecoFinal = enderecoFinal
    
    await carona.save();
    
    res.json(carona);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar carona' });
  }
};

// Delete - Exclui um usuário pelo ID
exports.caronaDelete = async (req, res) => {
  try {
    const carona = await Carona.findByPk(req.params.id);
    
    if (!carona) {
      return res.status(404).json({ error: 'Carona não encontrada' });
    }
    
    await carona.destroy();
    
    res.json({ message: 'Carona excluída com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir carona' });
  }
};

