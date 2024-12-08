document.addEventListener('DOMContentLoaded', function () {
    console.log('Website loaded successfully!');
    // You can add more interactive features here
});


document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const productGrid = document.getElementById("product-grid");
    const products = productGrid.getElementsByTagName("img");

    searchInput.addEventListener("input", function() {
        const filter = searchInput.value.toLowerCase();
        for (let i = 0; i < products.length; i++) {
            const altText = products[i].alt.toLowerCase();
            if (altText.includes(filter)) {
                products[i].style.display = "";
            } else {
                products[i].style.display = "none";
            }
        }
    });
});
