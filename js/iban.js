// IBAN: Caso 1, 2 letras y 22 números
const pattern1 = /^ES\d{22}/;
const value1 = 'ES6600190020961234567890';

console.log('Case 1:');
console.log('Regexp matchs with ' + value1 + '? -> ', pattern1.test(value1));

// IBAN: Caso 2, con o sin espacios
const pattern2 = /^ES\d{2}\s?(\d{4}\s?){5}$/;
const value2 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

console.log('Case 2:');
value2.forEach(value => {
    console.log('Regexp matchs with ' + value + '? -> ', pattern2.test(value));
});

// IBAN: caso 3, con o sin espacios + extraer iban, código de páis y el dígito de control
const pattern3 = /^(ES)\d{2}\s?(\d{4}\s?){2}(\d{2})\d{2}\s?(\d{4}\s?){2}$/;
const value3 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

console.log('Case 3:');
value3.forEach(value => {
    console.log('Regexp matchs with ' + value + '? -> ', pattern3.test(value));
    console.log('IBAN -> ', pattern3.exec(value)[0]);
    console.log('Country code -> ', pattern3.exec(value)[1]);
    console.log('Check digit -> ', pattern3.exec(value)[3]);
});