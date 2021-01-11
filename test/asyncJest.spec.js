const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  test("atende", async () => {
    // assert.fail();
    expect.assertions(1);
    const response = await answerPhone(true);
    return expect(response).toBe('Oi!');
  });
  test("ocupado", async () => {
    // assert.fail();
    expect.assertions(1);
    try {
      const response = await answerPhone(false);
    } catch (error) {
      return expect(error).toBe('Infelizmente não podemos atender...');
    }
  });
});
