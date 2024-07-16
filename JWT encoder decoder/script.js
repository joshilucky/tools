function encodeJWT() {
    var inputText = document.getElementById('inputText').value;
    var encodedJWT = btoa(inputText); // Base64 encoding for simplicity (not actual JWT encoding)
    document.getElementById('outputText').value = encodedJWT;
}

function decodeJWT() {
    var inputText = document.getElementById('inputText').value;
    try {
        var decodedJWT = atob(inputText); // Base64 decoding for simplicity (not actual JWT decoding)
        document.getElementById('outputText').value = decodedJWT;
    } catch (error) {
        console.error('Error decoding JWT:', error);
        document.getElementById('outputText').value = 'Invalid JWT input';
    }
}
