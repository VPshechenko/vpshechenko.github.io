let answer = prompt('Please, choose any number from 1 to 4');
if (answer == 1)  {
    alert ((answer*2)/'a');
}
else if (answer == 2) {
    alert ((answer-answer)/0);
}
else if (answer == 3) {
    alert (0 * Infinity);
}
else if (answer == 4) {
    alert (`${answer * 4000000000} < Infinity`);
}
else {
    alert ("Wrong input");
}