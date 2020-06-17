jest.mock('../client/js/aylien');
import { analyzeTweet } from '../client/js/util';

describe('tweet_test_suite', function () {
    it('should analyze tweet', async () => {
        const tweetRes = {
            polarity : 'positive',
            subjectivity: "subjective",
            text: "Awesome ! Inspiring success, compelling performance.",
            polarity_confidence: "1.00",
            subjectivity_confidence: "0.95"
        }
        const result = await analyzeTweet("Awesome ! Inspiring success, compelling performance.");
        expect(result).toEqual(tweetRes);
    })
})