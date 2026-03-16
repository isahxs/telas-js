let pedidosManha = [];
let pedidosTarde = [];
 
function adicionarPedido(periodo) {
   
    const input = document.getElementById(`input-${periodo}`);
    const valor = parseInt(input.value);
 
    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, digite uma quantidade válida.");
        return;
    }
 
    if (periodo === 'manha') {
        pedidosManha.push(valor);
    } else {
        pedidosTarde.push(valor);
    }
 
    input.value = "";
    atualizarInterface();
}
 
function atualizarInterface() {
 
    document.getElementById('lista-manha').innerText = "Pedidos: " + pedidosManha.join(', ');
    document.getElementById('lista-tarde').innerText = "Pedidos: " + pedidosTarde.join(', ');
 
    const todosPedidos = pedidosManha.concat(pedidosTarde);
    const somaTotal = todosPedidos.reduce((acumulador, atual) => acumulador + atual, 0);
 
    document.getElementById('valor-total').innerText = somaTotal;
}
 
function zerarTudo() {
    if (confirm("Deseja zerar todas as vendas?")) {
        pedidosManha = [];
        pedidosTarde = [];
        atualizarInterface();
    }
}