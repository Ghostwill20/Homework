/* make 2 functions: 1. complicated math
2. waits for the math to get returned*/
//complex math
function someMath() {
    for (i=0; 1<10000000; i++){
        if(i= 10000000){
            return i;
        }
    }
​
}
//promise
function waitForMath(){
    return new Promise((resolve, reject)=>{
      try{
        resolve(someMath());
      } catch(error){
          reject("error: numbers aint real");
    }
})
}
​
waitForMath().then(res=>{
    console.log(res);
})