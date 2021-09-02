function recebimento(valorParcela, diaPagamento, diaVencimento) {
  if (diaPagamento > diaVencimento) {
    var quantidadeAtraso = diaPagamento - diaVencimento;
    for (i = 0; i < quantidadeAtraso; i++) {
      valorParcela += 1.50;
    }
    return valorParcela;
  } else {
    return valorParcela;
  }
}

module.exports = { recebimento }


