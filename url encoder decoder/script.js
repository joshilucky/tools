function encodeText() {
    var inputText = document.getElementById('inputText').value;
    var encodedText = encodeURIComponent(inputText); // URL encoding
    document.getElementById('outputText').value = encodedText;
}

function decodeText() {
    var inputText = document.getElementById('inputText').value;
    try {
        var decodedText = decodeURIComponent(inputText); // URL decoding
        document.getElementById('outputText').value = decodedText;
    } catch (error) {
        console.error('Error decoding URL:', error);
        document.getElementById('outputText').value = 'Invalid URL input';
    }
}
