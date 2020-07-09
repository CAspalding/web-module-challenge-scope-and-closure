// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * Counter 1 has all of the code within the function, meaning it has function level scope. 
 * 2. Which of the two uses a closure? How can you tell?
 * Counter 2 because it has to reach outward to grab the count variable.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * Counter one is preferable if do not want the count variable accessable in the global scope. This would be useful if you needed the count to always reset to 0. The second one is more useful if you are making something like a timer that you need to add and subtract time from. 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {

  return Math.floor(Math.random() * 3)

};

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(innings) {
  const score = {
    Home: 0,
    Away: 0,
  };

  for (var i = 0; i < innings; i++) {
    score.Home = score.Home + inning()
    score.Away = score.Away + inning()
  };
  console.log(score)
  return score

};




/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore() {
  const score = {
    Home: 0,
    Away: 0,
  };

  score.Home = score.Home + inning()
  score.Away = score.Away + inning()

  return (score)

};

function scoreboard(innings) {
  const score = {
    Home: inning(),
    Away: inning(),
  }

  console.log("1st inning: " + score.Home + "-" + score.Away)
  score.Home = score.Home + inning()
  score.Away = score.Away + inning()
  console.log("2nd inning: " + score.Home + "-" + score.Away)
  score.Home = score.Home + inning()
  score.Away = score.Away + inning()
  console.log("3rd inning: " + score.Home + "-" + score.Away)
  for (let i = 0; i < innings - 3; i++) {
    score.Home = score.Home + inning()
    score.Away = score.Away + inning()
    console.log(i + 4 + "th inning: " + score.Home + "-" + score.Away)
  }
  console.log("Final Score:" + score.Home + "-" + score.Away)
};

scoreboard(9)