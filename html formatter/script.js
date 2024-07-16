function formatHTML() {
    const input = document.getElementById('html-input').value;
    const output = document.getElementById('formatted-output');
    
    // Create a new div element
    const newDiv = document.createElement("div");
    // Set the innerHTML of the div to the input value (parsed as HTML)
    newDiv.innerHTML = input;
    
    // Get the innerHTML of the div, which is now formatted
    const formattedHTML = newDiv.innerHTML;
    
    // Set the content of the output div to the formatted HTML
    output.textContent = formattedHTML;
  }
  