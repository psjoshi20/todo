'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TodoItems', [{
    id: '1',
    description:'lunch at 12 pm',
    createdAt:new Date(),
    updatedAt:new Date(),
    todoId:'1'
  }], {});
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TodoItems', null, {});
  }
};
