//1.

/*
Mark and John are trying to compare their BMI 
(Body Mass Index), which is calculated using the formula:
 = mass / height^2 = 
 mass / (height * height). 
 (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable 
containing information about whether Mark
 has a higher BMI than John.
4. Print a string to the console 
containing the variable from step 3. 
(Something like "Is Mark's BMI higher than John's? true")

*/

let massOfMark = 78; // in kg
let heightOfMark = 1.69; // in meters

let massOfJohn = 92;
let heightOfJohn = 1.95;

let BMIOfMark = massOfMark / (heightOfMark * heightOfMark);
let BMIOfJohn = massOfJohn / (heightOfJohn * heightOfJohn);
console.log(BMIOfMark, BMIOfJohn);

let markIsHigherBMI = BMIOfMark > BMIOfJohn;
console.log(`Is Mark's BMI higher than John's? ${markIsHigherBMI}`);

//2.
/*John and Mike both play basketball in different teams.
 In the latest 3 games, John's team scored 89, 120 and 103 points,
  while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), 
and print the winner to the console. Also include the average 
score in the output.
3. Then change the scores to show different winners. Don't 
forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her 
team scored 97, 134 and 105 points. Like before, log the average 
winner to the console. HINT: you will need the && operator to take 
the decision. If you can't solve this one, just watch the solution, 
it's no problem :)
5. Like before, change the scores to generate different winners, 
keeping in mind there might be draws.

*/

let scoresOfJohn = (189 + 120 + 103) / 3;
let scoresOfMike = (129 + 94 + 123) / 3;
let scoresOfMary = (97 + 134 + 105) / 3;
console.log(scoresOfJohn, scoresOfMike, scoresOfMary);

if (scoresOfJohn > scoresOfMike && scoresOfJohn > scoresOfMary) {
  console.log(`John's team wins with ${scoresOfJohn} points`);
} else if (scoresOfMike > scoresOfJohn && scoresOfMike > scoresOfMary) {
  console.log(`Mike's team wins with ${scoresOfMike} points`);
} else if (scoresOMary > scoresOfJohn && scoresOfMary > scoresOfMike) {
  console.log(`Mary's team wins with ${scoresOfMary} points`);
} else {
  console.log("There is a draw");
}

if (scoresOfJohn > scoresOfMike) {
  console.log(`John's team wins with ${scoresOfJohn}points`);
} else if (scoresOfMike > scoresOfJohn) {
  console.log(`Mike's team wins with ${scoresOfMike} points`);
} else {
  console.log("There is a draw");
}

3; /*Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######

*/

for (let line = "#"; line.length < 8; line += "#") console.log(line);

//4.FizzBuzz Question

/*Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out
a significant percentage of programmer candidates. So if you solved it, your
labor market value just went up.)
*/

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

//5 CHESSBOARD

/*Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height.

*/

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

//6.
/*We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
another way to define whether a positive whole number is even or odd:
55
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this?

*/

function isEvenNum(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEvenNum(-n);
  else return isEvenNum(n - 2);
}

console.log(isEvenNum(150));
// true
console.log(isEvenNum(35));
// false
console.log(isEvenNum(-10));
// false

//7.

/*You can get the Nth character, or letter, from a string by writing "string"[N].
The returned value will be a string containing only one character (for example,
"b"). The first character has position 0, which causes the last one to be found at
position string.length - 1. In other words, a two-character string has length
2, and its characters have positions 0 and 1.
Write a function countingBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.
Next, write a function called countingChar that behaves like countingBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countingBs to
make use of this new function.
*/

function countingChar(string, ch) {
  let countedNumbers = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      countedNumbers += 1;
    }
  }
  return countedNumbers;
}

function countingBs(string) {
  return countingChar(string, "B");
}

console.log(countingBs("BBC"));
// → 2
console.log(countingChar("koiwskopak", "k"));

//8.

/*Write a higher-order function loop that provides something like a for loop
statement. It takes a value, a test function, an update function, and a body
function. Each iteration, it first runs the test function on the current loop value
and stops if that returns false. Then it calls the body function, giving it the
current value. Finally, it calls the update function to create a new value and
starts from the beginning.
When defining the function, you can use a regular loop to do the actual
looping.
*/

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(
  3,
  n => n > 0,
  n => n - 1,
  console.log
);
//  3
//  2
//  1

//9.
/*Analogous to the some method, arrays also have an every method. This one
returns true when the given function returns true for every element in the array.
In a way, some is a version of the || operator that acts on arrays, and every is
like the && operator.Implement every as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the some
method.

*/

function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}

console.log(every([1, 3, 5], n => n < 10));
//  true
console.log(every([2, 4, 16], n => n < 10));
//  false
console.log(every([], n => n < 10));
//  true

//10.
/*Write a function that computes the dominant writing direction in a string of
text. Remember that each script object has a direction property that can be
"ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
The dominant direction is the direction of a majority of the characters that
have a script associated with them. The characterScript and countBy functions defined earlier
in the previous kata are probably useful here.
*/

function dominantDirection(text) {
  let countedNumbers = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");

  if (countedNumbers.length == 0) return "ltr";

  return countedNumbers.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

console.log(dominantDirection("Hello!"));
// ltr
console.log(dominantDirection("Hey, مساء الخير"));
//  rtl

//11.

/*Write a class VectorClass that represents a vector in two-dimensional space. It takes
x and y parameters (numbers), which it should save to properties of the same
name.
Give the VectorClass prototype two methods, plus and minus, that take another
vector as a parameter and return a new vector that has the sum or difference
of the two vectors’ (this and the parameter) x and y values.
Add a getter property length to the prototype that computes the length of
the vector—that is, the distance of the point (x, y) from the origin (0, 0).

*/
class VectorClass {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(new VectorClass(1, 2).plus(new VectorClass(2, 3)));
//  Vec{x: 3, y: 5}
console.log(new VectorClass(1, 2).minus(new VectorClass(2, 3)));
//  Vec{x: -1, y: -1}
console.log(new VectorClass(3, 4).length);
//  5

//12.
/*The standard JavaScript environment provides another data structure called
Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it
does not associate other values with those—it just tracks which values are part
of the set. A value can be part of a set only once—adding it again doesn’t have
any effect.
Write a class called Group (since Set is already taken). Like Set, it has add,
delete, and has methods. Its constructor creates an empty group, add adds
a value to the group (but only if it isn’t already a member), delete removes
its argument from the group (if it was a member), and has returns a Boolean
value indicating whether its argument is a member of the group.
Use the === operator, or something equivalent such as indexOf, to determine
whether two values are the same.
Give the class a static from method that takes an iterable object as argument
and creates a group that contains all the values produced by iterating over it.


*/

class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
//  true
console.log(group.has(30));
//  false
group.add(10);
group.delete(10);
console.log(group.has(10));

//13.

/*Make the Group class from the previous kata iterable. 
If you used an array to represent the group’s members, don’t just return the
iterator created by calling the Symbol.iterator method on the array. That
would work, but it defeats the purpose of this kata.
It is okay if your iterator behaves strangely when the group is modified during
iteration.

*/
class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return { done: true };
    } else {
      let result = { value: this.group.members[this.position], done: false };
      this.position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// a
// b
// c

//14.
/*John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator 
(as a function). He likes to tip 20% of the bill when the bill 
is less than $50, 15% when the bill is between $50 and $200, and 10% 
if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

*/

function tipCalculator(bill) {
  let percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

let bills = [124, 48, 268];
let tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];

let finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalValues);

//15.
/*
Mark and John compared their BMIs. Let's now implement the same 
functionality with objects and methods.
1. For each of them, create an object with properties for 
their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. 
Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, 
together with the full name and the respective BMI. Don't forget
 they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).
*/
let john = {
  fullName: "John Smith",
  mass: 110,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

let mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(john.fullName + " has a higher BMI of " + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + " has a higher BMI of " + mark.bmi);
} else {
  console.log("They have the same BMI");
}

//16.

/*

This time, John and his family went to 5 different restaurants. 
The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200,
 and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing 
final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties 
and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants.
 The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between 
$100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips.
 HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0).
  After you have the sum of the array, divide it by the number of elements in it 
  (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average.

*/

let john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (let i = 0; i < this.bills.length; i++) {
      let percentage;
      let bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

let mark = {
  fullName: "Mark Miller",
  bills: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (let i = 0; i < this.bills.length; i++) {
      let percentage;
      let bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

function calcAverage(tips) {
  let sum = 0;
  for (let i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(
    john.fullName +
      "'s family pays higher tips, with an average of $" +
      john.average
  );
} else if (mark.average > john.average) {
  console.log(
    mark.fullName +
      "'s family pays higher tips, with an average of $" +
      mark.average
  );
}

//17.
/* 
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here,
 array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers
 (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer.
 The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether 
the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code.
 So make sure that all your code is private and doesn't interfere with the other programmers code 
 (Hint: we learned a special technique to do exactly that).

*/

(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (let i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
      console.log("Correct answer!");
    } else {
      console.log("Wrong answer. Try again :)");
    }
  };

  let q1 = new Question(
    "Is JavaScript the coolest programming language in the world?",
    ["Yes", "No"],
    0
  );

  let q2 = new Question(
    "What is the name of this course's teacher?",
    ["John", "Micheal", "Jonas"],
    2
  );

  let q3 = new Question(
    "What does best describe coding?",
    ["Boring", "Hard", "Fun", "Tediuos"],
    2
  );

  let questions = [q1, q2, q3];

  let n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  let answer = parseInt(prompt("Please select the correct answer."));

  questions[n].checkAnswer(answer);
})();

//18. the Advanced of the 17

/*
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.

*/

(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (let i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans, callback) {
    let sc;

    if (ans === this.correct) {
      console.log("Correct answer!");
      sc = callback(true);
    } else {
      console.log("Wrong answer. Try again :)");
      sc = callback(false);
    }

    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score) {
    console.log("Your current score is: " + score);
    console.log("------------------------------");
  };

  let q1 = new Question(
    "Is JavaScript the coolest programming language in the world?",
    ["Yes", "No"],
    0
  );

  let q2 = new Question(
    "What is the name of this course's teacher?",
    ["John", "Micheal", "Jonas"],
    2
  );

  let q3 = new Question(
    "What does best describe coding?",
    ["Boring", "Hard", "Fun", "Tediuos"],
    2
  );

  let questions = [q1, q2, q3];

  function score() {
    let sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }
  let keepScore = score();

  function nextQuestion() {
    let n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();

    let answer = prompt("Please select the correct answer.");

    if (answer !== "exit") {
      questions[n].checkAnswer(parseInt(answer), keepScore);

      nextQuestion();
    }
  }

  nextQuestion();
})();

//19.

/*Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. 
All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. 
If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses,
 template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area; //km2
    this.numTrees = numTrees;
  }

  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(
      `${this.name} has a tree density of ${density} trees per square km.`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(
      `${this.name}, build in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street.`
    );
  }
}

const allParks = [
  new Park("Green Park", 1987, 0.2, 215),
  new Park("National Park", 1894, 2.9, 3541),
  new Park("Oak Park", 1953, 0.4, 949)
];

const allStreets = [
  new Street("Ocean Avenue", 1999, 1.1, 4),
  new Street("Evergreen Street", 2008, 2.7, 2),
  new Street("4th Street", 2015, 0.8),
  new Street("Sunset Boulevard", 1982, 2.5, 5)
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log("-----PARKS REPORT-----");

  //----------- Density
  p.forEach(el => el.treeDensity());

  // ------------Average age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

  // ------------Which park has more than 1000 trees
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
  console.log("-----STREETS REPORT-----");

  //---------Total and average length of the town's streets

  const [totalLength, avgLength] = calc(s.map(el => el.length));
  console.log(
    `Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`
  );

  // ---------CLassification of sizes
  s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);

//20.
/*
Given an array of promises, Promise.all returns a promise that waits for all of
the promises in the array to finish. It then succeeds, yielding an array of result
values. If a promise in the array fails, the promise returned by all fails too,
with the failure reason from the failing promise.
Implement something like this yourself as a regular function called Promise_all
.
Remember that after a promise has succeeded or failed, it can’t succeed or
fail again, and further calls to the functions that resolve it are ignored. This
can simplify the way you handle failure of your promise.

*/

function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let pending = promises.length;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then(result => {
          results[i] = result;
          pending--;
          if (pending == 0) resolve(results);
        })
        .catch(reject);
    }
    if (promises.length == 0) resolve(results);
  });
}

// -----------Testing the code.
Promise_all([]).then(array => {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)]).then(array => {
  console.log("We should not get here");
});
