function encodeText() {
    var inputText = document.getElementById('inputText').value;
    var encodedText = encodeHtmlEntities(inputText); // HTML encoding
    document.getElementById('outputText').value = encodedText;
}

function decodeText() {
    var inputText = document.getElementById('inputText').value;
    var decodedText = decodeHtmlEntities(inputText); // HTML decoding
    document.getElementById('outputText').value = decodedText;
}

function encodeHtmlEntities(text) {
    return text.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
        return '&#' + i.charCodeAt(0) + ';';
    });
}

function decodeHtmlEntities(text) {
    var txt = document.createElement('textarea');
    txt.innerHTML = text;
    return txt.value;
}
