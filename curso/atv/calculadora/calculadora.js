// Variável
const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");
const resultado = document.getElementById("resultado");

// Função
function soma(event) {
   event.preventDefault(); 
   //Validação de fomrulario

   if(num1.value==""){
    alert("Digite um numero")
   }else if(num2.value==""){
    alert("digite um numero")
   }


   resultado.innerHTML = Number(num1.value) + Number(num2.value);
   num1.value = "";
   num2.value = "";
}



function subtra(event) {
   event.preventDefault(); 
   //Validação de fomrulario

   if(num1.value==""){
    alert("Digite um numero")
   }else if(num2.value==""){
    alert("digite um numero")
   }


   resultado.innerHTML = Number(num1.value) - Number(num2.value);
   num1.value = "";
   num2.value = "";
}



function multipli(event) {
   event.preventDefault(); 
   //Validação de fomrulario

   if(num1.value==""){
    alert("Digite um numero")
   }else if(num2.value==""){
    alert("digite um numero")
   }


   resultado.innerHTML = Number(num1.value) * Number(num2.value);
   num1.value = "";
   num2.value = "";
}

function divi(event) {
   event.preventDefault(); 
   //Validação de fomrulario

   if(num1.value==""){
    alert("Digite um numero")
    return false;
   }else if(num2.value==""){
    alert("digite um numero")
   }


   resultado.innerHTML = Number(num1.value) / Number(num2.value);
   num1.value = "";
   num2.value = "";
}

