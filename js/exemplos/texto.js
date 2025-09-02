//variavel
let text = "Estão chegando as provas";

//Tamanho da string
console.log(text.length);

//Replace
console.log(text.replace("Alterando: ", "Provas", "avaliações"));

//deixa o texto em maiusculo sem mexer na variavel
console.log(text.toUpperCase());
//deixa o texto em minusculo sem mexer na variavel
console.log(text.toLocaleLowerCase());

//Retorna a primeira pocição na string
console.log(text.indexOf("as"));

//retorna a a ultima pocição na string
console.log(text.lastIndexOf("as"));