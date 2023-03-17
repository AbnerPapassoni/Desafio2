// array com as imagens do banner
var imagensBanner = [
    "./js/imagensBanner/img-1.jpg",
    "./js/imagensBanner/img-2.jpg",
    "./js/imagensBanner/img-3.jpg",
    "./js/imagensBanner/img-4.jpg",
    "./js/imagensBanner/img-5.jpg"
  ];
  
  // intervalo de tempo para troca das imagens (em milissegundos)
  var intervalo = 4000;
  
  // variável que indica o índice da imagem atual
  var indiceAtual = 0;
  
  // função que exibe a próxima imagem
  function exibirProximaImagem() {
    // oculta a imagem atual
    //document.getElementById("banner").style.display = "none";
    // incrementa o índice da imagem atual
    indiceAtual = (indiceAtual + 1) % imagensBanner.length;//
    // exibe a próxima imagem
    document.getElementById("imagemBanner").src = imagensBanner[indiceAtual];
    //document.getElementById("banner").style.display = "block";
  }
  
  // exibe a primeira imagem do banner
  document.getElementById("imagemBanner").src = imagensBanner[indiceAtual];
  
  // define o intervalo de tempo para troca das imagens
  setInterval(exibirProximaImagem, intervalo);