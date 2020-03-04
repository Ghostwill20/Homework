/**
 * You need to add some kind of functionallity to exit the program without using Ctrl + C. An example would be something like everytime the user types exit execute "rl.close()" Other than some formatting issues all looks good with this one. 
 */

var dog = "50"; // <- don't forget them semicolons
var cat = "50"; // <- don't forget them semicolons
var final = (dog * cat);
console.log(dog * cat); // <- semicolon
// this worked in node

const importsss = require("./cmb2");

importsss.log('hello');
importsss.add(2,2);
/**
 * You actually don't need a semicolon after a single line statement but you have above this so the key here is being consistant. 
 */
importsss.tim('the clubhouse'); // <- don't forget the semi colons 


function carlos(){
    var w = 25 + 25
        console.log(w)
}; // <- this closing bracket should be inline with the "f" in function
carlos();

// succesfully imported and exported my files

function williams(){
    /**
     * Hey bruh this needs to be tabbed in like this because this is nested inside of another function
     */
    setTimeout(function(){
        console.log("the clubhouse");
    }, 50000);
}
williams();
// successfully imported 50000 ms
