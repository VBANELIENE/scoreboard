let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


let homeResult = 0;
let guestResult = 0;


function add1pointHome(){
    homeResult +=1;
    homeScore.textContent = homeResult;
}

function add2pointsHome(){
    homeResult +=2;
    homeScore.textContent = homeResult;
}

function add3pointsHome(){
    homeResult +=3;
    homeScore.textContent = homeResult;
}

function add1pointGuest(){
    guestResult +=1;
    guestScore.textContent = guestResult;
}
function add2pointsGuest(){
    guestResult +=2;
    guestScore.textContent = guestResult;
}

function add3pointsGuest(){
    guestResult +=3;
    guestScore.textContent = guestResult;
}
