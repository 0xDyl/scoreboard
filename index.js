let num;
let homePoint = 0;
let guestPoint = 0;
homeScore = document.getElementById("home-score");
guestScore = document.getElementById("guest-score");


function addOne(num) {
    if(num > 0) {
        homePoint += 1;
        homeScore.textContent = homePoint;
    } else {
        guestPoint += 1;
        guestScore.textContent = guestPoint;
    }
}

function addTwo(num) {
    if(num > 0) {
        homePoint += 2;
        homeScore.textContent = homePoint;
    } else {
        guestPoint += 2;
        guestScore.textContent = guestPoint;
    }
}

function addThree(num) {
    if(num > 0) {
        homePoint += 3;
        homeScore.textContent = homePoint;
    } else {
        guestPoint += 3;
        guestScore.textContent = guestPoint;
    }
}