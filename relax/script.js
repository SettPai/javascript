const text = document.querySelector(".text");
const container = document.querySelector(".container");


const start =()=>{
    text.textContent = "Breath in";
    container.className = "container grow"

    setTimeout(() => {
        text.textContent = "Hold";
        setTimeout(() => {
            text.textContent = "Breath Out";
            container.className = "container drop"
        }, 1500);
    }, 3000);
} 
start();
setInterval(start,7500);
