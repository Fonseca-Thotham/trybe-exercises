let linguagem = ['java', 'javascript', 'python', 'html', 'css'];
let palavraMenor = linguagem[0];
let palavraMaior = linguagem[0];


for (let i = 0; i < linguagem.length; i++) {
    if (linguagem[i].length < palavraMenor.length){
        palavraMenor = linguagem[i]
    }
}
for (let i = 0; i < linguagem.length; i++) {
    if (linguagem[i].length > palavraMaior.length){
        palavraMaior = linguagem[i];
    }
}
console.log("A maior é:" + palavraMaior);
console.log("A menor é:" + palavraMenor);