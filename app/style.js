const btn = document.getElementById("dice");
const counter = document.getElementById("counter");
const entry = document.getElementById("entry");

// console.log("hello");
//catch errors

const getAdvice = async () =>{
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    console.log(data);
    counter.innerHTML = `Advice no # ${data.slip.id}`;
    entry.innerHTML  = `"${data.slip.advice}"`;

}
btn.addEventListener('click', function(){   
    getAdvice();
})

getAdvice();

