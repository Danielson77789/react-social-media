'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PostComments', [{
      commentText: 'This is a comment on the first post.',
      userId: 1,
      postId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      commentText: 'Great post by user 1!',
      userId: 2,
      postId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      commentText: 'Interesting thoughts from user 2.',
      userId: 1,
      postId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      commentText: 'User 1, thanks for sharing!',
      userId: 2,
      postId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      commentText: 'Nice post!',
      userId: 1,
      postId: 5,
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
