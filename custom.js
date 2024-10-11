console.log("JS carregado.");

//log se o botão foi apertado
function Hello(){
    console.log("Apertei o botão");
}

//função buscar valor
function getValue(){
   let input = document.getElementById("texto").value;
   console.log(input);
   alert("Olá "+ input);
}