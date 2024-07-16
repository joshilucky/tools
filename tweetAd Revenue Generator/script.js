document.getElementById('calculateButton').addEventListener('click', function() {
    const impressions = parseFloat(document.getElementById('impressions').value);
    const ctr = parseFloat(document.getElementById('ctr').value);
    const cpc = parseFloat(document.getElementById('cpc').value);

    if (isNaN(impressions) || isNaN(ctr) || isNaN(cpc)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    const revenue = calculateRevenue(impressions, ctr, cpc);
    displayResult(revenue);
});

function calculateRevenue(impressions, ctr, cpc) {
    const clicks = (impressions * ctr) / 100;
    const revenue = clicks * cpc;
    return revenue.toFixed(2); // Round to two decimal places
}

function displayResult(revenue) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `
        <h3>Estimated Ad Revenue:</h3>
        <p>$${revenue}</p>
    `;
}
