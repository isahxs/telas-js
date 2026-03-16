function verificarSabores(){
const opcoes = document.getElementById("opcao").value;
const resultado = document.getElementById("resultado");
 
resultado.innerHTML = "";
 
 
 
switch(opcoes){
case "Selecione um tipo de sabor":
resultado.innerHTML = "Selecione um tipo de sabor"
break;
 
case "Brigadeiro":
resultado.innerHTML = "Temos sabor Brigadeiro";
break;
 
case "Morango":
resultado.innerHTML = "Temos sabor Morango";
break;
 
case "Ninho":
resultado.innerHTML = "Temos sabor Ninho";
break;
 
default:
resultado.innerHTML = "Não possui no estoque";
}
}