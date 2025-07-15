/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");
const mapChoice = readline.question("Do you have Map (yes/no)?");
const compassChoice = readline.question("Do you have Compass (yes/no)?");
const boatChoice = readline.question("Do you have Boat and paddle (yes/no)?");

const hasTorch = true;
const hasMap = mapChoice.toLowerCase() == "yes" || mapChoice.toLocaleUpperCase() == "yeah"; // used || operator
const hasCompass = compassChoice.toLowerCase() == "yes" || compassChoice.toLocaleUpperCase() == "yeah";
const hasBoat = boatChoice.toLowerCase() == "yes" || boatChoice.toLocaleUpperCase() == "yeah";
const hasPaddle = hasBoat;

let reachedDestination = false;
if(choice === "village") {
  if(hasMap && hasCompass && hasTorch) { // used && operator
    console.log("Now you have map, compass and torch, you can navigate to the village.")
    if(hasBoat && hasPaddle) { // nested if
      reachedDestination = true;
      console.log("You can use the boat and paddle to cross the river.");
    }
  } else {
    console.log("Map and/or compass are missing.So, it's difficult to navigate to village.")
  }
} else {
  if(hasMap && hasCompass && hasTorch) {
     reachedDestination = true;
    console.log("Now you have map, compass and torch, you can navigate to the mountain.")
  }
}

if(!reachedDestination) {// used ! operator
  console.log("You have not reached the "+choice);
} else {
  console.log("You have reached the "+choice);
}


/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
/*const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;


console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");


if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

*/