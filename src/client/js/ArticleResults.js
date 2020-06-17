import '../css/results.css';
import { elements } from './util';

const ArticleResults = class {
    constructor(source, metadata, text) {
        this.source = source;
        this.metadata = metadata;
        this.text = text;
    }

    render () {
        const dataContainer = document.createElement('div');
        dataContainer.classList.add('data')
        const dataSource = document.createElement('h4');
        dataSource.innerHTML = `Source : ${this.source}`;
        dataContainer.appendChild(dataSource);

        const metadata = document.createElement('ul');
        metadata.classList.add('metadata');
        Object.entries(this.metadata).forEach(([k, val])=> {this.createLine(metadata, k, val)})
        dataContainer.appendChild(metadata);

        const article = document.createElement('div');
        article.classList.add('article');
        article.innerHTML = this.text;

        const results = elements.searchResults;
        results.appendChild(dataContainer);
        results.appendChild(article);
    }

    createLine(ul, k, val) {
        const li = document.createElement('li');
        li.innerHTML = `<span class="item_title">${k}</span>: ${val}`;
        li.classList.add('dataItem');
        ul.appendChild(li);
    }

}

export default ArticleResults;