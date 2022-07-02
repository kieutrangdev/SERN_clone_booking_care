'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    
      await queryInterface.bulkInsert('Users', [{
        firstName: 'kieu',
        lastName : 'trang', 
        email : 'admin@gamil.com', 
        password: '12345',
        address: 'HN',
        gender: 0,
        typeRole: 'ROLE',
        keyRole: 'R1' ,
       
        createdAt: new Date(),
        updatedAt: new Date(),
    
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
