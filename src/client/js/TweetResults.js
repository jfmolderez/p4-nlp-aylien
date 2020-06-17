import '../css/results.css';
import { elements } from './util';

const TweetResults = class {
    constructor(results) {
        this.results = results;   
    }

    render () {
        const dataContainer = document.createElement('div');
        dataContainer.classList.add('data')
        const dataSource = document.createElement('h4');
        dataSource.innerHTML = `Tweet Sentence : ${this.results.text}`;
        dataContainer.appendChild(dataSource);

        const metadata = document.createElement('ul');
        metadata.classList.add('metadata');
        Object.entries(this.results).forEach(([k, val])=> {this.createLine(metadata, k, val)})
        dataContainer.appendChild(metadata);

        const results = elements.searchResults;
        results.appendChild(dataContainer);
    }

    createLine(ul, k, val) {
        if (k === 'polarity_confidence' || k === 'subjectivity_confidence') {
            val = parseFloat(val).toFixed(2).toString();
        }
        const li = document.createElement('li');
        li.innerHTML = `<span class="item_title">${k}</span>: ${val}`;
        li.classList.add('dataItem');
        ul.appendChild(li);
    }

}

export default TweetResults;