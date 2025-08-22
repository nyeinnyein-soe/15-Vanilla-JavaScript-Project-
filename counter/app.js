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

// let count = 0;

// const num = document.getElementById('value');
// const btns = document.querySelectorAll('.btn');

// // console.log(btns);

// btns.forEach(function (btn){
//     btn.addEventListener('click',function(btn){
//         let styles = btn.currentTarget.classList;
//         if(styles.contains('decrease')){
//             count--;
//             document.getElementById('value').style.color = "red";
//         }
//         else if(styles.contains('increase')){
//             count++;
//             document.getElementById('value').style.color = "green";
//         }
//         else{
//             count = 0;
//             document.getElementById('value').style.color = "black";
//         }
//         num.textContent = count;
//     })
// })


