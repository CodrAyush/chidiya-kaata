// Accessing all the boxes and reset button
let boxes = document.querySelectorAll(".box");
let message = document.querySelector(".msg");
let mess = document.querySelector("#msg1");
let ng = document.querySelector("#newg");//acceccing newgame button;
let rr=document.querySelector("#reset");

let over = document.querySelector("#reset");
let turn0 = true; // playerX, playerO
let moves = 0; // Count the number of moves taken

// These are the winning indices
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");

    if (turn0) {
      box.style.color="orange";
      box.innerText = "0";
      turn0 = false;
    } else {
      box.style.color="green";
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    moves++;
    checkWinner();
  });
});

const newgame=()=>{
  turn0=true;
  enabx();
  message.classList.add("hide");
  moves=0;
}
const disbx=()=>{
  for(box of boxes)
    box.disabled=true;  
}


const enabx=()=>{
  for(box of boxes){
    box.disabled=false; 
    box.innerText="";}

}

const showWinner = (winner) => {
  mess.innerText = "Congratulations: " + winner ;
  message.classList.remove("hide");
  disbx();
}

const checkWinner = () => {
  for (pattern of winPatterns) {
    let posval1 = boxes[pattern[0]].innerText;
    let posval2 = boxes[pattern[1]].innerText;
    let posval3 = boxes[pattern[2]].innerText;
    if (posval1 !== "" && posval2 !== "" && posval3 !== "") {
      if (posval1 === posval2 && posval2 === posval3) {
        console.log("winner is ", posval1);
        showWinner(posval1);
        
      }
    }
  }
  // Check for draw
  if (moves === 9) {
    console.log("match is a draw");
    mess.innerText = "DRAW";
    message.classList.remove("hide");
  }}
  ng.addEventListener("click",newgame);
  rr.addEventListener("click",newgame);

  
