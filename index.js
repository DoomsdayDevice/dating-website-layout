const startButton = document.querySelector(".top__start-btn .btn");
startButton.addEventListener("click", scrollToJoin);
const joinButton = document.querySelector(".bottom__join-circle-btn");
joinButton.addEventListener("click", scrollToJoin);

function scrollToJoin(){
    const locationOfJoin = 500;
    // let quote = document.querySelector(".quote");
    const signup = document.querySelector(".mid__sign-up");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let signupX = signup.getBoundingClientRect().top + scrollTop - 280;
    window.scroll(0, signupX);
}

const burger = document.querySelector(".burger__bars");
const menuLine = document.querySelector(".menu__burger");
const dropdown = document.querySelector(".menu__dropdown");
menuLine.addEventListener("click", handleMenuButtonPress);


let menuIsOpen = false;
function handleMenuButtonPress(){
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
const pic = document.querySelector('.top__main-pic');
const point = 760;
function handleScroll(){
    let picHeight = parseInt(getComputedStyle(pic).height);
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let picBottom = scrollTop + 30 + picHeight;

    // when bottom of pic touches point
    if (picBottom > point){
        pic.style.position = 'absolute';
        if (innerWidth > 1270){
            pic.style.top = '0';
        } else {
            pic.style.top = point - picHeight + 'px';
        }
    } else {
        pic.style.position = 'fixed';
        pic.style.top = 30 + 'px';
    }

}
document.addEventListener('scroll', handleScroll);
document.addEventListener('resize', handleScroll);
