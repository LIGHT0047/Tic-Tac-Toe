let boxes = document.querySelectorAll(".boxs");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msgcontainer")
let newbtn = document.querySelector(".new_btn")
let resetbtn = document.querySelector(".reset_btn")

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6], 
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
       if (turnO) {
        box.innerText = ("O");
        turnO = false;
        box.style.color = "#ff1a1a";
       } else {
        box.innerText = ("X");
        turnO = true;
        box.style.color = "#39FF14";
       }
       box.disabled = true; 
       checkWinner()
    });
});

const showwinner = (winner) => {
    msg.innerText = `Congratulation WINNER ${winner}`;
    msgcontainer.classList.remove("hide")
    disableBoxes()
}
const disableBoxes = () => {
for(box of boxes) {
    box.disabled = true;
}
}
 
const enableBoxes = () => {
    for(box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const checkWinner = () => {
    for (pattern of winPattern) {
        console.log(pattern[0], pattern[1], pattern[2]);
        let posval1 = boxes[pattern[0]].innerText; 
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if (posval1 != "" && posval2 != "" && posval3 != ""){ 
         if (posval1 === posval2 && posval2 === posval3) {
           showwinner(posval1)
        }
    }
}
    }

resetbtn.addEventListener("click", resetgame)
newbtn.addEventListener("click", resetgame)
