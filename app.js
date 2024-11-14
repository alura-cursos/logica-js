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
