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
alert('Vamos verificar se o número é positivo ou negativo!');
let numero = prompt('Digite um número:');
alert(`O número digitado foi: ${numero}`);
if (numero > 0) {
    alert(`O número ${numero} é POSITIVO!`);
} else if (numero < 0) {
    alert(`O número ${numero} é NEGATIVO!`);
} else {
    alert('O número digitado foi zero');
}
```

3) Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!" no console do navegador. Caso contrário, mostre "Tente novamente para ganhar.".

```js
alert('Vamos jogar o jogo das perguntas! Cada resposta certa, ganhará 10 pontos, errada, 0 ponto; vencerá quem fizer 100 pontos ou mais');
let totalDePontos = 0;

let continente = prompt('Qual o continente onde o Brasil se encontra? (Primeira letra MAIÚSCULA e ACENTO se necessário)');
if (continente == 'América do sul') {
    alert('Você acertou e ganhou 20 pontos');
    continente = 10;
} else {
    alert('Você errou: 0');
    continente = 0;
}

let resultadoMultiplicacao = prompt('Quanto é 6 x 7 ?');
if (resultadoMultiplicacao == 42) {
    alert('Você acertou e ganhou 20 pontos');
    resultadoMultiplicacao = 10;
} else {
    alert('Você errou: 0');
    resultadoMultiplicacao = 0;
}

let quimica = prompt('Qual a temperatura de ebulição da água? (não precisa coloca o símbolo de grau e nem o símbolo de Celsius, só colocar números)');
if (quimica == 100) {
    alert('Você acertou e ganhou 20 pontos');
    quimica = 10;
} else {
    alert('Você errou: 0');
    quimica = 0;
}

let resultadoDivisao = prompt('Quanto é 75 / 5 ?');
if (resultadoDivisao == 15) {
    alert('Você acertou e ganhou 20 pontos');
    resultadoDivisao = 10;
} else {
    alert('Você errou: 0');
    resultadoDivisao = 0;
}

let anoDoDescobrimento = prompt('Qual foi o ano do descobrimento do Brasil?');
if (anoDoDescobrimento == 1500 ) {
    alert('Você acertou e ganhou 20 pontos');
    anoDoDescobrimento = 10;
} else {
    alert('Você errou: 0');
    anoDoDescobrimento = 0;
}

let resultadoSoma = prompt('Quanto é 126 + 227 ?');
if (resultadoSoma == 353) {
    alert('Você acertou e ganhou 20 pontos');
    resultadoSoma = 10;
} else {
    alert('Você errou: 0');
    resultadoSoma = 0;
}

let regiao = prompt('Sergipe se encontra no nordeste brasileiro. Em qual região do Brasil, o estado Minas Gerais se encontra? (Primeira letra MAIÚSCULA!)');
if (regiao == 'Sudeste') {
    alert('Você acertou e ganhou 20 pontos');
    regiao = 10;
} else {
    alert('Você errou: 0');
    regiao = 0;
}

let resultadoSubtracao = prompt('Quanto é 85 - 18 ?');
if (resultadoSubtracao == 67) {
    alert('Você acertou e ganhou 20 pontos');
    resultadoSubtracao = 10;
} else {
    alert('Você errou: 0');
    resultadoSubtracao = 0;
}

let anoDaConstituicaoF = prompt('Qual foi o ano da Constituição Federal do Brasil que está vigente?');
if (anoDaConstituicaoF == 1988 ) {
    alert('Você acertou e ganhou 20 pontos');
    anoDaConstituicaoF = 10;
} else {
    alert('Você errou: 0');
    anoDaConstituicaoF = 0;
}

let resultadoPotencia = prompt('Quanto é 3³?');
if (resultadoPotencia == 27) {
    alert('Você acertou e ganhou 20 pontos');
    resultadoPotencia = 10;
} else {
    alert('Você errou: 0');
    resultadoPotencia = 0;
}

let porcentagem = prompt('Quanto é 20% de 80?');
if (porcentagem == 16) {
    alert('Você acertou e ganhou 20 pontos');
    porcentagem = 10;
} else {
    alert('Você errou: 0');
    porcentagem = 0;
}

let resultadoRaizQuadrada = prompt('Quanto é a raiz quadrada de 169');
if (resultadoRaizQuadrada == 13) {
    alert('Você acertou e ganhou 20 pontos');
    resultadoRaizQuadrada = 10;
} else {
    alert('Você errou: 0');
    resultadoRaizQuadrada = 0;
}

totalDePontos = continente + resultadoMultiplicacao + quimica + resultadoDivisao + anoDoDescobrimento + resultadoSoma + regiao + resultadoSubtracao + anoDaConstituicaoF + resultadoPotencia + porcentagem + resultadoRaizQuadrada

if (totalDePontos >= 100) {
    alert(`Parabéns, você venceu! Sua pontuação foi: ${totalDePontos}.`);
} else {
    alert(`Sua pontuação foi: ${totalDePontos}. Tente novamente para ganhar.`)
}
```

4) Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

```js
alert('Bem vindo ao posto de combustível de Jese!')
let saldoDaConta = prompt('Qual o seu saldo na conta?');
//let saldoDaConta = 1220;
let valorDeCombustivel = prompt('Vai colocar quantos reais de combustível ');
alert(`Você ficou com o saldo de R$ ${saldoDaConta - valorDeCombustivel}.`);
```

5) Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

```js
alert('Bom dia, tudo bem? Inicialmente preciso saber com quem estou falando');
let nome = prompt('Digite seu nome, por favor.');
alert(`Seja bem vindo(a) ${nome}, espero que você aproveite bastante os nossos serviços!`);
```
