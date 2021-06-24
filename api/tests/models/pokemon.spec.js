// const { Pokemons, conn } = require('../../src/db.js');
// const { expect } = require('chai');

// describe('Pokemon model', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
//   describe('Validators', () => {
//     beforeEach(() => Pokemons.sync({ force: true }));
//     describe('name', () => {
//       it('should throw an error if name is null', (done) => {
//         Pokemons.create({})
//           .then(() => done(new Error('It requires a valid name')))
//           .catch(() => done());
//       });
//       it('should work when its a valid name', () => {
//         Pokemons.create({ name: 'Pikachu' });
//       });
//     });
//   });
// });
// describe('attack', () => {
//   it('You shouldnt create a Pokemon if the data input is a string where an integer must be', async () => {
//     try {
//       await Pokemons.create({
//         name: 'Metapod',
//         attack: 'This is invalid data',
//       });
//     } catch (err) {}
//     const pokemon = await Pokemons.findOne({
//       where: {
//         name: 'Metapod',
//       },
//     });
//     expect(pokemon).to.equal(null);
//   });
// });
// describe('Create a new Pokemon', () => {
//   describe('new Pokemon', () => {
//     it('should create a new Pokemon correctly', async () => {
//       await Pokemons.create({name: 'Charizard', attack: 120});
//       const pokemon = await Pokemons.findOne({
//         where: {
//           name: 'Charizard',
//         },
//       });
//       expect(pokemon.name).to.equal('Charizard');
//       expect(pokemon.attack).to.equal(120);
//     });
//   });
// });
