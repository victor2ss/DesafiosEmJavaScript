var numeroSecreto = parseInt(Math.random() * 1000-1) + 1;

var iterador = 0;
console.log(numeroSecreto);

if(iterador !=0){
  alert('Voce ja fez' + iterador + 'tentativas')
}
while(chute != numeroSecreto){

  var chute = prompt('Digite um numero entre 1 e 1000');

  //Realizando o chute
  if (chute == numeroSecreto){

  alert('Acertou');

  }else if(chute > numeroSecreto){
  alert('Errou, o numero secreto eh menor ' +chute);

  }else if (chute < numeroSecreto){

    alert('Errou, o numero secreto eh maior' +chute);
    iterador +=1;
  }
}
