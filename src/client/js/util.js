import { articleFromAylien } from './aylien';
import { tweetFromAylien } from './aylien';

export const elements = {
    searchForm: document.querySelector('.search-form'),
    searchInput: document.querySelector('.search__field'),
    searchResults: document.querySelector('.results'),
    loading: document.querySelector('.loading'),
    searchButton: document.querySelector('.search__btn'),
    searchResultsData: document.querySelector('.data'),
    searchResultsText: document.querySelector('.article'),
};

export const elementStrings = {
    loader: 'loader'
};

export const renderLoader = () => {
    const loader = `<p class="${elementStrings.loader}"> Loading ...</p>`;
    elements.loading.innerHTML = loader;
};

export const clearLoader = () => {
    elements.loading.innerHTML = '';
};

export const getInput = () => elements.searchInput.value ;

export const clearInput = () => {
    elements.searchInput.value = '';
}

export const validateURL = url => url.match(/^https?:\/\/.+/);

export const clearResults = () => {
    elements.searchResults.innerHTML = '';
}

export const extractArticle = async (query) => {
    const res = await articleFromAylien(query);
    const metadata = {};
    const article = res.article;
    Object.entries(res).forEach(([key, val]) => {
        if (key != 'article' && val.length > 0) {
            metadata[key] = val;
        }
    });
    //const results = new ArticleResults(query, metadata, article);
    return {query, metadata, article};
}

export const analyzeTweet = async (query) => {
    const res = await tweetFromAylien(query);
    return res;
}