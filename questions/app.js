//using selectors inside the element
// traversing the dom

// My Solution

// const plusBtn = document.querySelector('.plus-icon');
// // console.log(plusBtn);
// const minusBtn = document.querySelector('.minus-icon');

const questions = document.querySelectorAll('.question')

const questionText = document.querySelectorAll('.question-text');
const questionBtn = document.querySelectorAll('.question-btn');

// console.log(plusBtn);
// console.log(minusBtn);
// console.log(questionText);
// console.log(questionBtn);

// allPlusBtn.forEach(function(btn) {
//     btn.addEventListener('click',function(){
//         // questionText.classList.add('show-text');
//         // questionText.classList.remove('question-text');
//         // minusBtn.classList.remove('minus-icon');
//         btn.style.display = "none";
//     })    
// })



// minusBtn.addEventListener('click',function(){
//     questionText.classList.remove('show-text');
//     questionText.classList.add('question-text');
//     minusBtn.classList.add('minus-icon');
//     plusBtn.style.display = "inline";
// })

// questions.forEach(function(question) {
//     let plusBtn = question.querySelector('.plus-icon');
//     let minusBtn = question.querySelector('.minus-icon');
//     let questionText = question.querySelector('.question-text');

//     plusBtn.addEventListener('click',function(){
//         questionText.classList.add('show-text');
//         questionText.classList.remove('question-text');
//         minusBtn.classList.remove('minus-icon');
//         plusBtn.style.display = "none";
//     })

//     minusBtn.addEventListener('click',function(){
//         questionText.classList.remove('show-text');
//         questionText.classList.add('question-text');
//         minusBtn.classList.add('minus-icon');
//         plusBtn.style.display = "inline";
//     })
// })

// From Teacher's lecture

// const btns = document.querySelectorAll('.question-btn');
// // console.log(btns);

// btns.forEach(function (btn){
//     // console.log(btn);
//     btn.addEventListener('click',function(e){
//         // console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     })
// }
// )