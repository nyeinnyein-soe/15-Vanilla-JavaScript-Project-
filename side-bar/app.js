const sidebarBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

// console.log(sidebarBtn);
// console.log(sidebar);
// console.log(closeBtn);

sidebarBtn.addEventListener('click',function(){
    // console.log(sidebar.classList)
    // console.log(sidebar.classList.contains('sidebar'))

    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar');
    // }
    // else{
    //     sidebar.classList.add('show-sidebar');
    // }

    sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click',function(){
    // console.log(sidebar.classList)
    // console.log(sidebar.classList.contains('sidebar'))

    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar');
    // }
    // else{
    //     sidebar.classList.add('show-sidebar');
    // }
    
    sidebar.classList.toggle('show-sidebar');
})  