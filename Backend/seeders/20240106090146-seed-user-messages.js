'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserMessages', [{
      messageText: 'Hi there!',
      senderId: 1,
      recipientId: 2,
      sendDate: '2024-01-06T12:30:00',
      seenDate: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      messageText: 'Hello!',
      senderId: 2,
      recipientId: 1,
      sendDate: '2024-01-06T12:35:00',
      seenDate: '2024-01-06T12:40:00',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      messageText: 'How are you?',
      senderId: 1,
      recipientId: 2,
      sendDate: '2024-01-06T13:00:00',
      seenDate: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      messageText: 'I\'m good, thanks!',
      senderId: 2,
      recipientId: 1,
      sendDate: '2024-01-06T13:05:00',
      seenDate: '2024-01-06T13:10:00',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      messageText: 'What are you up to?',
      senderId: 1,
      recipientId: 2,
      sendDate: '2024-01-06T13:30:00',
      seenDate: null,
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
