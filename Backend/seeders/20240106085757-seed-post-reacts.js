'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PostReacts', [{
      postId: 1,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      postId: 2,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      postId: 3,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      postId: 4,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      postId: 5,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
