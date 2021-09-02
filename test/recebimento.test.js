const { recebimento } = require('../src/recebimento')

describe('Testando pagamento com data atrasada', () => {
  test('1.1 valor = 150, dia de pagamento = 21, dia de vencimento = 15', () => {
    expect(recebimento(150, 21, 15)).toBe(159)
  })
})

describe('Testando com o pagamento realizado no dia correto', () => {
  test('2.1 valor = 150, dia de pagamento = 15, dia de vencimento = 15', () => {
    expect(recebimento(150, 15, 15)).toBe(150)
  })
})

describe('Testando com o pagamento sendo realizado antes do dia', () => {
  test('3.1 valor = 150, dia de pagamento = 10, dia de vencimento = 15', () => {
    expect(recebimento(150, 10, 15)).toBe(150)
  })
})

