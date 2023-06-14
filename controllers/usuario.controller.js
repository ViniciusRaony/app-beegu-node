const Usuario = require('../models/usuario.model'); // Importe o modelo Usuario

// Create - Cria um novo usuário
exports.usuarioCreate = async (req, res) => {
  try {
    const { nome, telefone } = req.body;
    
    // Crie um novo usuário no banco de dados
    const usuario = await Usuario.create({ nome, telefone });
    
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário!' });
  }
};

// Read - Obtém todos os usuários
exports.usuarioGetAll = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter usuários' });
  }
};

// Read - Obtém um usuário pelo ID
exports.usuarioById = async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: 'Nenhum usuário encontrado' });
    }

    res.json({ nome: usuario.nome });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o usuário pelo ID' });
  }
};


// Read - Obtém um usuário pelo ID
exports.usuarioGetLast = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      order: [['createdAt', 'DESC']], // Ordena por createdAt em ordem decrescente     
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Nenhum usuário encontrado' });
    }

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o último usuário inserido' });
  }
};

// Update - Atualiza um usuário pelo ID
exports.usuarioUpdate = async (req, res) => {
  try {
    const { nome, telefone } = req.body;
    
    const usuario = await Usuario.findByPk(req.params.id);
    
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    
    // Atualize os campos do usuário
    usuario.nome = nome;
    usuario.telefone = telefone;
    
    await usuario.save();
    
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
};

// Delete - Exclui um usuário pelo ID
exports.usuarioDelete = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    
    await usuario.destroy();
    
    res.json({ message: 'Usuário excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir usuário' });
  }
};