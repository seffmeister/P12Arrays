
//Create an array to count the occurrences of random numbers
//Roll 10 000 times for a number between 0 and 10 by using:
//  Math.floor(Math.random() * 11);
//And count the number of times that you have rolled that specific number
//Afterwards, print the result to the console.

let randomNumber = [0,0,0,0,0,0,0,0,0,0];

for (let i = 0; i < 100; i++) {
  let randomNumber = getRandomInt(10);
  getNumber [randomNumber] += 1;
}
  console.log(randomNumber);


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



