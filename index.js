
/*Numerical Score Grade
95 <= score <= 100	'1'
80 <= score < 90	'2'
70 <= score < 80	'3'
60 <= score < 70	'4'
0 <= score < 60	'5'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100. * /
*/


document.getElementById('berechnen').addEventListener('click', displayResult);

function displayResult() {
  document.getElementById('result').value = getGrade();
}


const theoGrade = document.getElementById('theoGrade').value;
const practGrade = document.getElementById('practGrade').value;
const projectGrade = document.getElementById('projectGrade').value;

//TO-DO: Add feature to submit the points first:
// function toGrade (theoGradePoints, practGradePoints, projectGradePoints) {
//   const average = (theoGradePoints * 2 + practGradePoints + projectGradePoints) / 4;
//   return (average >= 95 ? '1' : average >= 80 ? '2' : average >= 70 ? '3' : average >= 60 ? '4' : '5');
// }
//console.log(getPoints(70, 100, 100));

function getGrade(theoGrade, practGrade, projectGrade) {
  const average = (theoGrade * 2 + practGrade + projectGrade) / 4;
  return (average === 0 ? 'Bitte gib alle Noten ein' : average)
}
console.log(getGrade(2, 1, 4));






