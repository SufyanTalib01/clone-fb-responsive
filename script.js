let Btn = document.getElementById('create-btn');
let CreateAccount = document.getElementById('c-account');

Btn.addEventListener("click" , function(){
    CreateAccount.classList.toggle('active');
})


let CustomCheck = document.getElementById("custom-check");
let CustomGen = document.getElementById("custom-gen");
let GenSpan = document.getElementById("gen-span");
let GenderOptional = document.getElementById("gender-opt");

CustomCheck.addEventListener("click" , function(){
    CustomGen.classList.toggle('active');
})

CustomCheck.addEventListener("click" , function(){
    GenSpan.classList.toggle("active");
})

CustomCheck.addEventListener("click" , function(){
    GenderOptional.classList.toggle("active");
})

let RemoveBtn = document.getElementById("remove-btn");

RemoveBtn.addEventListener("click" , function(){
    CreateAccount.classList.toggle("active");
})

let SignUpbtn = document.getElementById("bttn");

SignUpbtn.addEventListener("click" , function(){
    alert("You're too small for using facebook ; see you later");
})