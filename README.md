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
- **MySQL:** Database for storing user data, messages, posts, and related information.
- **cors:** Used for cross origin resource sharing.

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
