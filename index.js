function getGrade(theo, pract, project) {
  //Test if theo, prac, project is 0:

  theo = +document.getElementById('theo').value;
  pract = +document.getElementById('pract').value;
  project = +document.getElementById('project').value;

  return ((theo === 5 || pract === 5 || project === 5) ? 'Du musst wohl nochmal ran 😓' :
    (theo === 0 || pract === 0 || project === 0) ? 'Du hast noch nicht alles abgegeben 😓' :
      (theo * 2 + pract + project) / 4);
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
*/

// function toGrade (theoPoints, practPoints, projectPoints) {
//   const average = (theoPoints * 2 + practPoints + projectPoints) / 4;
//   return (average >= 95 ? '1' : average >= 80 ? '2' : average >= 70 ? '3' : average >= 60 ? '4' : '5');
// }
//console.log(getPoints(70, 100, 100));








