var pickedColor,numSquares=6,colors=[],squares=document.querySelectorAll(".square"),colorDisplay=document.getElementById("colorDisplay"),messageDisplay=document.querySelector("#message"),h1=document.querySelector("h1"),resetButton=document.querySelector("#reset"),modeBtn=document.querySelectorAll(".mode");function init(){setupModeBtn(),setupSquares(),reset()}function setupModeBtn(){for(var e=0;e<modeBtn.length;e++)modeBtn[e].addEventListener("click",function(){modeBtn[0].classList.remove("selected"),modeBtn[1].classList.remove("selected"),this.classList.add("selected"),numSquares="Easy"===this.textContent?3:6,reset()})}function setupSquares(){for(var e=0;e<squares.length;e++)squares[e].addEventListener("click",function(){var e=this.style.backgroundColor;e===pickedColor?(messageDisplay.textContent="Correct!",changeColors(e),h1.style.backgroundColor=e,resetButton.textContent="Play Agian?"):(this.style.backgroundColor="#232323",messageDisplay.textContent="Try Agian!",resetButton.textContent="New Colors")})}function reset(){colors=generateRandomColors(numSquares),pickedColor=pickColor(),colorDisplay.textContent=pickedColor;for(var e=0;e<squares.length;e++)colors[e]?(squares[e].style.display="block",squares[e].style.backgroundColor=colors[e]):squares[e].style.display="none";h1.style.backgroundColor="steelblue",resetButton.textContent="New Colors",messageDisplay.textContent=""}function changeColors(e){for(var o=0;o<squares.length;o++)squares[o].style.backgroundColor=e}function pickColor(){var e=Math.floor(Math.random()*colors.length);return colors[e]}function generateRandomColors(e){for(var o=[],t=0;t<e;t++)o.push(randomColor());return o}function randomColor(){return"rgb("+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+")"}init(),resetButton.addEventListener("click",function(){reset()});