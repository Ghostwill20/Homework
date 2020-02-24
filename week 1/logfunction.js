var ps = "the best";
var xbox = 7;
var x = (ps * xbox);

console.log(x);

var a = "comput";
var b = 81;
var y = (a / 81);
console.log(y);
// var input examples
var dog = "50"
var cat = "50"
var final = (dog - cat);

console.log(final);
// it should return a value of 0
// the result match up

var tiger = "500"
var lion = "250"
var result = (tiger * lion);
console.log(result);
// my result im looking for idk
// the answer is 125000

/*while(false);{
  console.log("hello");
}
*/
function arearoot(len, wid) {
  var arearoot = len * wid;
  return arearoot;
};
var area = arearoot(5, 10);
var area = arearoot (25, 25);
var area = arearoot (9, 7);
console.log(area);
 //function practice


//conditional

var bug = 2;

console.log(bug + 5);

console.log(bug * 7);

//dividing 14 into 3 will leave you with 9 with a remainder of 2

console.log(bug % 3);

console.log(bug % 2);
// i think the anwser will be either one or zero
// the anwser was 0 i was half right 


if (bug % 2 == 0) { console.log("i like games"); }

else {
  console.log("no");
}

var ilovemyps4 = "true"

if (ilovemyps4 || 9 < 100) {
  console.log("my fav type");
}
if (ilovemyps4 && 9 < 100) { console.log("i hate xbox"); }


var ps4 = true
if (ps4 > 5) {
  console.log(10)

}
else {
  (ps4 < 5)
  console.log(20)
}



//loop
var a = 25
for (var a = 25; a <= 125; a++) {
  console.log(a);
}

var word = 0
while (word <= 50) {
  if (word % 2 === 0) {
    console.log(word);
  }
  word++;
}

for (c = 0; c < 100; c++) {
  if (c % 3 == 0) {
    console.log("fizz")
  }
  else if (c % 5 == 0)
    console.log("buzz")
  else (c % 15 == 0)
  console.log("fizzbuzz")
}

var dog = 10
while (dog <= 1000) {
  if (dog % 10 === 0) {
    console.log(dog);
  }
  dog++;
  if (dog * 10 === 0) {
    console.log(cat)
  }


}
// i want to find numbers % 5 up to 500

for (let i = 0; i <= 5; i++)
  console.log(i)
//  


//exercise function
function addition(mum1, mum2) {
  console.log(mum1 + mum2)
}

addition(50, 125);


function multiply(mum1, mum2) {
  console.log(mum1 * mum2);
}


multiply(50, 125);


var a = 50
var b = 125
for (var a = 50; a <= 125; a++) {
  console.log(a);
}

//global scope
function subtraction(mum1, mum2) {
  console.log(mum1 - mum2)
}

subtraction(25, 100);

(function subtraction() {
  var x = 25;
  var y = 100;
  var answer = x - y;
  console.log(x - y);
});
//global function

function randomCheck() {
  var x = document.getElementById('userinput').value; z
}