"use strict";
function getResult(a,b,c){
    let d = b*b - (4*a*c);
    let x = [];
    if (d == 0) {
        x[0] = -b / (2*a);
    } else if ( d > 0) {
        d = Math.sqrt(d);
        x[0] = (-b + d) / (2*a);
        x[1] = (-b - d) / (2*a);
    } 
    return x;
};

function getAverageMark(marks){
    if (marks.length <= 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log ("Оценок больше 5");
        marks.splice(5);
    };
    let sum = 0;
    for (let i=0; i < marks.length; i++) {
        sum += marks[i];
    };
    let averageMark = sum / marks.length;
    return averageMark;
};

function askDrink(name,dateOfBirthday){
    let result = ((new Date().getFullYear() - dateOfBirthday.getFullYear()) >= 18) ? 
    `Не желаете ли олд-фэшн, ${name}?` :
     `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    return result;
.
}