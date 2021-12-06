// FICHERO HTML: Caso 1
const pattern6 = /https.+\.(png|jpg)/g;
const value6 =
    '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';

console.log(value6.match(pattern6));

// FICHERO HTML: Caso 2, en un fichero html
const pattern7 = /https.+\.(png|jpg)/gm;
const value7 =
    '<html>'
'<body>'
'<img'
'src = "https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"'
'/>'
'<h1> ejemplo </h1>'
'<img'
'src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"'
'/>'
'</body>'
'</html>';

console.log(value7.match(pattern7));