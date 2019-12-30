'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Todos', [{
          id: '1',
         title:'lunch',
         createdAt:new Date(),
         updatedAt:new Date()
           }], {});
    },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Todos', null, {});
      }
};
