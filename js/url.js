const patternUrl = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
const url = ['https://www.lemoncode.net', 'www.lemoncode.net', 'lemoncode.net'];
//true, true, true

url.forEach(value => {
    if (value.match(patternUrl)) {
        console.log('Regexp matchs with ' + value + '? -> ', true);
    } else {
        console.log('Regexp matchs with ' + value + '? -> ', false);
    }
});