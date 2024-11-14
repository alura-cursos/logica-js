
//inicio conteudo da aula

alert('Boas-Vindas ao jogo do número secreto'); //exibir mensagem
console.log('Ola');
//criando variavel
let numeroSecreto = 9;
console.log('Valor do numero secreto ' + numeroSecreto);//mostra esta mensagem no console do site
//Comando para fazer uma pergunta
let chute = prompt('Escolha um numero entre 1 e 30'); // chute = variavel do usuario
console.log('Valor do Chute ' + chute);
console.log('Resultado de comparação ', numeroSecreto == chute); // retorna um valor booleano (true or false)
//condição IF
if (chute == numeroSecreto){
    //comando onde podemos testar e visualizar, como se fosse um ambiente quase secreto para desenvolvedoras e desenvolvedores.
    console.log(`Isso aí, você descobriu o número secreto ${numeroSecreto}`);
    //Template Strings colocamos o acento grave (`) para puxar a variavel para exibição
    
} else {
    alert('Você errou :(');
    console.log('Você errou tente novamente');
}





/*SObre o console.log()
//O console.log é uma função muito importante em linguagens de programação, 
//especialmente quando se trabalha com JavaScript. 
//Sua principal função é imprimir mensagens no console do ambiente de desenvolvimento, 
//o que permite testar informações relevantes durante a execução de um programa.*/

//fim conteudo da aula
