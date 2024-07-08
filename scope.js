let globalVar = "I'm global variable"

function demoscope() {
    let localvar = "I'm local variable"

    console.log(globalVar);
    console.log(localvar);
}

demoscope(); 
console.log(globalVar);
// console.log(localvar);