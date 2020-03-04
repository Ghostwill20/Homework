/* make 2 functions: 1. complicated math
2. waits for the math to get returned*/
//complex math

/**
 * You needed to seperate this into 2 different files, but whatevs you showed me you can do that with the content in the prompt folder, and would prefer you do this using setTimeout() or setInterval and not counting to a big number. This did NOT work running "Node promise" it returned "SyntaxError:" but a solid attempt I added in a functional example. 
 */
function someMath() {
    // you had 1<10000000 should be "i"
    // also you want i to be 10000000 for that if stmt to ever be true so it should be <= not =
    /*for (let i = 0; i <= 10000000; i++){
        // should be == or === not =
        if(i == 10000000) {
            
        }
    }*/
    setTimeout(() => {
        return '100%';
    }, 3000);
}

//promise
function waitForMath(){
    const promise = new Promise((resolve, reject) => { 
        /**
         * Had to format @ try onward to fix syntax errors
         */
        try {
            /**
             * You don't want to resolve on a function call 
             * Try like this
             */
            // Your code -> resolve(someMath());
            let answer = someMath();
            resolve(answer);
        } catch(error){
            reject("error: numbers aint real");
        }
    });
    return promise;
}

waitForMath().then(res=>{
    console.log(res);
})