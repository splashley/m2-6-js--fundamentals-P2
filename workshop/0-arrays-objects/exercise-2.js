// Exercise 2
// -------------------
const lateComers = ['Felicia', 'Charles', 'Terry'];
const earlyBirds = ['Ellen', 'Jerry', 'Jasmine'];

// You have two arrays above of people who arrived late to your party and
// people who arrived early.
// Create a new array that holds all of the party attendees and

// Write a program that will do the following:
// Output them in a tidy list from first to last arrival the console.

// NO for loops!

// combine arrays
const partyGuests = earlyBirds.concat(lateComers);

// create foreach to make a list of party guests
partyGuests.forEach((person, id) => {
    console.log(`${id + 1}: ${person}`);
})

return partyGuests;