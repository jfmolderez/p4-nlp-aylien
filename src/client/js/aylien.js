export const articleFromAylien = async (query) => {
    // the prefix 'http://127.0.0.1:8888' is required for running in dev environment
    // since the express server runs on port 8888 and is different 
    // from the webpack dev server that runs on port 9000
    // This prefix can safely be suppressed (or kept) when running in production.
    const prefix = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8888' : '';
    const aylienStream = await fetch(`${prefix}/extract`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url: query})
    });
    const aylienResults = await aylienStream.json();
    return aylienResults;
}

export const tweetFromAylien = async (query) => {
    // the prefix 'http://127.0.0.1:8888' is required for running in dev environment
    // since the express server runs on port 8888 and is different 
    // from the webpack dev server that runs on port 9000
    // This prefix can safely be suppressed (or kept) when running in production.
    const prefix = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8888' : '';
    const aylienStream = await fetch(`${prefix}/analyze`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({mode: 'tweet', text: query})
    });
    const aylienResults = await aylienStream.json();
    return aylienResults;    
}

