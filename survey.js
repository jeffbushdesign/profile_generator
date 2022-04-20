const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.) ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              console.log(`My name is ${name.trim()}, and I love ${activity.trim()} (while listening to ${music.trim()}). My favourite food is ${food.trim()} for ${meal.trim()}, my favourite sport is ${sport.trim()}, and my (not-so-secret) power is ${superpower.trim()}.`);
              rl.close();
            })
          })
        })
      })
    })
  })
});

/*
Take it from here.

Instead of asking the user about what they think of Node.js, we can ask them the following questions, in order:

What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
That said, feel free to change the narrative if you have better, more interesting questions to ask them.

Once all questions are answered, our survey app should output a fully formed paragraph for their online profile, similar to the one shown previously. It should then exit. The user would have to rerun the app to go through the process of generating another profile.
*/