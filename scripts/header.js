const headerBtnProfile = document.querySelector("header .btn-profile");

headerBtnProfile.addEventListener("click", () => {
    const headerDesktopProfile = document.querySelector("header .desktop-profile");
    headerDesktopProfile.classList.toggle("hide");
    headerDesktopProfile.classList.toggle("scaleMenu");
})

const headerMenuBtn = document.querySelector("header .menu-button");

headerMenuBtn.addEventListener("click", () => {
    const headerprofileWrapper = document.querySelector("header .profile-wrapper");
    // first time
    if (headerprofileWrapper.classList.contains("hide")) {
        headerprofileWrapper.classList.remove('hide');
        setTimeout(() => {
            headerprofileWrapper.classList.toggle("hideMenu");
        }, 100);
    } else {
        headerprofileWrapper.classList.toggle("hideMenu");
    };
});


const crossBtn = document.querySelector("#cross-header-icon");
crossBtn.addEventListener("click", () => {
    const headerprofileWrapper = document.querySelector("header .profile-wrapper");
    headerprofileWrapper.classList.toggle("hideMenu");
})


// show user name

import { userName } from "../modules/user.js"

const transitionNameElement = document.querySelector("#transition-username");
const popupNameElement = document.querySelector("#popup-username");
const transitionDiffElement = document.querySelector(".user-name");

window.addEventListener("DOMContentLoaded", async (event) => {
    // update name in both elements
    const uname = await userName();
    if(uname) {
      popupNameElement.innerHTML = uname;
      transitionNameElement.innerHTML = uname;
      transitionDiffElement.innerHTML = uname;
    } else {
      console.log(popupNameElement)
      popupNameElement.innerHTML = "User Name";
      transitionNameElement.innerHTML = "User Name";
      transitionDiffElement.innerHTML = "User Name";
    }
});