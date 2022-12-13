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

// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;
const buttonInstall = document.querySelector('.add-button');
buttonInstall.style.display = 'none';


window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});

buttonInstall.addEventListener('click', async () => {
  // Hide the app provided install promotion
  hideInstallPromotion();
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  // Optionally, send analytics event with outcome of user choice
  console.log(`User response to the install prompt: ${outcome}`);
  // We've used the prompt, and can't use it again, throw it away
  deferredPrompt = null;
});

window.addEventListener('appinstalled', () => {
  // Hide the app-provided install promotion
  hideInstallPromotion();
  // Clear the deferredPrompt so it can be garbage collected
  deferredPrompt = null;
  // Optionally, send analytics event to indicate successful install
  console.log('PWA was installed');
});

function getPWADisplayMode() {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  if (document.referrer.startsWith('android-app://')) {
    return 'twa';
  } else if (navigator.standalone || isStandalone) {
    return 'standalone';
  }
  return 'browser';
}

window.matchMedia('(display-mode: standalone)').addEventListener('change', (evt) => {
  let displayMode = 'browser';
  if (evt.matches) {
    displayMode = 'standalone';
  }
  // Log display mode change to analytics
  console.log('DISPLAY_MODE_CHANGED', displayMode);
});