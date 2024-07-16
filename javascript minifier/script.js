document.getElementById('minifyButton').addEventListener('click', () => {
    const inputCode = document.getElementById('inputCode').value;
    const minifiedCode = minifyJavaScript(inputCode);
    document.getElementById('outputCode').value = minifiedCode;
});

function minifyJavaScript(code) {
    // Remove comments
    code = code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
    // Remove whitespace and new lines
    code = code.replace(/\s+/g, ' ').trim();
    return code;
}
