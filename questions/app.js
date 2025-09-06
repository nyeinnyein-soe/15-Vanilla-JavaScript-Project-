//using selectors inside the element
// traversing the dom

const plusBtn = document.querySelector('.plus-icon');
const minusBtn = document.querySelector('.minus-icon');

const questionText = document.querySelector('.question-text');
const questionBtn = document.querySelector('.question-btn');

// console.log(plusBtn);
// console.log(minusBtn);
// console.log(questionText);
console.log(questionBtn);

plusBtn.addEventListener('click',function(){
    // console.log(questionText.classList.contains('question-text'));
    questionText.classList.add('show-text');
    questionText.classList.remove('question-text');
    // questionBtn.classList.remove('plus-icon');
    // questionBtn.classList.remove('minus-icon');
    minusBtn.classList.remove('minus-icon');
    plusBtn.style.display = "none";
})

minusBtn.addEventListener('click',function(){
    questionText.classList.remove('show-text');
    questionText.classList.add('question-text');
    minusBtn.classList.add('minus-icon');
    plusBtn.style.display = "inline";
})