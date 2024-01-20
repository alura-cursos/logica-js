// Exibe uma mensagem de boas-vindas ao jogo do número secreto
alert('Boas vindas ao jogo do número secreto');

// Define o número secreto a ser adivinhado
let numeroSecreto = 5;

// Define o número máximo de tentativas
let tentativas = 3;

// O loop continuará enquanto houver tentativas restantes
while (tentativas > 0) {
    // Solicita ao usuário que escolha um número entre 1 e 10
    let chute = prompt('Escolha um número entre 1 e 10');

    // Verifica se o chute do usuário é igual ao número secreto
    if (parseInt(chute) === numeroSecreto) {
        // Exibe mensagem de acerto e encerra o loop
        console.log('Acertou!');
        break;
    } else {
        // Exibe mensagem de tentativa incorreta
        console.log('Tente novamente');
    }

    // Reduz o número de tentativas após cada tentativa
    tentativas--;
}

// Verifica se as tentativas se esgotaram
if (tentativas === 0) {
    // Exibe mensagem informando que as tentativas acabaram e revela o número secreto
    console.log('Suas tentativas acabaram. O número secreto era ' + numeroSecreto);
    // Concatenação usada para exibir o número secreto
}

