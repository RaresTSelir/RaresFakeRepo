const buton = document.querySelector(".simpleButton")

const logSomething = () => {
    console.log("x");
}

const number = 6;
let sum =0;
const addNumber = ()=> {
    sum = sum+number;
    console.log(sum);
}

buton.addEventListener("click", addNumber);