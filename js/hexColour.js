const patternHexColour = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const colour = ['#1AFFa1', '#F00', '123456', '#123abce', '#afafah', '#000000', '#8A2BE2', '#8a2bE2'];
// true, true, false, false, false, true, true, true, 

colour.forEach(value => {
    if (value.match(patternHexColour)) {
        console.log('Regexp matchs with ' + value + '? -> ', true);
    } else {
        console.log('Regexp matchs with ' + value + '? -> ', false);
    }
});