//Restart button
var restart = document.querySelector("#b")

//Get all board squares
var squares = document.querySelectorAll("td")


//Clear board
function clearBoard(){
    for (var i=0; i < squares.length; i++){
    squares[i].textContent = " ";
    }
}

//Add clear board functionality to restart button
restart.addEventListener("click", clearBoard)


//On click, loop through X, O, blank
function changeMarker(){

    if (this.textContent === " ") {
        this.textContent = 'X';
    } else if (this.textContent === 'X') {
        this.textContent = 'O';
    } else{
        this.textContent = " ";
    }
}

//Apply changeMarker to all squares
for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", changeMarker)
}
