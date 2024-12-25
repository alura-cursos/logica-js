# Resolução dos desafios do curso de lógica de programação

Praticar a lógica de programação, incluindo conceitos como variáveis, condicionais (if-else), loops (while) e interações com o usuário (alert, prompt), é essencial para sua carreira de desenvolvimento de software. Esses fundamentos fornecem a base para resolver problemas de forma estruturada, tomar decisões no código, criar iterações controladas e interagir eficazmente com os usuários. 

Compreender esses conceitos não apenas facilita o aprendizado de novas linguagens e tecnologias, mas também capacita você a criar soluções inovadoras, depurar eficientemente e manter a qualidade ao longo do ciclo de vida do software. Portanto, investir tempo nesses princípios desde cedo é fundamental para construir uma base sólida e bem-sucedida no campo da programação.

#### Desafios - Respostas

1) Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

```js
//Opção 1 - Nível de dificuldade fácil.

diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

//Infelizmente, caso o usuário não colabore, e digite algo aleatório como "batata" ou "12" etc... ainda assim o código retornará o alert('Boa semana!); mesmo que não seja má vontade do usuário, caso alguém digite "sábado" ou "domingo" no prompt usando iniciais com letra minúscula, ainda assim o retorno do alert será 'Boa semana!', o que é definitivamente um bug!

//Opção 2 - Nível de dificulade intermediário. (soluciona problema de iniciais com letra minúscula).

if (['Segunda', 'segunda', 'Segunda-feira', 'segunda-feira', 'Terça', 'terça', 'Terça-feira', 'terça-feira', 'Quarta', 'quarta', 'Quarta-feira', 'quarta-feira', 'Quinta', 'quinta', 'Quinta-feira', 'quinta-feira', 'Sexta', 'sexta', 'Sexta-feira', 'sexta-feira'].includes(prompt('Qual é o dia da semana?'))) {
    alert('Boa semana!');
} else {
    alert('Bom fim de semana!');
}

//Opção 3 - Nível de dificuldade avançado. (soluciona o problema de iniciais com letra minúscula e o problema de digitação aleatória no prompt)

let diaDaSemana = prompt('Qual é o dia da semana?'); // inserindo prompt "Dia da Semana"
let fimDeSemana = ['Sábado', 'Domingo', 'sábado', 'domingo']; // definindo variável "Fim de Semana"
let semana = ['Segunda', 'segunda', 'Segunda-feira', 'segunda-feira', 'Terça', 'terça', 'Terça-feira', 'terça-feira', 'Quarta', 'quarta', 'Quarta-feira', 'quarta-feira', 'Quinta', 'quinta', 'Quinta-feira', 'quinta-feira', 'Sexta', 'sexta', 'Sexta-feira', 'sexta-feira']; // definindo variável "Dias de Semana"

if (fimDeSemana.includes(diaDaSemana)) {
    alert('Bom fim de semana!');
} else if (semana.includes(diaDaSemana)) {
    alert('Boa semana!');
} else {
    alert('Tente inserir um dia de semana válido em sua próxima tentativa!');
}

//com esse array, verifica-se a digitação de 
```

2) Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

```js
//Opção 1: Nível de dificuldade fácil.
numero = prompt('Digite um positivo ou negativo');
if (numero > 0) {
    alert('Número positivo!');
} else {
    alert('Número negativo!');
}

//O presente código checa se o número inserido é maior que 0, retornando alert 'Número positivo' e se não for o caso, retorna alert 'Número negativo'. Porém existe um bug aqui. Se o usuário digitar o valor '0'? Pois é, o resultado do alert é 'Número negativo'. Mas eu e você sabemos que zero não é um número negativo, é um número neutro... logo aqui temos um bug. Também há um bug caso seja digitado letas ou simbolos etc.


//Opção 2: Nível de dificuldade avançado. (eliminando o bug do '0' interpretado como 'Número negativo' bem como letras, símbolos etc.)

let numero;

while (true) {
    let dadosInseridos = prompt('Por favor, insira um número:');
    
    // Tentar converter os dados inseridos para número
    numero = Number(dadosInseridos);
    
    // Verificar se é um número válido
    if (!isNaN(numero)) {
        // Determinar se o número é positivo, negativo ou neutro
        if (numero > 0) {
            alert('Número positivo!');
        } else if (numero === 0) {
            alert('Número neutro!');
        } else {
            alert('Número negativo!');
        }
        break; // Saia do loop após exibir a mensagem
    } else {
        alert('Entrada inválida. Por favor, insira um número.');
    }
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
