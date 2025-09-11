const inputIdade = document.getElementById("idade");
const resultado = document.getElementById("result");
const message = document.getElementById("message");



function IdadeClick(event){
    event.preventDefault();

    if(inputIdade.value >=18){
        resultado.innerHTML="Você pode entrar na festa";
        resultado.style="color:green;";
    
    }else{
        resultado.innerHTML= "Você nao pode entrar na festa";
        resultado.style="color:red";
    }


    if (inputIdade.value == "") {
      message.style.display="block";
        return false;
    }


    message.style.display="none";
    inputIdade.value = "";





}