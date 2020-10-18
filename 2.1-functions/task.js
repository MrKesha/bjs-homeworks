"use strict";

function getSolutions(a,b,c){
  let D = b*b - (4*a*c);
  let value = {
    'D': D,
    roots: []
  }
  if (D == 0) {
    let x1 = -b / (2*a);
    value.roots = [x1];
  } else if ( D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2*a);
    let x2 = (-b - Math.sqrt(D)) / (2*a);
    value.roots = [x1,x2];
  }
  return value
};
  
function showSolutionsMessage(a,b,c) {
  let result = new getSolutions(a,b,c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`)
  console.log(`Значение дискриминанта: ${result['D']}`)
  if (result['D'] === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result['roots']}`)
  } else if (result['D'] > 0) {
    console.log(`Уравнение имеет два корня. X₁ = ${result['roots'][0]}, X₂ = ${result['roots'][1]}`)
  } else if (result['D'] < 0) {
    console.log(`Уравнение не имеет вещественных корней`)
  }
};



function getAverageMark(marks) {
  let sum = marks.reduce((partial_sum, a) => partial_sum + a,0);
    if (sum <= 0) {
      return 0;
    } else if (sum > 0) {
      let middle = sum / marks.length;
      return middle;
    }
};

function getAverageScore(data){
  let keys = Object.keys(data);
  keys.forEach(key => {
    console.log(`${key} : ${getAverageMark(data[key])}`);
  });
  
};


console.log(getAverageScore({
  algebra : [4, 5, 5, 4],
  geometry : [2, 5],
  russian : [3, 3, 4, 5],
  physics : [5, 5],
  music : [ 2, 2, 5],
  english : [4, 4, 3, 3],
  poetry : [5, 3, 4],
  chemistry : [2],
  french : [4, 4] 
}));


function getPersonData(secretData) {
  const entries = Object.entries(secretData);
  entries.forEach(([key, value]) => {
  console.log(`${getDecodedValueName(key)}: ${getDecodedValue(value)}`)
})

}
function getDecodedValueName(key) {
  if (key === "aaa") {
    return "firstName"
  } else if (key === "bbb") {
    return "lastName"
  }
};
function getDecodedValue(secret) {
  if (secret === 1) {
    return "Эмильо"
  } else if (secret === 0) {
    return "Родриго"
  }
};