String.prototype.isPalindrome = function(source) {
  const string = this.toLowerCase().replace(/\s/g, '').split('');
  return string.join('') === string.reverse().join('');
}


function getAverageMark(marks) {
  let sum = marks.reduce((partial_sum, a) => partial_sum + a,0);
  if (sum <= 0) {
    return 0;
  } else if (sum > 0) {
    let averagee = sum / marks.length;
    let roundedAverage = Math.round(averagee);
    return roundedAverage
  }
}


function checkBirthday(birthday) {
  let now = Date.now();
  birthday = new Date(birthday)
  let diff = now - birthday;
  let age = diff/(365*24*60*60*1000); 
  let result = age > 18
  return result
}