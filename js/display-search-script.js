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
searchResultTemplate: '<div class="post-list" id="search-result"><li><a href="{url}" id="post-list-title">{title}</a></li><li><span class="date">{date}</span><span class="tag">{tags}</span></li></div>',
noResultsText: '<p id="no-result"><i class="fa fa-frown-o"></i> No results found</p>'
})



