'use strict'
function concat(str1, str2) {
    func1.count = 0;
    function func1(){
        str2 = prompt('Enter second string please');
        func1.count++;
        if(str2.length !== 0) {
            return str1 + ' ' + str2;
        }
        else {
            return str1 + ' ' + str1;
        }
    };
    return !str2 ? func1 : str1 + ' ' + str2;
}


// let phrase1= concat("Hulk", "smash!");
// let output= phrase1;
// console.log(output); // Hulk smash!
// let phrase2= concat("Leave");
// output= phrase2();// a prompt appears. Enter "Hulk alone!" into the prompt
// console.log(output); // Leave Hulk alone!
// console.log(phrase2.count); // 1
// output= phrase2();// a prompt appears. Enter "me alone, please!" into the prompt
// console.log(output); // Leave me alone, please!
// output= phrase2();// a prompt appears. Enter "HULK ALONE!" into the prompt
// console.log(output); // Leave HULK ALONE!
// console.log(phrase2.count); // 3
