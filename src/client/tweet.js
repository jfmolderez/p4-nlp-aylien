import "babel-polyfill";
import './css/styles.scss';
import TweetResults from './js/TweetResults';

import { elements, renderLoader, clearLoader, getInput, clearInput, clearResults, analyzeTweet } from './js/util';


const updateUI = async () => {
    const query = getInput();
    clearInput();
    clearResults();

    
    if (query.length > 8) {
        renderLoader();
        const res = await analyzeTweet(query);
        clearLoader()
        const results = new TweetResults(res);
        results.render();
    } else {
        alert(`Invalid sentence : ${query} \n Please, type in a tweet that is at least 8 characters long ...`);
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
