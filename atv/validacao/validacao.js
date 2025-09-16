const form = document.getElementById("newForm");

form.addEventListener("submit", function(event){
  //impede envio automatico
  event.preventDefault(); 
  const email = document.querySelector("email").value.trim();

    console.log(email);

    //condoção
    if(email===""){
    alert("Por favor, digite seu email");
    return false

    }

    form.reset();

});