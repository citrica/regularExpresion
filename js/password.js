const strongPassword = /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
const mediumPassword = /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{8,}/;

const pw = ['123456', 'hola123', 'Hola123456', 'hola-1', 'Hola-1', 'Hola-123', 'holaquetal', 'HOLA-123'];
//invalid, invalid, medium, invalid, strong, strong, invalid, invalid

pw.forEach(value => {
    if (value.match(strongPassword)) {
        console.log('Password ' + value + ' is strong.');
    } else if (value.match(mediumPassword)) {
        console.log('Password ' + value + ' is medium.');
    } else {
        console.log('Password ' + value + ' is invalid!!')
    }
});