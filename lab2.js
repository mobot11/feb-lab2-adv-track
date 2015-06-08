/*********************************************************
LAB 2: SORTING AND CAMPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

var Blob = function(){
  this.citizensPerHour = 1;
}

var blob = new Blob();

function calculateHours() {
  var hours = 0;
  var citizens = 1000;
  var citizensPerHour = blob.citizensPerHour;
  for (var i = 0; i < citizens; i++) {
    if(citizens >= 0) {
    citizens -= citizensPerHour;
    hours+=1;
    citizensPerHour+=1;
  }
  else {
    break;
  }
}
  return hours;
}


var hoursSpentInDowington = calculateHours();
// TODO: assign me the value of the
// above calculation


// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.
  var hours = 0;
  var citizens = population;
  var citizensPerHour = peoplePerHour;
  for (var i = 0; i < citizens; i++) {
    if(citizens >= 0) {
    citizens -= citizensPerHour;
    hours+=1;
    citizensPerHour+=1;
  }
  else {
    break;
  }
}
  return hours;
}

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(20000, 2) === 198, "I did the math");
assert(blob.hoursToOoze(10, 5) === 2, "Did the math again");
assert(blob.hourstoOoze(-1, 0) === undefined, "should not be able to get
  negative number!");

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing (planet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.planet = planet;
  this.language = language;
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    console.log(this.hello);
    return(hello[sb.language]);
    //TODO: put this on the SentientBeing prototype
  }


// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

 var Klingon = function () {
  this.hello = "nuqneH";
}



var Romulan = function () {
  this.hello = "Jolan\"tru";
}



var Human = function (){
  this.hello = "hello";
}


Klingon.prototype = new SentientBeing('Qo"noS', 'klingon');
Romulan.prototype = new SentientBeing('Romulus', 'romulan');
Human.prototype = new SentientBeing('Earth', 'federation standard');

var klingon = new Klingon();
var romulan = new Romulan();
var human = new Human();

assert((new Human()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((human.sayHello(klingon)) === 'nuqneH',
 "the human should hear nuqneH");
assert((human.sayHello(romulan)) === "Jolan\"tru", 'the human should hear
  "Jolan\"tru');
assert((klingon.sayHello(human)) === "hello", 'the klingon should hear hello');
assert((klingon.sayHello(romulan)) === "Jolan\"tru",
'the klingon should hear hello');
assert((romulan.sayHello(klingon)) === "nuqneH",
  'the romulan should hear nueqneh');
assert((romulan.sayHello(human)) === 'hello', 'the romulan should hear hello');


//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one
//*********************************************************
var myArray = ['cat', 'dog', 'mouse', 'hamster'];
var myArray2 = ['basketball', 'golf', 'tennis', 'swimming'];
function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    firstLetter = a.charAt(a.length-1);
    secondLetter = b.charAt(b.length-1);
    if (firstLetter < secondLetter)
      return -1;
    if (firstLetter > secondLetter)
      return 1;
    return 0;
  }
 return stringArray.sort(byLastLetter);
}

console.log(lastLetterSort(myArray));

assert(lastLetterSort(myArray) === ['mouse','dog', 'hamster', 'cat'], 'the array should be sorted
  ["mouse", "dog", "hamster", "cat"]')
assert(lastLetterSort(myArray2)=== ['golf', 'swimming', 'basketball', 'tennis'], 'the array should return
  ["golf", "swimming", "basketball", "tennis"]')

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  numberArray.forEach(function(value){
    sum += value;
  })
  return sum;
}

var Sorter = function (arrayOfArrays){
  this.arrayOfArrays = arrayOfArrays;
}
Sorter.prototype.sumArray = function(numberArray) {
  var sum = 0;
  numberArray.forEach(function(value){
    sum += value;
  })
  return sum;
}

Sorter.prototype.sumSort = function() {
  var firstArray;
  var secondArray;
  return this.arrayOfArrays.sort(function(a, b) {
    firstArray = this.sumArray(a);
    secondArray = this.sumArray(b);
    return firstArray > secondArray;
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  });
}
var manyArrays = [[0,0,6], [500, 600, 700], [1000, 20, 30], [4, 2, 1]];
var manyArrays2 = [[5,10,15], [400, 0, 0], [12, 24, 36]];
var sorter = new Sorter(manyArrays);
var sorter2 = new Sorter(manyArrays2);

sorter.sumSort();

assert(sorter.sumSort ===[[0,0,6],[4,2,1], [1000, 20, 30], [500,600,700]], "Alert, your function
  is not working");
assert(sorter.sumSort ===[[5,10,15],[12,24,36], [400, 0, 0]], "Alert, your function
  is not working");
//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************


