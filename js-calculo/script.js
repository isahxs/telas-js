function calcular() {
 
    let precoVenda = Number(document.getElementById('precoVenda').value);
    let custoUnitario = Number(document.getElementById('custoUnitario').value);
    let quantidadeVendida = Number(document.getElementById('quantidade').value);
 
    let lucroUnitario = precoVenda - custoUnitario;
    let lucroTotal = lucroUnitario * quantidadeVendida;
 
    console.log("Preço de venda: R$ " + precoVenda.toFixed(2))
    console.log("Custo Unitário: R$ " + custoUnitario.toFixed(2))
    console.log("Lucro por unidade: R$ " + lucroUnitario.toFixed(2))
    console.log("Quantidade vendida: " + quantidadeVendida + " unidades");
 
    if(precoVenda <= 0 || custoUnitario <= 0 || quantidadeVendida <= 0) {
        documen5.getElementById('resultado').innerHTML = "Por favor, digite valores válidos!";
        return;
    }
 
    let textoResultado = "";
 
    textoResultado = textoResultado + "Preço de venda: R$ " + precoVenda.toFixed(2) + "<br>";
    textoResultado = textoResultado + "Custo Unitário: R$ " + custoUnitario.toFixed(2) + "<br>";
    textoResultado = textoResultado + "Lucro por unidade: R$ " + lucroUnitario.toFixed(2) + "<br>";
    textoResultado = textoResultado + "Quantidade vendida: " + quantidadeVendida.toFixed(2) + "<br>";
    textoResultado = textoResultado + "--------------------------------<br>";
    textoResultado = textoResultado + "<strong>LUCRO TOTAL: R$ " + lucroTotal.toFixed(2) + "</strong>";
 
    document.getElementById('resultado').innerHTML = textoResultado;
 
}