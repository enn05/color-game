var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeBtn = document.querySelectorAll(".mode");
var triesDisplay = document.querySelector("#triesDisplay");
// var lives = 5;
var numOfTries = 3;
var gameOver = false;

init();

function init() {
    setupModeBtn();
    setupSquares();
    reset();
}

function setupModeBtn() {
    //mode Buttons event listeners
    for (var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function () {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            //ternary operator
            // this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
        });
    }
}

function setupSquares() {
    //loop through every square
    for (var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if (!gameOver) {
                numOfTries--;
                if (clickedColor === pickedColor && numOfTries !== 0) {
                    messageDisplay.classList.add("correct");
                    messageDisplay.classList.remove("wrong");
                    messageDisplay.textContent = "Correct!";
                    changeColors(clickedColor);
                    h1.style.backgroundColor = clickedColor;
                    resetButton.textContent = "Play Agian?";
                    gameOver = true;
                } else if (numOfTries === 0) {
                    messageDisplay.textContent = "Game Over!";
                    messageDisplay.classList.add("wrong");
                    messageDisplay.classList.remove("correct");
                    resetButton.textContent = "Play Agian?";
                    gameOver = true;
                } else {
                    this.style.backgroundColor = "#232323";
                    messageDisplay.classList.remove("correct");
                    messageDisplay.classList.add("wrong");
                    messageDisplay.textContent = "Try Agian!";
                    resetButton.textContent = "New Colors";
                }
            }
            triesDisplay.textContent = numOfTries;
        });
    }
}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //picke a new color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.classList.remove("correct");
    messageDisplay.classList.remove("wrong");
    messageDisplay.textContent = "";
    numOfTries = 3;
    triesDisplay.textContent = numOfTries;
    gameOver = false;
}

resetButton.addEventListener("click", function () {
    reset();
    // //generate all new colors
    // colors = generateRandomColors(numSquares);
    // //picke a new color from array
    // pickedColor = pickColor();
    // //change colorDisplay to match picked color
    // colorDisplay.textContent = pickedColor;
    // //change colors of squares
    // for(var i = 0; i < squares.length; i++){
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor = "steelblue";
    // this.textContent = "New Colors";
    // messageDisplay.textContent = "";
});

// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
//     h1.style.backgroundColor = "steelblue";
//     resetButton.textContent = "New Colors";
//     messageDisplay.textContent = "";
// })

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
//     h1.style.backgroundColor = "steelblue";
//     resetButton.textContent = "New Colors";
//     messageDisplay.textContent = "";
// })

// colorDisplay.textContent = pickedColor;


function changeColors(color) {
    //loop though all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor())
    }
    //retunrs that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256)
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256)
    "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}