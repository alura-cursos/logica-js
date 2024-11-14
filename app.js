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

// Desafios 1

//Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert('Boas vindas ao nosso site!');
//Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nomme = 'Lua';
//Crie uma variável chamada idade e atribua a ela o valor 25
let idade = 25;
//Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;
//Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 100;
//Exiba um alerta com o texto "Erro! Preencha todos os campos"
let mensagemDeErro = alert('Erro! Preencha todos os campos.');
//Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
//Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
nomme = prompt('Qual o seu nome?');
//Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade
idade = prompt('Qual a sua idade?');
//Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if (idade >= 18){
    alert('Pode tirar a habilitação');
}



/*Desafio 2*/
//exercicio 1
/*Pergunte ao usuário qual é o dia da semana. 
Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".*/

let diaSemana = prompt('Qual o dia da semana?');
console.log(`O dia da semana é ${diaSemana}`);
if (diaSemana == 'Sabado' || diaSemana == 'Domingo' ){
    alert('Bom fim de semana!');
} else{
    alert('Boa Semana!');
}
//exercicio 2
/*Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.*/

let numero = prompt('Digite um numero');
console.log(`O numerro digitado é ${numero}`);
if (numero>0) {
    alert('Numero Positivo');
}if(numero == 0){
    alert('Numero Neutro');
}
else {
    alert('Numero negativo');
}

//exercicio3
/*Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, 
você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".*/

let pontuacao = prompt('Digite sua pontuação');
console.log(`A pontuação foi ${pontuacao}`);
if (pontuacao >= 100){
    alert('Parabens, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}

//exercicio4
/*Crie uma mensagem que informa o usuário sobre o saldo da conta, 
usando uma template string para incluir o valor do saldo.*/

let saldo = "5.000";
let usuario = 'Jonas';
usuario = prompt('Digite seu nome');
if (usuario == 'Jonas'){
    alert('Seu sando é ' + saldo);
} else {
    alert('Não identificado.');
}

//exercicio5
/*Peça ao usuário para inserir seu nome usando prompt. 
Em seguida, mostre um alerta de boas-vindas usando esse nome.*/

let nome = prompt('Qual seu nome');
alert('Boas vindas ' + nome);
