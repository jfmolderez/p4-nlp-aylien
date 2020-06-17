jest.mock('../client/js/aylien');
import { validateURL, extractArticle } from '../client/js/util';

describe('article_test_suite', function () {

    it('should output valid url', () => {
        let url = 'http://www.bbc.com/sport/0/football/25912393';
        expect(validateURL(url)[0]).toEqual("http://www.bbc.com/sport/0/football/25912393");
        url = 'https://www.bbc.com/sport/0/football/25912393';
        expect(validateURL(url)[0]).toEqual("https://www.bbc.com/sport/0/football/25912393");
    })

    it('should output invalid url', () => {
        const url = 'bbc.com/sport/0/football/25912393';
        expect(validateURL(url)).toEqual(null);
    })

    it('should extract article', async () => {
        const articleRes = {
            query : 'http://www.bbc.com/sport/0/football/25912393',
            metadata: {
                title: 'Lionel Messi: Forward is not for sale, says Barcelona president'
                },
            article: 'Barcelona forward Lionel Messi is not for sale ...',
        }
        const result = await extractArticle('http://www.bbc.com/sport/0/football/25912393');
        expect(result).toEqual(articleRes);
    })
})