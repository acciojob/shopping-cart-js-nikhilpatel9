//your code here
const inpt=document.getElementById("inpt");
const btn=document.getElementById("btn");
const out=document.getElementById("output");
btn.addEventListener("click",()=>{
	let item=inpt.value;
	localStorage.setItem("cart", item);
	
	
})
const output = localStorage.getItem("cart"); 
out.textContent=output;