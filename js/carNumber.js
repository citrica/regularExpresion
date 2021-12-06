// MATRÍCULA: Caso 1, 4 dígitos y 3 letras + con o sin espacio/guión
const pattern4 = /^\d{4}(\s|\-)?[a-z]{3}$/i;
const value4 = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

console.log('Case 1:');
value4.forEach(value => {
    console.log('Regexp matchs with ' + value + '? -> ', pattern4.test(value));
});

// MATRÍCULA: caso 2, igual que el caso 1 + extraer números y letras
const pattern5 = /^(\d{4})(\s|\-)?([a-z]{3})$/i;
const value5 = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

console.log('Case 2:');
value5.forEach(value => {
    console.log('Regexp matchs with ' + value + '? -> ', pattern5.test(value));
    console.log("Números: " + pattern5.exec(value)[1]);
    console.log("Letras: " + pattern5.exec(value)[3]);
});