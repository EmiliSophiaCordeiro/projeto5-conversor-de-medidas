// Captura os dados do usuário
let valorEmMetros = parseFloat(prompt("Digite um valor em metros:"));
let unidadeDesejada = prompt("Escolha a unidade de medida (mm, cm, dm, dam, hm ou km):");

// Verifica qual a conversão a ser feita com base na unidade desejada
let resultado;

switch (unidadeDesejada) {
    case 'mm':
        resultado = valorEmMetros * 1000;
        break;
    case 'cm':
        resultado = valorEmMetros * 100;
        break;
    case 'dm':
        resultado = valorEmMetros * 10;
        break;
    case 'dam':
        resultado = valorEmMetros / 10;
        break;
    case 'hm':
        resultado = valorEmMetros / 100;
        break;
    case 'km':
        resultado = valorEmMetros / 1000;
        break;
    default:
        console.log('Opção inválida');
        break;
}

// Exibe o resultado, caso a opção seja válida
if (resultado !== undefined) {
    console.log(`Resultado: ${resultado} ${unidadeDesejada}`);
}

