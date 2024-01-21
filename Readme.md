# Resolução dos desafios do curso de lógica de programação

Praticar a lógica de programação, incluindo conceitos como variáveis, condicionais (if-else), loops (while) e interações com o usuário (alert, prompt), é essencial para sua carreira de desenvolvimento de software. Esses fundamentos fornecem a base para resolver problemas de forma estruturada, tomar decisões no código, criar iterações controladas e interagir eficazmente com os usuários. 

Compreender esses conceitos não apenas facilita o aprendizado de novas linguagens e tecnologias, mas também capacita você a criar soluções inovadoras, depurar eficientemente e manter a qualidade ao longo do ciclo de vida do software. Portanto, investir tempo nesses princípios desde cedo é fundamental para construir uma base sólida e bem-sucedida no campo da programação.

#### Desafios - Respostas

1) Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

```js
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}
```

2) Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.

```js
let contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador--;
}
```

3) Crie um programa de contagem regressiva. Peça um número ao usuario e conte deste número até 0, usando um loop while no console do navegador.

```js
let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}

```

4) Crie um programa de contagem progressiva. Peça um número ao usuario e conte de `0` até esté número, usando um loop while no console do navegador.

```js
let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");
let contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador++
}
```
