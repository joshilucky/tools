document.getElementById('viewButton').addEventListener('click', () => {
    const inputJson = document.getElementById('inputJson').value;
    try {
        const jsonObj = JSON.parse(inputJson);
        const jsonTree = renderJsonTree(jsonObj);
        document.getElementById('jsonTree').innerHTML = jsonTree;
    } catch (error) {
        document.getElementById('jsonTree').innerHTML = '<span style="color: red;">Invalid JSON</span>';
    }
});

function renderJsonTree(obj, indent = '') {
    let treeHtml = '';
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            treeHtml += `${indent}<span class="key">${key}:</span> <br>${renderJsonTree(obj[key], indent + '&nbsp;&nbsp;&nbsp;&nbsp;')}`;
        } else {
            treeHtml += `${indent}<span class="key">${key}:</span> <span class="value">${JSON.stringify(obj[key])}</span><br>`;
        }
    }
    return treeHtml;
}
