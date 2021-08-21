

let guesses = [];

let corectNumber = GetRandomNumber();

window.onload = function(){

    document.getElementById("Number-submit").addEventListener("click", playGame);
    document.getElementById("Restart-game").addEventListener("click", initGame);

}


function playGame(){

    let numberGues = document.getElementById("Gues-number").value;
    displayResult(numberGues);
    saveGuesHistory(numberGues);
    displayGuesHistory();
}

function displayResult(numberGues){

    if(numberGues >corectNumber){
     showNumberAboue();

    }
    else if(numberGues < corectNumber){
        showNumberBelow();

    }
    else if (numberGues == corectNumber) {

           showYouwon();
        
    }
}

function initGame(){

    corectNumber = GetRandomNumber();
    document.getElementById("Result").innerHTML = "";
    guesses = [];
    displayGuesHistory();

}

function GetRandomNumber(){

    let randomNumber = Math.random();
    
    let wholeNumber =Math.floor( randomNumber * 100) + 1;

    return wholeNumber;
}

function saveGuesHistory(guess){

    guesses.push(guess);
    console.log(guesses);

}

function displayGuesHistory(){

    let index = guesses.length-1;

    let list = "<ul class = 'list-group'>";

    while(index >=0){

        list +="<li class='list-group-item'>" +
        " you Guessed " + guesses[index] + "</li>";
        index -=1;
    }

    list +='</ul>';
    document.getElementById("History").innerHTML = list;
}


function getdialog(dialogType , text){

    let dialog;

    switch (dialogType){
        case 'warning':
            dialog = "<div class ='alert alert-warning' role = 'alert'>";
        break;
        case 'won':
            dialog = "<div class ='alert alert-success' role = 'alert'>";
        break;
    }
    dialog += text;
    dialog += "</div>";
    return dialog;
}


function showYouwon(){

    const text = "Awesome job you got it !  ";



    let dialog = getdialog('won', text);
    console.log(dialog);

    document.getElementById("Result").innerHTML = dialog;

}

function showNumberAboue(){
    const text = "your guess is to high ! ";
     
    let dialog = getdialog('warning', text);
    document.getElementById("Result").innerHTML = dialog;

}

function showNumberBelow(){
    const text = "your guess is to low ! ";

    let dialog = getdialog('warning', text);
    document.getElementById("Result").innerHTML = dialog;

}