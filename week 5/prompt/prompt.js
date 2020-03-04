// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })


// readline.question(`what is 2+2`, (anwser) => {
//   console.log(`4 ${anwser}!`)
// readline.close()
//   if(anwser > 4 || anwser < 4 ){
//     console.log(err)
// }
// })
//end of manipuliation
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('guess first name : ', (name1) => {
//     rl.question('guess last name  : ', (name2) => {
     
//       var result = (name1)+ " " + (name2);

//         if(name1 !== "carlos"){
//           console.log("err");
//         }
//         else if(name2 !== "williams"){
//           console.log("err");
//         }
       
//         else
//         console.log(`correct my name is ${result}`);

//         rl.close();
        
//     });
// });



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What city i live in : ', (city) => {
    rl.question('what state i live in  : ', (state) => {
     
      var result = (city)+ " " + (state);

        if(city !== "augusta" || state !== "georgia"){
          console.log("guess again");
        }
       
      


        else
        console.log(`correct the state yo live in ${result}`);

        rl.close();
        
    });
});