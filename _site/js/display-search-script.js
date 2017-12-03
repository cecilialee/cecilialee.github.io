// Dynamic display of search results

const searchInput = document.getElementById('search-input');
const content = document.getElementById('content');
const results = document.getElementById('results');

searchInput.addEventListener('input', function() {
    if (this.value) {
        content.style.display = 'none';
        results.style.display = 'inline';
    } else if (!this.value && content.style.display === 'none') {
      content.style.display = 'block';
      results.style.display = 'none';
    }
});

// Configurations

SimpleJekyllSearch({
searchInput: document.getElementById('search-input'),
resultsContainer: document.getElementById('results-container'),
json: '/search.json',
searchResultTemplate: '<li id="search-result"><span id="search-date">{date} &raquo;</span><a href="{url}""> {title}</a></li>'
})