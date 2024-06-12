function* geradoraUm() {
  // Código qualquer ...
  yield "Valor 1";
  yield "Valor 2";
  yield "Valor 3";
}

function* geradoraDois() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

function* geradoraTres() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradoraQuatro() {
  yield* geradoraTres();

  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradoraQuatro();

function* geradoraCinco() {
  yield function () {
    console.log("Vim do y1");
  };

  yield function () {
    console.log("Vim do y2 ");
  };
}

const g5 = geradoraCinco();

const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
