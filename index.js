let startButton = document.querySelector(".start-button");
startButton.addEventListener("click", scrollToJoin);
let joinButton = document.querySelector(".join-circle-button");
joinButton.addEventListener("click", scrollToJoin);

function scrollToJoin(){
    let locationOfJoin = 500;
    // let quote = document.querySelector(".quote");
    let signup = document.querySelector(".sign-up");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let signupX = signup.getBoundingClientRect().top + scrollTop - 280;
    console.log("quote X:", signupX);
    window.scroll(0, signupX);
}

let burger = document.querySelector(".menu__burger__bars-container");
let menuLine = document.querySelector(".menu__burger");
let dropdown = document.querySelector(".menu__dropdown");
menuLine.addEventListener("click", menuButtonPress);


let menuIsOpen = false;
function menuButtonPress(){
    if (!menuIsOpen){
        burger.style.transform = "rotate(-90deg)";
        menuIsOpen = true;
        dropdown.style.opacity = "1";
    } else {
        burger.style.transform = "";
        menuIsOpen = false;
        dropdown.style.opacity = "0";
    }
}
