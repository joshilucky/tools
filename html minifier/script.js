function minifyHTML() {
    var inputHTML = document.getElementById('inputText').value;
    var outputHTML = inputHTML.replace(/>\s+</g, '><').trim(); // Minify HTML by removing whitespace between tags
    document.getElementById('outputText').value = outputHTML;
}
