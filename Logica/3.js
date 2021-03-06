/* Uma doceria tem um painel para informar os doces disponΓ­veis

    π° 64 pedaΓ§os

    π 8 bolos

    πͺ 100 cookies

    π© 20 donuts

    π« 50 barras de chocolate

    π’ + de 20% do estoque total

    π΄ - de 20% do estoque total

    βοΈ estoque zerado para o doce

    FaΓ§a um programa para que o caixa da doceria possa controlar
    o estoque, ou seja, permite adicionar ou subtrair um valor 
    do estoque de um doce e mostre para os clientes uma indicaΓ§Γ£o 
    de estoque da seguinte forma:

    π° π’

    π π’

    πͺ π΄

    π© π΄

    π« βοΈ 
*/

const estoqueInicial = {
  "π°": 64,
  "π": 8,
  "πͺ": 100,
  "π©": 20,
  "π«": 50,
};

const doces = {
  "π°": estoqueInicial["π°"],
  "π": estoqueInicial["π"],
  "πͺ": estoqueInicial["πͺ"],
  "π©": estoqueInicial["π©"],
  "π«": estoqueInicial["π«"],
};

function gerenciarDoces(doces, alteraDoces) {
  for (const doce in alteraDoces) {
    const resultado = doces[doce] + alteraDoces[doce];
    if (resultado >= 0) {
      doces[doce] = doces[doce] + alteraDoces[doce];
    }
  }
}

function exibirDocesParaClientes(doces, estoqueInicial) {
  for (const doce in doces) {
    const quantidade = doces[doce];
    let emblema = null;

    if (quantidade === 0) {
      emblema = "βοΈ";
    } else {
      if (quantidade > estoqueInicial[doce] * 0.2) {
        emblema = "π’";
      } else {
        if (quantidade <= estoqueInicial[doce] * 0.2) {
          emblema = "π΄";
        }
      }
    }
    console.log(doce + " " + emblema);
  }
}

gerenciarDoces(doces, { "πͺ": -10, "π©": 5 });
gerenciarDoces(doces, { "π©": 5 });
gerenciarDoces(doces, { "π©": 5 });
gerenciarDoces(doces, { "π©": 5, "π": -8 });
gerenciarDoces(doces, { "π©": -36 });
exibirDocesParaClientes(doces, estoqueInicial);