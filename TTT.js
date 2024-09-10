let boxes = document.querySelectorAll("#btn");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];


const resetGame = () =>
{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            box.textContent = "O";
            turnO = false;
        }else{
            box.textContent = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () =>{
    boxes.forEach((box) =>{
        box.disabled = true;
        });
}

const enableBoxes = () =>{
    boxes.forEach((box) =>{
        box.disabled = false;
        box.textContent = "";
        });
}
const showWinner = (winner) =>{
    msg.innerHTML = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    scoreCheck();
}

const checkWinner = () =>
{
    for(let pattern of winPatterns)
    {

        
            let pos1 = boxes[pattern[0]].textContent;
            let pos2 = boxes[pattern[1]].textContent;
            let pos3 = boxes[pattern[2]].textContent;

            if(pos1 != "" && pos2 != "" && pos3 != "")
            {
                if(pos1 === pos2 && pos2 === pos3)
                {
                    console.log(`winner is ${pos1}`);
                    showWinner(pos1);
                }
            }
        
    }
};

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
























function getRandomColor() {
    // Generate a random number between 0 and 0xFFFFFF and convert it to hexadecimal
    const randomColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    // Ensure the color is always 6 digits long
    return randomColor.padStart(7, '0');
}

function changeBackgroundColor() {
    // Get a random color
    const color = getRandomColor();
    // Apply the color to the background
    document.body.style.backgroundColor = color;
}

// Get all buttons with the id 'btn'
const buttons = document.querySelectorAll('#btn');

// Attach the event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', changeBackgroundColor);
});
