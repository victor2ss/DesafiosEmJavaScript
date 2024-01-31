var listaDeNomeDosFilmes = []; //Array para nome dos filmes
var listaDeFilmes = []; //Array para filmes
var listaDeTrailer = []; //Array para trailer

// Função para adicionar um novo filme à lista.
function adicionarFilme() {
  var filmeFav = document.getElementById("filme").value; // Obtém o valor do campo de entrada da imagem do filme.
  var trailerDoFilme = document.getElementById("trailer").value;// Obtém o valor do campo de entrada do trailer do filme.
  var tituloDoFilme = document.getElementById("nome").value; //Obtém o valor do campo de entrada do título do filme.

  
  // Verifica se a extensão da imagem é JPG ou JPEG.
  if((filmeFav.endsWith(".jpg")) || (filmeFav.endsWith(".jpeg"))){

    // Limpa a mensagem de erro, caso exista.
    document.getElementById("mensagemDeErro").innerHTML = null;

    listaDeFilmes.push(filmeFav);
    listaDeTrailer.push(trailerDoFilme);
    listaDeNomeDosFilmes.push(tituloDoFilme)

    limpaCampos();
    recarregarFilmes();
  }else{
   // Exibe uma mensagem de erro informando sobre o formato incorreto
    document.getElementById("mensagemDeErro").innerHTML = "Formato da imagem não correspondido a JPG ou JPEG, tente de novo";
  }
}

// Função para recarregar a lista de filmes.
function recarregarFilmes(){
  var filmesDaLista =  document.getElementById("listaFilmes")
    
  // Limpa o conteúdo anterior desse elemento.
  filmesDaLista.innerHTML = null;

    // Percorre os arrays de filmes, trailers e nomes.
  for (var i = 0; i < listaDeFilmes.length; i++) {
     // Para cada filme, cria uma estrutura HTML contendo:

    // Link para o trailer do filme (usando a URL no array "listaDeTrailer").
    // Imagem do filme (usando a URL no array "listaDeFilmes").
    // Título do filme (obtido do array "listaDeNomeDosFilmes").
    // Botão "Excluir" com uma função onclick para chamar a função "excluirFilme" passando o índice do filme.

    filmesDaLista.innerHTML += '<div class="filme-item">' +
                                '<a href="' + listaDeTrailer[i] + '"><img src="' + listaDeFilmes[i] + '"></a>' + '<p>' +listaDeNomeDosFilmes[i]+ '</p>' +
                                '<button onclick="excluirFilme(' + i + ')">Excluir</button>' + 
                                '</div>';
  }
}

// Função para excluir um filme da lista
function excluirFilme(index) {
  listaDeFilmes.splice(index, 1);
  listaDeTrailer.splice(index, 1);
  listaDeNomeDosFilmes.splice(index, 1);
  recarregarFilmes();
}

// Função para limpar os campos de entrada.
function limpaCampos(){
   document.getElementById('filme').value = '';
   document.getElementById('trailer').value = '';
   document.getElementById('nome').value = '';
}
