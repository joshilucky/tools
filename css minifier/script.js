function minifyCSS() {
    var inputCSS = document.getElementById('inputText').value;
    var outputCSS = inputCSS.replace(/\/\*[\s\S]*?\*\/|[\r\n\t]+/g, ''); // Minify CSS by removing comments and unnecessary whitespace
    document.getElementById('outputText').value = outputCSS;
}
