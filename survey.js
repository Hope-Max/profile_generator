const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const database = {};

rl.question('What\'s your name?(Nicknames are also acceptable)\n', (name) => {
  database.name = name;
  rl.question(`${name}, what's an activity you like doing?\n`, (interests) => {
    database.interests = interests;
    rl.question(`${name}, what do you listen to while doing that?\n`, (music) => {
      database.music = music;
      rl.question(`${name}, which meal is your favourite?\n`, (meal) => {
        database.meal = meal;
        rl.question(`${name}, what's your favourite thing to eat for that meal?\n`, (favouriteFood) => {
          database.favouriteFood = favouriteFood;
          rl.question(`${name}, which sport is your absolute favourite?\n`, (sport) => {
            database.sport = sport;
            rl.question(`${name}, what is your superpower?\n`, (superpower) => {
              database.superpower = superpower;
              rl.close();
            });
          });
        });
      });
    });
  });
});

rl.on('close', () => {
  console.log(`${database.name} loves listening to ${database.music} while ${database.interests}, 
devouring ${database.favouriteFood} for ${database.meal}, perfers ${database.sport} over any other sport, 
and is amazing at ${database.superpower}.`);
});