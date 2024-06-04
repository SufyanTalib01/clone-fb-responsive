let Btn = document.getElementById('create-btn');
let CreateAccount = document.getElementById('c-account');
let MainContainer =document.getElementById('main-container');
let Footer = document.getElementById('footer');
let CustomCheck = document.getElementById("custom-check");
let CustomGen = document.getElementById("custom-gen");
let GenSpan = document.getElementById("gen-span");
let GenderOptional = document.getElementById("gender-opt");
let InvisibleContainer = document.querySelector('.invisible-container');
let MaleCheck = document.querySelector('#male-check');
let FemaleCheck = document.querySelector('#female-check');
let ForgetPassWord = document.querySelector('.forget-pass');
let MobileContainer = document.querySelector('.Mobile-Container');
let MForgetContainer = document.querySelector('.m-forget-container');


Btn.addEventListener("click" , function(){
    CreateAccount.classList.toggle('active');
})

Btn.addEventListener("click" , function(){
    MainContainer.classList.toggle('active');
})

Btn.addEventListener("click" , function(){
    Footer.classList.toggle("active");
})


let RemoveBtn = document.getElementById("remove-btn");

RemoveBtn.addEventListener("click" , function(){
    CreateAccount.classList.toggle("active");
})

RemoveBtn.addEventListener("click" , function(){
    MainContainer.classList.toggle('active');
})




let SignUpbtn = document.getElementById("bttn");

SignUpbtn.addEventListener("click" , function(){
    alert("You're too n small for using facebook ; see you later");
})


// CUSTOM BUTTON WORK 

// CustomCheck.addEventListener("click" , function(){
//     CustomGen.classList.toggle('active');
// })

// CustomCheck.addEventListener("click" , function(){
//     GenSpan.classList.toggle("active");
// })

// CustomCheck.addEventListener("click" , function(){
//     GenderOptional.classList.toggle("active");
// })


CustomCheck.addEventListener('click' , function(){
    InvisibleContainer.style.display = 'block';

    // todo: ---------
    // InvisibleContainer.style.fontSize = 'block';
})

MaleCheck.addEventListener('click' , function(){
    InvisibleContainer.style.display = 'none';
})

FemaleCheck.addEventListener('click' , function(){
    InvisibleContainer.style.display = 'none';
})


// FOREGT PASSWORD 
ForgetPassWord.addEventListener('click' , function(){
    MobileContainer.style.display = 'none';
    MForgetContainer.style.display = 'block';
})