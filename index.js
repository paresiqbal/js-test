// Even and Odd number

let genap = [];
let ganjil = [];

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    genap = [...genap, i];
  } else {
    ganjil = [...ganjil, i];
  }
}

console.log({ ganjil, genap });
