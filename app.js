alert('Boas-vindas ao jogo do Número Secreto');
let numeroSecreto = 5;
let chute;
let tentativas = 1;

    //se o chute for diferente ao numero secreto

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 a 10');

    //se o chute for igual ao numero secreto

    if(chute == numeroSecreto){
        break;
    }

    if(chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}`);
    }
    else {
        alert (`O número secreto é maior que ${chute}`);
    }
    tentativas++;
}
if(tentativas > 1)

    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
else {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
