const value = document.getElementById("title")
const increment = document.querySelector("#increment")
const reset = document.querySelector("#reset")
const decrement = document.querySelector("#decrement")
let currentValue = 0;

increment.addEventListener("click",()=> {
    currentValue ++;
    value.textContent = currentValue;
    if( currentValue ==10)
    value.style.color ="red" 
else {
    value.style.color ="black"
} 
})

reset.addEventListener("click", ()=>{
    currentValue =0;
    value.textContent =currentValue;
    
})
decrement.addEventListener("click",()=>{
    currentValue-=1 && currentValue>=1;
    value.textContent=currentValue;
   if(currentValue ==10)
    value.style.color ="red" 
else {
    value.style.color ="black"
}   
});
