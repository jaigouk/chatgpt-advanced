
import cheerio from 'cheerio';

export interface SearchResult {
    title: string;
    href: string;
    body: string;
}

const PROXY_URL = 'http://localhost:8888';

export async function apiSearch(query: string, numResults = 10, timePeriod = '', region = '', searchEngine = 'google'): Promise<SearchResult[]> {
    try {
        let baseUrl = '';
        let params: URLSearchParams;

        console.log('------------------------------------');
        console.log('logs from api.ts');
        console.log('query', query);
        console.log('numResults', numResults);
        console.log('timePeriod', timePeriod);
        console.log('region', region);
        console.log('searchEngine', searchEngine);

        switch (searchEngine) {
            case 'google':
                baseUrl = 'https://www.google.com/search';
                params = new URLSearchParams({
                    q: query,
                    num: numResults.toString(),
                    tbs: timePeriod,
                    gl: region
                });
                break;
            case 'duckduckgo':
                baseUrl = 'https://duckduckgo.com/';
                params = new URLSearchParams({
                    q: query,
                    t: 'h_',
                    ia: 'web',
                    kl: 'us-en'
                });
                break;
            default:
                baseUrl = 'https://www.google.com/search';
                params = new URLSearchParams({
                    q: query,
                    num: numResults.toString(),
                    tbs: timePeriod,
                    gl: region
                });
        }

        const url = `${baseUrl}?${params.toString()}`;
        console.log('url', url);

        const response = await fetch(`${PROXY_URL}/${url}`);
        console.log('------------------------------------');
        console.log('response', response);
        console.log('------------------------------------');
        const html = await response.text();

        let results: cheerio.Cheerio;
        switch (searchEngine) {
            case 'google':
                const $ = cheerio.load(html);
                results = $('div.g');
                break;
            case 'duckduckgo':
                const $2 = cheerio.load(html);
                results = $2('div.result').not('.result--no-result');
                break;
            default:
                const $3 = cheerio.load(html);
                results = $3('div.g');
        }

        console.log('results', results);

        const searchResults: SearchResult[] = [];

        results.each((index, element) => {
            const $result = cheerio.load(element);
            const title = $result('h3').text();
            const href = $result('a').attr('href');

            const bodyElement = $result('div[data-content-feature="1"] span:nth-child(2)');
            const body = bodyElement.text() || $result('span.st').text() || title;

            if (title && href) {
                searchResults.push({ title, href, body });
            }
        });

        console.log('searchResults', searchResults);

        return searchResults;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch search results');
    }
}
