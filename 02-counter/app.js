const value=document.getElementById('value');
let count=0;
const Buttons=document.querySelectorAll('.btn');
Buttons.forEach(Button=>{
    Button.addEventListener('click',()=>{
        const style=Button.classList;
        if(style.contains('decrease')){
            count--;
        }
        else if(style.contains('increase')){
            count++;
        }
        else{
            count=0;
        }
        value.textContent=count;
        if(count>0){
            value.style.color='green';
        }
        else if(count<0){
            value.style.color='red';
        }
        else{
            value.style.color='black'
        }
    })
})