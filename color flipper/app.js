const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// console.log(colors);
const button = document.getElementById("btn");
// console.log(button)
const color = document.querySelector(".color")
// console.log(color)


// For One Random Number Color Only
// const oneRandomColor = (colors) =>{
//     const randomNumber = 2;
//     document.body.style.backgroundColor = colors[2];
//     color.textContent = colors[2]
// }

// button.addEventListener('click', () => oneRandomColor(colors))

let currentindex = 0;

button.addEventListener('click' , function (){
    document.body.style.backgroundColor = colors[currentindex];
    color.textContent = colors[currentindex]
    currentindex++;

    if(currentindex >= colors.length){
        currentindex = 0;
    }
})