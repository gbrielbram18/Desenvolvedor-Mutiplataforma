const inputNota = document.getElementById("nota");
const resultado = document.getElementById("result");
const message = document.getElementById("message");


function resultadoNotaClick(event) {
  event.preventDefault();
  // console.log(inputNota);
  
  if (inputNota.value >= 6) {
    resultado.innerHTML= "Aprovado";
    resultado.style="color:green;"
    
  } else if (inputNota.value <= 5) {
    resultado.innerHTML= "reporvado, estude mais";
    resultado.style="color:red";

  } else if (inputNota.value == 10) {
    resultado.innerHTML= "Aprovado";
    
  }
  
  //Validação de fomrulario
  
  
  if (inputNota.value == "") {
      message.style.display="block";
      
    
        return false;
    }
    message.style.display="none";

    inputNota.value = "";

}