function add() {
    
  let valorAtual = parseInt(document.getElementById("contador").value);
  let aumentar = valorAtual + 1;
  document.getElementById("contador").value = aumentar;
}
