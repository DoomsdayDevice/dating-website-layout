// add jump events to both buttons
const startButton = document.querySelector(".top__start-btn .btn");
startButton.addEventListener("click", jumpToJoin);
const joinButton = document.querySelector(".bottom__join-circle-btn");
joinButton.addEventListener("click", jumpToJoin);

function jumpToJoin(){
  const locationOfJoin = 500;
  const signup = document.querySelector(".mid__sign-up");
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  let signupX = signup.getBoundingClientRect().top + scrollTop - 280;
  window.scroll(0, signupX);
}


// add hamburger menu open/close event
let menuIsOpen = false;
function handleMenuButtonPress(){
  const burger = document.querySelector(".burger__bars");
  const dropdown = document.querySelector(".menu__dropdown");
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
document.querySelector(".menu__burger").addEventListener("click", handleMenuButtonPress);
