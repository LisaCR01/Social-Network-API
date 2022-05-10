### Social Network API

In this project I built an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. My motivation behind this application is exploring the use of MongoDB; as its a popular NoSQL database program used by many social networks. 

## Technologies

* JavaScript
* JSON
* Node.js
* Nodemon package
* Express.js package
* Mongoose package

## Criteria I met to achieve this

to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

- When a user enters the command to invoke the application, then the server starts and the Mongoose models are synced to the MongoDB database.
- When a user opens API GET routes in Insomnia for users and thoughts; then the relevant data is displayed in a formatted JSON.
- When a user tests API POST, PUT, and DELETE routes in Insomnia they successfully  create, update, and delete users and thoughts in their database
- When a user tests API POST and DELETE routes in Insomnia they successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.
