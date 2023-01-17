//-------EXERCICE 1
let titre = document.getElementsByTagName('h1')[0];
//let titre = document.querySelector('h1');

titre.onclick = function () { this.classList = 'text-blue'};
// titre.addEventListener('click',()=>{
//     titre.classList = 'text-blue';
// })

//-------EXERCICE 2

let titre1 = document.getElementsByTagName('h3')[0];
//let titre1 = document.querySelector('h3');

titre1.ondblclick = function () { this.classList = 'text-error'};
// titre1.addEventListener('dblclick',()=>{
//     titre1.classList = 'text-error';
// })

//-------EXERCICE 3
let para = document.getElementsByTagName('p')[0];
//let para = document.querySelector('p');

//-----Methode 1 
// para.addEventListener('click',()=>{
//     switch(true){
//         case this.classList == 'text-style':
//             para.classList.remove = "text-style";
//             break;
//         case this.classList != 'text-style':
//             para.classList ='text-style';
//             break;
//     }
// })

//----Methode 2
// para.addEventListener('click', ()=>{
//     if (para.classList == "text-style") {
//         para.classList.remove("text-style") ;
//         } else {
//         para.classList.add( "text-style");
//         }
// });
//----Methode 3
para.onclick = function () {if (this.classList == "text-style"){this.classList.remove("text-style")}else{this.classList.add("text-style")} }


//-------EXERCICE 4
let paralast = document.querySelector("p:nth-child(4)");
let span = paralast.querySelectorAll("span");


span.forEach(element => {
    element.addEventListener('click',()=>{
        element.classList = 'bolder';
    })
});

//-------EXERCICE 5
let paralast1 = paralast.nextElementSibling
let span1 = paralast1.querySelectorAll("span");
console.log(paralast1);

span1.forEach(element =>{
    element.addEventListener('click',()=>{
        span1.forEach(element => element.classList.remove ='bolder-red');
    element.classList = 'bolder-red';
    })
})
