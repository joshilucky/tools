function generateSlug() {
    var input = document.getElementById("inputString").value;
    var slug = input.toLowerCase()
                    .replace(/ /g, '-')        // Replace spaces with hyphens
                    .replace(/[^\w-]+/g, '');  // Remove all non-word characters

    document.getElementById("slug").innerText = slug;
}
