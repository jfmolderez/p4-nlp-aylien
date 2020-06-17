export const articleFromAylien = async (query) => {
  return Promise.resolve({
    author: "",
    image: "",
    tags: [],
    article: "Barcelona forward Lionel Messi is not for sale ...",
    videos: [],
    title: "Lionel Messi: Forward is not for sale, says Barcelona president",
    publishDate: "",
    feeds: []
  });
}

export const tweetFromAylien = async (query) => {
  return Promise.resolve({
    polarity: "positive",
    subjectivity: "subjective",
    text: "Awesome ! Inspiring success, compelling performance.",
    polarity_confidence: "1.00",
    subjectivity_confidence: "0.95"
  });
}