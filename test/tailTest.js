const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
assertEqual(tail([5,6,7]).length, 2);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), 3);
assertEqual(tail([]));
