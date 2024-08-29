/*const start = document.querySelector('#start')
const btns = document.querySelectorAll("buttons")
let count = 0;
btns.forEach(function(buttons){
    btns.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('btn increase')){
            count++
        }
        else (styles.contains('btn decrease'))
            count--
start.textContent = count;
})})*/


let start = 0;


document.getElementById("start").innerText = start;

function increment() {
	start = start + 1;
	document.getElementById("start").innerText = start;
}

function decrement() {
	start = start - 1;
	document.getElementById("start").innerText = start;
}
