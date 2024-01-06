'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      username: 'john_doe',
      email: 'john.doe@example.com',
      password: 'password123',
      dateOfBirth: '1990-01-01',
      lastLogin: '2023-01-01',
      aboutText: 'I am John Doe.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      username: 'jane_smith',
      email: 'jane.smith@example.com',
      password: 'password456',
      dateOfBirth: '1985-05-15',
      lastLogin: '2023-02-01',
      aboutText: 'I am Jane Smith.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },  {
      firstName: 'Alice',
      lastName: 'Johnson',
      username: 'alice_j',
      email: 'alice.j@example.com',
      password: 'alice123',
      dateOfBirth: '1992-08-21',
      lastLogin: '2024-01-06',
      aboutText: 'I am Alice Johnson.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Bob',
      lastName: 'Smith',
      username: 'bob_smith',
      email: 'bob.smith@example.com',
      password: 'bob456',
      dateOfBirth: '1988-05-10',
      lastLogin: '2024-01-06',
      aboutText: 'I am Bob Smith.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Charlie',
      lastName: 'Davis',
      username: 'charlie_d',
      email: 'charlie.d@example.com',
      password: 'charlie789',
      dateOfBirth: '1995-03-17',
      lastLogin: '2024-01-06',
      aboutText: 'I am Charlie Davis.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Emma',
      lastName: 'Miller',
      username: 'emma_m',
      email: 'emma.m@example.com',
      password: 'emma101',
      dateOfBirth: '1990-11-29',
      lastLogin: '2024-01-06',
      aboutText: 'I am Emma Miller.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'David',
      lastName: 'Clark',
      username: 'david_c',
      email: 'david.c@example.com',
      password: 'david777',
      dateOfBirth: '1987-09-05',
      lastLogin: '2024-01-06',
      aboutText: 'I am David Clark.',
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
