// Random race number
let raceNumber = Math.floor(Math.random() * 1000);

// Runner information
let earlyRegistration = true;
let age = 25;

// Early adult runners get 1000 added
if (age > 18 && earlyRegistration) {
  raceNumber += 1000;
}

// Race instructions
if (age > 18 && earlyRegistration) {
  console.log("Race Number: " + raceNumber);
  console.log("Start Time: 9:30 AM");
} else if (age > 18 && !earlyRegistration) {
  console.log("Race Number: " + raceNumber);
  console.log("Start Time: 11:00 AM");
} else if (age < 18) {
  console.log("Race Number: " + raceNumber);
  console.log("Start Time: 12:30 PM");
} else {
  console.log("Please see the registration desk.");
}