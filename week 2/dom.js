// auto complete takes user input to auto correct
//need a input box

// list of terms
// mint
// chocalate
// vanilla
// strawberry
// rage 
// moose tracks
// need to compare user input to list of terms on each key stroke
// if letter is special charcater 
// tell user invaild inputif 
// if valid input to letter/letters
// if letter/word in list

// 1 show suggestion
// 2 let user click option they want
// 3 completes word for the user
// 4 lets them Submit

var flavors = [
 "Mint",
 "Chocalate",
 "Vanilla",
 "Strawberry",
 "Rage", 
 "Moose tracks"
]

// function autoComplete(){
//     var input = document.getElementById("userInput").value;
//     if(isValid(input)){
//         flavors.forEach(function(flavor) {
// console.log(flavor);
//         });
// if(flavor.startswith(input)){
// // show to user let the click it fill value in with selected flavor
// }   var suggestions = document.getElementById("productName")
//     suggestions.innerHTML= "";
//     flavors.forEach(function(floor){
//         if(flavor.startWith(input)){
//             var option = document.createElement("option");
//         }option.value = floor;
//         suggestions.appendChild(option);
//     }
//            console.log("invalid input")
//             // change to alert when done for user
//         }
//     }





function isValid(input){
    var regex = /[`!#$%\^&*+=\-\[\]\\;,/{}|\\":<>\?\d+]/g;
    if(regex.test(input)){
        return false
    } else {
            return true;
        }
    }







    function autoComplete(){
        var input = document.getElementById("userInput").value;
        if(isValid(input)){
          var suggestions = document.getElementById("productName");
            suggestions.innerHTML = " ";
         flavors.forEach(function (flavor){
          if(flavor.startsWith(input)){
            // append an option with the flavor
            var option = document.createElement('option');
            option.value = flavor;
            suggestions.appendChild(option);
             }
         });
          
        } else {
          console.log("invalid input");
          //change to alert once done
        }
      }
      
      function isValid(input){
        var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\d+]/g;
        if(regex.test(input)){
          return false
        } else {
          return true;
        }
      }