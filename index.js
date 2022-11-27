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
document.getElementById('calculate').addEventListener('click', celebrations);

// // Display celebrations gif if the value of #result is between 1.0 and 2.3:

// function celebrations(result) {
//   return (document.getElementById('result').innerHTML <= 3) ? console.log("good") : console.log("bad");
// }

// function showGif() {

// }


if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("service-worker.js");
}

let deferredPrompt;
const addBtn = document.querySelector(".add-button");
addBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = "block";

  addBtn.addEventListener("click", (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = "none";
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
}
);