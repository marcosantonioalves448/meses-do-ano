var saidaMeses = document.getElementById("saidaMeses");
var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var saida = "";

for (i = 0; i < meses.length; i += 1) {
saida += meses[i] + "<br/>";
}

saidaMeses.innerHTML = saida;