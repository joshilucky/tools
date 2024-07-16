function loadImage(event) {
    var imageDisplay = document.getElementById('imageDisplay');
    imageDisplay.innerHTML = ''; // Clear any previous image

    var image = document.createElement('img');
    image.id = 'filteredImage';
    image.src = URL.createObjectURL(event.target.files[0]);
    image.onload = function() {
        URL.revokeObjectURL(image.src); // Free memory
    };

    imageDisplay.appendChild(image);
}

function applyFilter(filter) {
    var image = document.getElementById('filteredImage');
    if (image) {
        image.style.filter = filter;
    }
}
