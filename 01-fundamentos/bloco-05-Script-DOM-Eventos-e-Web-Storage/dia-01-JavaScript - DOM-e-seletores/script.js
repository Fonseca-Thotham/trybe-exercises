
        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 
 Crie uma função que mude a cor do quadrado vermelho para branco.
 
 Crie uma função que corrija o texto da tag <h1>.
 
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

 //Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos.
 let teste = document.getElementsByTagName("p");
 for (let i = 0; i < teste.length; i++) {
      teste[i].innerHTML = "Teste";
 }
 //Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
let back = document.getElementsByClassName("main-content")[0];
back.style.backgroundColor = "rgb(76,164,109)";
//Crie uma função que mude a cor do quadrado vermelho para branco.
let cor = document.getElementsByClassName("center-content")[0];
cor.style.backgroundColor = "white"
//Crie uma função que corrija o texto da tag <h1>
let textoh1 = document.getElementsByTagName("h1")[0];
textoh1.innerText = "Exercício 5.1 - JavaScript";
//Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
let palavra = document.getElementsByTagName('p');
for (let i = 0; i < palavra.length; i++) {
palavra[i].innerHTML = palavra[i].innerText.toUpperCase();
       
}
//Crie uma função que exiba o conteúdo de todas as tags <p> no console
let p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
       console.log(p[i].innerText);       
}