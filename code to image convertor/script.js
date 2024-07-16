function convertCodeToImage() {
    var code = document.getElementById('codeInput').value;
    if (!code) {
        alert("Please enter some code.");
        return;
    }

    // Create canvas and context
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var lines = code.split('\n');
    var fontSize = 16;
    var lineHeight = fontSize * 1.5;
    ctx.font = `${fontSize}px 'Courier New', Courier, monospace`;
    
    // Calculate max width
    var maxWidth = lines.reduce((max, line) => Math.max(max, ctx.measureText(line).width), 0);

    canvas.width = maxWidth + 20; // Add padding
    canvas.height = lines.length * lineHeight + 20; // Add padding
    ctx.fillStyle = "#000"; // Black background
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff"; // White text
    ctx.font = `${fontSize}px 'Courier New', Courier, monospace`;
    ctx.textBaseline = "top";

    lines.forEach((line, index) => {
        ctx.fillText(line, 10, 10 + index * lineHeight);
    });

    var imageDisplay = document.getElementById('imageDisplay');
    imageDisplay.innerHTML = ''; // Clear previous image
    imageDisplay.appendChild(canvas);
    
    var link = document.createElement('a');
    link.href = canvas.toDataURL("image/png");
    link.download = 'code_image.png';
    link.textContent = 'Download Image';
    imageDisplay.appendChild(link);
}
