let name = ['apple', 'blueberry', ' broccoli', 'milk', 'cheese'];
let qty = [10, 15, 5, 25, 4]; 

document.getElementById("demo").innerHTML = name.toString();
document.getElementById("demo").innerHTML = qty.toString();

function add() {
    let input = document.getElementById('userInput').value;
    for(let i = 0; i < name.length; i++) {
        if(input == name[i]) {
            qty[i]++;
            console.log(`${name[i]}: ${qty[i]}`);
        } 
    }
}

function sub() {
    let input = document.getElementById('userInput').value;
    let i = 0;
    name.forEach(function (name) {
        if(name == input) {
            if(qty[i] > 1) {
                qty[i]--;
                console.log(`${name}: ${qty[i]}`);
            } else if(qty[i] == 0) {
                console.log(`${name} is out of stock!!!`);
                console.log(`${name}: ${qty[i]}`);
            } else {
                console.log(`${name} is out of stock!!!`);
                qty[i]--;
                console.log(`${name}: ${qty[i]}`);
            }
        }
        i++;
    });
}
