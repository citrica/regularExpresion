// TARJETA DE CRÉDITO: Caso 1, 16 caracteres, empieza del 50 al 55, grupos de 4 con o sin espacio/guión
const pattern8 = /^(50|51|52|53|54|55)\d{2}(\s|\-)?(\d{4}(\s|\-)?){3}/;
const value8 = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];

console.log('Case 1:');
value8.forEach(value => {
    console.log('Regexp matchs with ' + value + '? -> ', pattern8.test(value));
});

// TARJETA DE CRÉDITO: Caso 2, igual que el caso 1 + extraer los números en grupos de 4
const pattern9 = /(^(50|51|52|53|54|55)\d{2})(\s|\-)?(\d{4})(\s|\-)?(\d{4})(\s|\-)?(\d{4})(\s|\-)?/;
const value9 = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];

console.log('Case 2:');
value9.forEach(value => {
    console.log('Credit card: ', pattern9.exec(value)[0]);
    console.log('Group 1: ', pattern9.exec(value)[1]);
    console.log('Group 2: ', pattern9.exec(value)[4]);
    console.log('Group 3: ', pattern9.exec(value)[6]);
    console.log('Group 4: ', pattern9.exec(value)[8]);
})