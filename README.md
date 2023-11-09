# Complete-Social-Media-Backend-Open-Source
## Complete api
## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Features](#Features)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
## Introduction:
  This is fully fledged  Social Media api that provides users with a place to connect, share, and interact with other. Whether you want to share your thoughts, images, or connect with friends and family.This api is open sourced and you are free to contribute to this.
## Prerequisites:
  - NODE.JS
  - NPM
  - EXPRESS.JS
  - MONGODB
  - POSTMAN
## Features:
 - User can register <br>
 - User can login<br>
 - User can create posts <br>
 - Authorized users can see feed posts <br>
 - User can see his/her personal Posts<br>
 - User can have multiple friends<br>
 - User can add 0R remove friends<br>
 - User can show his/her friends <br>
 - viewrs can like or dislike posts<br>
## Getting Started
1. Clone this repository:
```
git clone https://github.com/mirza7860/Complete-Social-Media-Backend-Open-Source.git
```
2. Install dependencies:
```
npm install
```
3. Set up your env file:<br>
 -create a cluster in monodbatlas<br>
 -Add your connection string into your application code
```
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.bs2alut.mongodb.net/?retryWrites=true&w=majority   
PORT=
JWT_SECRET=
```
To access the web application, open a web browser and navigate to:
```
http://localhost:4000
```
## Folder Structure

Provide an overview of your project's folder structure. For example:

- `public/assets`: Static assets and files served by the application.
- `Static`: Contains the static HTML files, including `index.html`.
- `routes`: Contains route definitions.
- `controllers`: Contains controller functions.
- `middleware`: Contains middleware functions.
- `models`: Contains data models.
## Contributing

I welcome contributions from the community. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## Suggestions
## What can you do ?
features like
1. Nested comments
2. Infinite scroll like facebook
3. Pagination on single user posts
4. Notification
5. Chat
6. Video call with socket.io
