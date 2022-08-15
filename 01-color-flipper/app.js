const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const Button =document.getElementById('btn');
const span=document.querySelector('.color');
Button.addEventListener('click',()=>{
    const random=Math.floor(Math.random()*colors.length);
    const color=colors[random];
    document.body.style.background=color;
    span.textContent=color;
})