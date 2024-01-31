// Array contendo URLs de imagens de filmes
var listaFilmes = ["https://media.fstatic.com/1MSzUyloG1v_Lbh-jalcyI6uLfk=/322x478/smart/filters:format(webp)/media/movies/covers/2022/10/FUIZOO8XsAIDhfY.jpg",
"https://upload.wikimedia.org/wikipedia/pt/e/e8/The_Devil_Wears_Prada_-_filme.jpg",
"https://br.web.img3.acsta.net/medias/nmedia/18/91/79/19/20163665.jpg"];

// Adicionando mais URLs de filmes usando o método "push"
listaFilmes.push("https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABekijdwSSKpmgY-tRTGq6Vl0X7D00BcXu2jPriJgVMD3cUcc4WdshBuLbMQPc997jMQwI1peMmMCTdS-kNCVv0p2hjmjgqe9wBGX.jpg?r=70a",
"https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg" ,
"https://br.web.img2.acsta.net/pictures/17/01/24/17/13/228823.jpg",
"https://upload.wikimedia.org/wikipedia/pt/7/7b/Harry_Potter_C%C3%A1lice_Fogo_2004.jpg");

// Array contendo os nomes dos filmes correspondentes
var nomesFilmes = ["Scooby-doo", "O Diabo veste Prada", "Homem de ferro", "the old guard", "Divertidamente" ,"La La Land" , "Harry Potter e o Calice de Fogo"];

// Cria um elemento "div" com a classe "catalago_De_Filmes"
document.write("<div class = 'catalago_De_Filmes'>"); //parte realizarmos a comparação dos filmes utilizando o HTML

// Variável para controlar o loop pelos filmes
var i = 0; //valor inicial do nosso array, que seria o filme do Scooby-Doo

// Loop que roda enquanto "i" for menor que o tamanho de "listaFilmes"
while(i < listaFilmes.length){
  if((listaFilmes[i].endsWith(".jpg")) || (listaFilmes[i].endsWith(".jpeg"))){ //realiza a verifica se a img eh jpg pu jpeg pelo metodo ends.With
  
  //parte onde vai mostrar o filme e os nomes deles abaixo do cartaz
  document.write("<div class='filme'>");
  document.write("<img src =" + listaFilmes[i] + ">");
  document.write("<h2>" +nomesFilmes[i]+ "</h2>");
  document.write("</div>");

  // Escreve um parágrafo informando que a imagem não foi exibida
  }else{
    document.write("<p> A imagem" + i + " não foi exibida, pois não é jpg ou jpeg </p>");
  }
i++; //incrimento
}
// Fecha o elemento "div" criado anteriormente
document.write("</div>");


