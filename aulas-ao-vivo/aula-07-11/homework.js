//Inicio das variáveis
let arr = [0, 0, 0];
let sorteioAnterior;
let portasAbertas = 0;

//Função que realiza sorteio de número aleatório
const aleatorio = () => Math.round(Math.random() * 2 + 1);

//Função principal que retorna quantidade de portas abertas
function sorteia() {
  sorteioAnterior = [...arr];
  let numIguais = 0;
  //Para cada index do array, um número aleatório é adicionado
  for (let i = 0; i < arr.length; i++) {
    arr[i] = aleatorio();
    //Verifica se o número sorteado anterior é igual o atual
    if (i > 0) {
      arr[i] == arr[i - 1] ? numIguais++ : (numIguais += 0);
    }
  }

  //Verifica se os arrays são iguais
  if (verificaIgualdade(arr) || numIguais >= 2) {
    console.log(`Atual: ${arr}, Anterior: ${sorteioAnterior}`);
    portasAbertas++;
  }

  return portasAbertas;
}

//Função que verifica se os arrays são iguais e retorna booleano
const verificaIgualdade = (arr) => {
  let contaNumIguais = 0;
  //Itera no array verificando cada numero atual com o seu respectivo do sorteio anterior
  arr.forEach((num, i) => {
    num == sorteioAnterior[i] ? contaNumIguais++ : (contaNumIguais = 0);
  });
  return contaNumIguais == 3 ? true : false;
};

// While usado para repetir o código 10 vezes para mostrar funcionamento
let cont = 0;
while (cont < 10) {
  sorteia();
  if (portasAbertas == 3) {
    console.log(`Parabéns você abriu as 3 portas em ${cont} tentativas`);
    break;
  }
  cont++;
}

if (portasAbertas != 3) {
  console.log(`Portas abertas: ${portasAbertas}. Não foi dessa vez :(`);
}
