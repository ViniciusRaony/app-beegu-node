const { sequelize } = require('./server');
const Carona = require("./models/carona.model");
const HistoricoUsuario = require("./models/historicoUsuario.model");
const Rota = require("./models/rota.model");
const Usuario = require("./models/usuario.model");
const UsuarioCarona = require("./models/usuarioCarona.model");
const Veiculo = require("./models/veiculo.model");

async function createData() {
  try {
    await Veiculo.bulkCreate([
        { placa: 'ABC123', modelo: 'Gol', cor: 'Preto' },
        { placa: 'DEF456', modelo: 'Fiat', cor: 'Branco' },
        { placa: 'AAF556', modelo: 'BMW', cor: 'Amarelo' },      
      ]);
      console.log('Veículos criados com sucesso!');
       
    await Usuario.bulkCreate([
    { nome: 'João', email: 'joao@example.com', senha: '123456', telefone: '123456789', veiculoId: 1 },
    { nome: 'Maria', email: 'maria@example.com', senha: 'abcdef', telefone: '987654321' },
    { nome: 'Inaldo', email: 'inaldinho@example.com', senha: 'abcdef123', telefone: '1334219688' },
    { nome: 'Benzema', email: 'benza@example.com', senha: 'teste123', telefone: '81948512645',  veiculoId: 2  },
    { nome: 'Elliot', email: 'elliot@example.com', senha: '@tr@dds', telefone: '1137654321' , veiculoId: 3 },
    { nome: 'Lilo', email: 'lilo@example.com', senha: 'bvsfA256', telefone: '8191454321'},
    { nome: 'Bia', email: 'bia@example.com', senha: 'xDqWe31', telefone: '9197654331' },
    { nome: 'Kanu', email: 'kanu@example.com', senha: '!2sadsa1!f', telefone: '8198654321' },
    { nome: 'JonBill', email: 'jonbill@example.com', senha: 'teste123', telefone: '514554321' },
    { nome: 'Joana', email: 'joana@example.com', senha: 'senacTr123', telefone: '817654321' },    
    ]);
      console.log('Usuários criados com sucesso!');

    await Carona.bulkCreate([
      { horario: '21:00:00', vagas: 3, status: true, ehMotorista: true },
      { horario: '21:10:00', vagas: 2, status: true, ehMotorista: true },
      { horario: '21:20:00', vagas: 2, status: true, ehMotorista: true },
      { horario: '21:30:00', vagas: 3, status: true, ehMotorista: true },
      { horario: '21:40:00', vagas: 2, status: true, ehMotorista: true },
     
    ]);
    console.log('Caronas criadas com sucesso!');

    await Rota.bulkCreate([
        { enderecoInicial: 'Rua do Pombal, 57', enderecoFinal: 'Rua Olinda Ferreira, 69' },
        { enderecoInicial: 'Rua do Pombal, 57', enderecoFinal: 'Av Beberibe, 187' },
        { enderecoInicial: 'Rua do Pombal, 57', enderecoFinal: 'Av Alceu Albuquerque, 1001' },
        { enderecoInicial: 'Rua do Pombal, 57', enderecoFinal: 'Rua B, 1117' },
        { enderecoInicial: 'Rua do Pombal, 57', enderecoFinal: 'Rua Alfa, 987' },
        // Adicione mais linhas aqui conforme necessário
      ]);
      console.log('Rotas criadas com sucesso!');

    await HistoricoUsuario.bulkCreate([
      { dataCarona: new Date(), usuarioId: 1, rotaId: 1 },
      { dataCarona: new Date(), usuarioId: 1, rotaId: 2 },
      { dataCarona: new Date(), usuarioId: 4, rotaId: 3 },
      { dataCarona: new Date(), usuarioId: 5, rotaId: 4 },
      { dataCarona: new Date(), usuarioId: 1, rotaId: 5 },
      // Adicione mais linhas aqui conforme necessário
    ]);
    console.log('Histórico de usuários criado com sucesso!');

    await UsuarioCarona.bulkCreate([
      { usuarioId: 1, caronaId: 1 },
      { usuarioId: 1, caronaId: 2 },
      { usuarioId: 4, caronaId: 3 },
      { usuarioId: 5, caronaId: 4 },
      { usuarioId: 1, caronaId: 5 },
      // Adicione mais linhas aqui conforme necessário
    ]);
    console.log('Usuários-Caronas criados com sucesso!');

    // Sincronizando com banco
    await sequelize.sync();
    console.log('Tabelas sincronizadas com sucesso!');
   } catch (error) {
    console.error('Erro ao criar dados:', error);
   }
 }
 
createData();




