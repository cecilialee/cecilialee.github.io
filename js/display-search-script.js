// Dynamic display of search results

const searchInput = document.getElementById('search-input');
const contentV = document.getElementById('content');
const resultsV = document.getElementById('results');

searchInput.addEventListener('input', function() {
    if (this.value) {
        contentV.style.display = 'none';
        resultsV.style.display = 'inline';
    } else if (!this.value && contentV.style.display === 'none') {
      contentV.style.display = 'block';
      resultsV.style.display = 'none';
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



