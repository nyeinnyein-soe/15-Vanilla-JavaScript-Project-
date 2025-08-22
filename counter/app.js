const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');

let num = document.querySelector('#value');
let cut = 0;

function col() {
    if (cut == 0) {
        document.getElementById('value').style.color = "black";
    } else if (cut > 0) {
        document.getElementById('value').style.color = "green";
    } else {
        document.getElementById('value').style.color = "red";
    }
}

increase.addEventListener('click', function () {
    let result = ++cut;
    cut = result;
    num.textContent = cut;
    col();
})

reset.addEventListener('click', function () {
    let result = 0;
    cut = result;
    num.textContent = cut;
    col();
})

decrease.addEventListener('click', function () {
    let result = --cut;
    cut = result;
    num.textContent = cut;
    col();
})

// Teacher resolve that challenge with that :

// 

