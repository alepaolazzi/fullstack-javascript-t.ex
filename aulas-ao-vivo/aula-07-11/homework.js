//Inicio das variáveis
let arr = [0, 0, 0];
let sorteioAnterior;
let portasAbertas = 0;

//Função que realiza sorteio de número aleatório
const aleatorio = () => Math.round(Math.random() * 2 + 1);

//Função principal que retorna a mensagem exibida no console
function sorteia() {
  sorteioAnterior = [...arr];
  let numIguais = 0;
  let msg = "";
  //Para cada index do array, um número aleatório é adicionado
  for (let i = 0; i < arr.length; i++) {
    arr[i] = aleatorio();
    //Verifica se o número sorteado anterior é igual o atual
    if (i > 0) {
      arr[i] == arr[i - 1] ? numIguais++ : (numIguais += 0);
    }
  }

  //Mostra o Array atual e o anterior para facilitar comparação
  console.log("Atual: ", arr);
  console.log("Anterior", sorteioAnterior);

  //Se os arrays são iguais, retorna a função
  if (verificaIgualdade(arr)) {
    portasAbertas++;
    return "Porta (x): aberta";
  }

  // Verifica se os números do array são todos iguais
  if (numIguais >= 2) {
    portasAbertas++;
    msg = "Porta 1: aberta";
  } else {
    msg = "Tente de novamente!";
  }

  return msg;
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

// While usado para repetir o código 20 vezes para mostrar funcionamento

let cont = 0;
while (cont < 20) {
  console.log(sorteia());
  console.log("<--------------------->");
  cont++;
}

console.log("Portas Abertas: ", portasAbertas);
