'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('friendships', [{
    //   senderId: 1,
    //   recipientId: 2,
    //   acceptStatus: true,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   senderId: 2,
    //   recipientId: 1,
    //   acceptStatus: true,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   senderId: 1,
    //   recipientId: 3,
    //   acceptStatus: false,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   senderId: 3,
    //   recipientId: 1,
    //   acceptStatus: false,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   senderId: 2,
    //   recipientId: 3,
    //   acceptStatus: true,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   senderId: 3,
    //   recipientId: 2,
    //   acceptStatus: true,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   senderId: 4,
    //   recipientId: 5,
    //   acceptStatus: false,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   senderId: 5,
    //   recipientId: 4,
    //   acceptStatus: false,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },], {});
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
