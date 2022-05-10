const connection = require('../config/connection');
const { World, User } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');
    
connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing worlds
  await World.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 10; i++) {
    // Get some random thought objects using a helper function that we imported from ./data
    const thoughts = getRandomThoughts(3);

    const fullName = getRandomName();
    const first = fullName.split(' ')[0]
    const last = fullName.split(' ')[1]
    const username=first + last;
    const email = `${first}.${last}@dummy.com`;

    users.push({
    username,
    email,
    thoughts,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add worlds to the collection and await the results
  await World.collection.insertOne({
    worldName: 'UK',
    users: [...users],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});