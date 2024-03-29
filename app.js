let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //player x,player y

const winPattern = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turn0 =true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was clicked");
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `congratulations player ${winner} you won the game`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Value = boxes[pattern[0]].innerText;
    let pos2Value = boxes[pattern[1]].innerText;
    let pos3Value = boxes[pattern[2]].innerText;
    
    if(pos1Value !== "" && pos2Value !== "" && pos3Value !== ""){ 
      if(pos1Value===pos2Value && pos2Value===pos3Value){
        // console.log("winner",pos1Value);
        showWinner(pos1Value);
      }
    }

    
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);