let profile = document.querySelector(".profile__list-item");
let subProfile = document.querySelector(".sub-profile__list");

function openProfile() {
  if (subProfile.style.display === "block") {
    subProfile.style.display = "none";
  } else {
    subProfile.style.display = "block";
  }
}
