const inputNota = document.getElementById("nota");
const resultado = document.getElementById("result");

function resultadoNotaClick(event) {

    event.preventDefault();
    // console.log(inputNota);

    if (inputNota.value >= 6) {
       alert("voce esta aprovado ");
       resultado.innerHTML= "Aprovado";

    } else if (inputNota.value <= 5) {
      resultado.innerHTML= "reporvado, estude mais";

    } else if (inputNota.value == 10) {
       resultado.innerHTML= "Aprovado";
    }

    //Validação de fomrulario

    if (inputNota.value == "") {
        alert("preencha o campo")
    }

    inputNota.value = "";

}