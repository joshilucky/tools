// script.js
document.getElementById('textForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const inputText = formData.get('input_text');

    try {
        // Remove multiple whitespaces using regular expression
        const cleanedText = inputText.replace(/\s+/g, ' ').trim();

        // Display cleaned text
        document.getElementById('output').innerHTML = `<h2>Cleaned Text:</h2><p>${cleanedText}</p>`;
    } catch (error) {
        console.error('Error:', error);
    }
});
