document.getElementById('formatButton').addEventListener('click', () => {
    const inputCode = document.getElementById('inputCode').value;
    const formattedCode = formatJavaScript(inputCode);
    document.getElementById('outputCode').value = formattedCode;
});

function formatJavaScript(code) {
    try {
        return js_beautify(code, { indent_size: 4 });
    } catch (error) {
        return 'Error formatting code: ' + error.message;
    }
}
