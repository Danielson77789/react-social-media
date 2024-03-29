# react-social-media

## Project Overview

This project is a simple social media platform. This application is the result of me wanting to further my skills in react, node, and database design.

# Social Media Website Backend Documentation

## Project Structure

### Folder Structure

/Backend
-/config
-/migrations
-/routes
-/seeders

### File Descriptions

- **config:** Contains information important for database connections and other config files.
- **migrations** Contains the migrations that define the database.
- **routes** Contains the routes that allow the api to communicate with database. 
- **seeders** Contains seeder files that can fill the database with mock data when needed

## Technologies Used

### Backend

- **Express:** Server framework for handling HTTP requests.
- **Sequelize:** ORM for interacting with the MySQL database.
- **Sequelize-cli:** CLI tool for sequelize ORM.
- **MySQL:** Database for storing user data, messages, posts, and related information.
- **cors:** Used for cross origin resource sharing.

### Sequelize-cli commands

- All commands start with the `npx sequelize-cli`
  - **db:seed:all** - To run all seeder files and fill database with mock data.
  - **db:seed:undo:all** - To run down on all seeder files and remove mock data.
  - **db:migrate** - Catch database up to current migration to fit models design.
  - **db:migrate:undo:all** - Remove all migration changes from the database.
  - **model:generate --name modelName --attributes attributeName:type** - To generate a new model as well as a migration to go along with it. modelName is where to set the name of the new model and attributes can not contain spaces. 

## Database Design

### Schema

- **User:** User information.
- **UserMessage:** User messages.
- **Friendship:** Represents friend connections between users.
- **UserPost:** User-generated posts.
- **PostComment:** Comments on posts.
- **PostReact:** Records reactions (e.g., likes) to posts.

### Database Interactions

- **User Authentication:** Handled through JWT tokens. (NOT IMPLEMENTED, future task)
- **CRUD Operations:** Implemented for users, messages, friends, posts, comments, and post reactions.

## API Design

### Endpoints

- `/user`
  - GET `/user` - Takes 'id' as body param, returns given user.
  - POST `/user` - Takes 'firstName, lastName, username, email, password, dob, about' as body params to create a new user

- `/user-post`
  - GET `/user-posts` - Takes 'userId' as body param, returns all posts related to user
  - GET `/post` - Takes post id and returns given post
  - POST `/post` - Takes 'postText, postTitle, userId, mediaLocation' as body params to create new user post

## Challenges Faced

- **Database Relationships:** Establishing and maintaining relationships between tables.
- **Frameworks and database:** One of the most difficult decisions was picking the frameworks used in this project. There are many different ORM, databases, and frameworks that could have been used in this project however I chose mysql and sequelize as they seemed the most interesting.
- **Integration:** Another challenge was integrating all of these different technologies into a single application.
