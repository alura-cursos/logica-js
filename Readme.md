# Resolução dos desafios do curso de lógica de programação

Praticar a lógica de programação, incluindo conceitos como variáveis, condicionais (if-else), loops (while) e interações com o usuário (alert, prompt), é essencial para sua carreira de desenvolvimento de software. Esses fundamentos fornecem a base para resolver problemas de forma estruturada, tomar decisões no código, criar iterações controladas e interagir eficazmente com os usuários. 

Compreender esses conceitos não apenas facilita o aprendizado de novas linguagens e tecnologias, mas também capacita você a criar soluções inovadoras, depurar eficientemente e manter a qualidade ao longo do ciclo de vida do software. Portanto, investir tempo nesses princípios desde cedo é fundamental para construir uma base sólida e bem-sucedida no campo da programação.

#### Desafios - Respostas

1) Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

```js
diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}
```

2) Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

```js
numero = prompt('Digite um positivo ou negativo');
if (numero > 0) {
    alert('Número positivo!');
} else if (numero < 0) {
    alert('Número negativo!');
} else {
    //Número nulo = 0
}
```

3) Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!" no console do navegador. Caso contrário, mostre "Tente novamente para ganhar.".

```js
pontuacao = 105;
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}
```

4) Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

```js
let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);
```

5) Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

```js
let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);
```
