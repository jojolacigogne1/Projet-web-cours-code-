document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.querySelector('input[type="text"]');
    const elements = document.querySelectorAll('.langage, .article, .evenement');
    const searchButton = document.querySelector('a[href="#"]');

    searchButton.addEventListener('click', function() {
        const searchText = searchBar.value.trim().toLowerCase();

        elements.forEach(element => {
            const textContent = element.textContent.toLowerCase();

            if (textContent.includes(searchText)) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        });
    });
});


