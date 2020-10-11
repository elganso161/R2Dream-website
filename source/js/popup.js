let authorization = document.querySelector(".authorization-popup");
let downloadPopup = document.querySelector(".download-popup");

function openPopUp() {
  if ((authorization.style.display = "none")) {
    authorization.style.display = "block";
    subProfile.style.display = "none";
  } else {
    authorization.style.display = "none";
  }
}

function downloadGame() {
  if ((downloadPopup.style.display = "none")) {
    downloadPopup.style.display = "block";
  } else {
    downloadPopup.style.display = "none";
  }
}

function closePopup() {
  authorization.style.display = "none";
}

function closeDownload() {
  downloadPopup.style.display = "none";
}
