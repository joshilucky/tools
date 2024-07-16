function encodeText() {
    var inputText = document.getElementById('inputText').value;
    var encodedText = btoa(inputText); // Base64 encoding
    document.getElementById('outputText').value = encodedText;
}

function decodeText() {
    var inputText = document.getElementById('inputText').value;
    var decodedText = atob(inputText); // Base64 decoding
    document.getElementById('outputText').value = decodedText;
}
