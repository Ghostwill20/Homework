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











      // i will attempt making a countdown timer
      // this a base function form w3 schools

      var countDownDate = new Date("Feb 28, 2020 12:00:20").getTime();

      // Update the count down every 1 second
      var x = setInterval(function() {
      
        // Get today's date and time
        var now = new Date().getTime();
          
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
          
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
        // Output the result in an element with id="demo"
        document.getElementById("timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
          
        // If the count down is over, write some text 
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "EXPIRED";
        }
      }, 1000);






      // my attempt at a countdown timer
 
      function countdown(seconds){
        var counter = seconds;
        var interval = setInterval(() => {
          document.getElementById("time").innerHTML = counter--;
          
          if (counter < 0 ) {
          clearInterval(interval);
            document.getElementById("time").innerHTML = "0";
          }	
        }, 1000);
        
        
      }
      
      countdown(15);
      document.getElementById("time").addEventListener("click", countdown);
        function finish() {
          document.getElementById("time").innerHTML = "noooooooooooooooooo";
        }

      // found this resource while scouring the internet