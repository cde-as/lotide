const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3);
assertEqual(tail([5,6,7]).length, 2);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), 3); // checking for failure
assertEqual(tail([]), undefined);
