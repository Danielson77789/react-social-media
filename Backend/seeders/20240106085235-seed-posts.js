'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserPosts', [{
      postText: 'This is the first post.',
      postTitle: 'First Post',
      userId: 1,
      mediaLocation: 'media/first_post.jpg', // Replace with the actual media location
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      postText: 'Another post by user 1.',
      postTitle: 'User 1 Post',
      userId: 1,
      mediaLocation: 'media/user1_post.jpg', // Replace with the actual media location
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      postText: 'Post from user 2.',
      postTitle: 'User 2 Post',
      userId: 2,
      mediaLocation: 'media/user2_post.jpg', // Replace with the actual media location
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      postText: 'User 2 sharing something.',
      postTitle: 'User 2 Share',
      userId: 2,
      mediaLocation: 'media/user2_share.jpg', // Replace with the actual media location
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      postText: 'Final post from user 1.',
      postTitle: 'Last Post by User 1',
      userId: 1,
      mediaLocation: 'media/last_post_user1.jpg', // Replace with the actual media location
      createdAt: new Date(),
      updatedAt: new Date(),
    }],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserPosts', null, {});
  }
};
