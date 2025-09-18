const imagens = ["../../img/828-1000x250.jpg", "../img/img3.jpg", "../img/img4.jpg"];

let index = 0; // começa na primeira imagem 
const banner = document.getElementById("banner");



function trocarImagem() {
    index++;

    if (index >= imagens.length) {
        index = 0;
    }

    banner.src = imagens[index];


}

setInterval(trocarImagem, 3000);