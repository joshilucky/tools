document.getElementById('generateButton').addEventListener('click', function() {
    const tweetInput = document.getElementById('tweetInput').value.trim();
    const imageInput = document.getElementById('imageInput').files[0];

    if (!tweetInput) {
        alert('Please enter your tweet.');
        return;
    }

    const tweetOutput = document.getElementById('tweetOutput');
    const tweetContent = `
        <div class="tweet">
            <img src="twitter-logo.png" alt="Twitter Logo" class="twitter-logo">
            <div class="tweet-content">
                <p>${tweetInput}</p>
            </div>
        </div>
    `;

    if (imageInput) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageSrc = event.target.result;
            tweetOutput.innerHTML = `
                ${tweetContent}
                <img src="${imageSrc}" alt="Uploaded Image" class="uploaded-image">
            `;
        };
        reader.readAsDataURL(imageInput);
    } else {
        tweetOutput.innerHTML = tweetContent;
    }
});
