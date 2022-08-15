const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const Button =document.getElementById('btn');
const span=document.querySelector('.color');
const getColor=()=>{
    let color='#';
    for(let i=1;i<=6;i++){
        const random=Math.floor(Math.random()*hex.length);
        color+=hex[random];
    }
    return color;
}
Button.addEventListener('click',()=>{
    const color=getColor();
    span.textContent=color;
    document.body.style.background=color;
})
