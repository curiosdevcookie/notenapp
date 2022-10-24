function getGrade(theo, pract, project) {
  theo = +document.getElementById('theo').value;
  pract = +document.getElementById('pract').value;
  project = +document.getElementById('project').value;

  const average = ((theo * 2 + pract + project) / 4);
  return (average == 0) ? `Bitte gib alle Noten an.` : average;
}
function displayResult() {
  document.getElementById('result').innerHTML = getGrade(theo, pract, project);
}

document.getElementById('calculate').addEventListener('click', displayResult);


//TO-DO: Add feature to submit the points first:

/*Numerical Score Grade
95 <= score <= 100	'1'
80 <= score < 90	'2'
70 <= score < 80	'3'
60 <= score < 70	'4'
0 <= score < 60	'5'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100. * /
*/

// function toGrade (theoPoints, practPoints, projectPoints) {
//   const average = (theoPoints * 2 + practPoints + projectPoints) / 4;
//   return (average >= 95 ? '1' : average >= 80 ? '2' : average >= 70 ? '3' : average >= 60 ? '4' : '5');
// }
//console.log(getPoints(70, 100, 100));








