let startButton = document.querySelector(".start-button");
startButton.addEventListener("click", scrollToJoin);
let joinButton = document.querySelector(".join-circle-button");
joinButton.addEventListener("click", scrollToJoin);

function scrollToJoin(){
    let locationOfJoin = 500;
    // let quote = document.querySelector(".quote");
    let signup = document.querySelector(".main__mid__sign-up");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let signupX = signup.getBoundingClientRect().top + scrollTop - 280;
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

let scrollTop;
let pic = document.querySelector('.top-pic');
let point = 760;
function handleScroll(){
    let picHeight = parseInt(getComputedStyle(pic).height);
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log("scrollTop:", scrollTop);
    console.log("picHeight:", picHeight);


    let picBottom = scrollTop + 30 + picHeight;
    console.log("picBottom:", picBottom);

    // when bottom of pic touches point
    if (picBottom > point){
        pic.style.position = 'absolute';
        pic.style.top = point - picHeight + 'px';
    } else {
        pic.style.position = 'fixed';
        pic.style.top = 30 + 'px';
    }

}
document.addEventListener('scroll', handleScroll);
