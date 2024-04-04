const guessValue = document.querySelector("guess_value");
const squares = document.querySelectorAll(".square");
const restart = document.querySelector(".restart")
const colors = [];

for(let i = 0; i< 9;i++){
    colors.push(
        `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)})`
    )
}

squares.forEach((square , i)=> {
    square.style.backgroundColor = colors[i];
    square.setAttribute("color", colors[i])
})

const valueForGuess = colors[Math.floor(Math.random() * 9)] //0-8
guessValue.textContent = valueForGuess;

squares.forEach(square => {
    square.addEventListener("click" , (event){
     const squareColor =   event.target.getAttribute("color");

     if(squareColor ===  valueForGuess){
        squares.forEach(
            (square) => (square.style.backgroundColor = valueForGuess)
        )
        restart.style.display = "block";
     }else{
        square.style.backgroundColor = " #0c1722";
     }
    })
})

restart.addEventListener("click" , ()=>{
    location.reload();
})
