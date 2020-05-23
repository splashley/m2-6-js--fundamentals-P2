// Exercise 1
// -------------------
// Grubhub's "year in food" for 2018
// source: https://www.insider.com/most-popular-foods-grubhub-2018-12

let mostPopularFood = [
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  undefined,
];

// The array holds a top-ten list of foods as ranked by Grubhub.
// #1 and #10 are missing
//       #1 is 'bean burritos'
//      #10 is 'buffalo-flavored cauliflower' (not kidding)

// Write a program that will do the following:
// Add them to the array in the right position
// Output them in a tidy top-ten fashion in the console.

// NO for loops (use `forEach` instead)

// create function to add foods into array
mostPopularFood.insert = function (item, id) {
  this.splice(item, 0, id);
};

// add missing foods to array
mostPopularFood.insert(0, 'bean burritos');
mostPopularFood.insert(9, 'buffalo-flavored cauliflower');

// for each
mostPopularFood.forEach((item, id) => {
  console.log(`${id + 1}: ${item}`);
})

return mostPopularFood;