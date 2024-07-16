function formatCSS() {
    const input = document.getElementById('css-input').value;
    const output = document.getElementById('formatted-output');
    
    // Create a new style element
    const styleElement = document.createElement("style");
    // Set the textContent of the style element to the input value (CSS code)
    styleElement.textContent = input;
    
    // Get the textContent of the style element, which is now formatted CSS
    const formattedCSS = styleElement.textContent;
    
    // Set the content of the output div to the formatted CSS
    output.textContent = formattedCSS;
  }
  