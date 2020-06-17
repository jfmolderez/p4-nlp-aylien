import "babel-polyfill";
import './css/styles.scss';
import ArticleResults from './js/ArticleResults';
import { elements, renderLoader, clearLoader, getInput, clearInput, clearResults, validateURL, extractArticle } from './js/util';


const updateUI = async () => {
    const query = getInput();
    clearInput();
    clearResults();
    const validURL = validateURL(query);
    
    if (validURL) {
        renderLoader();
        const {q, metadata, article } = await extractArticle(query);
        clearLoader()
        const results = new ArticleResults(query, metadata, article);
        results.render();
    } else {
        alert(`Invalid URL : ${query} \n Please, type in a valid URL http(s)//...`);
    }
}

elements.searchForm.addEventListener('submit', e => {
    // alert('Article URL submitted!');
    e.preventDefault();
    updateUI();
});


// if (process.env.NODE_ENV === 'production') {
//     console.log('Production mode');
// } else if (process.env.NODE_ENV === 'development') {
//     console.log('Development mode');
// }

