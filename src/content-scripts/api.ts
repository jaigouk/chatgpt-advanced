export interface SearchResult {
    title: string;
    url: string;
    description: string;
}

export async function apiSearch(query: string, numResults: number = 10, timePeriod: string = '', region: string = '', searchEngine?: string): Promise<SearchResult[]> {
    try {
        let baseUrl = '';
        let params: URLSearchParams;

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

        const response = await fetch(url, { mode: 'no-cors' });
        const html = await response.text();

        let results: NodeListOf<Element>;
        switch (searchEngine) {
            case 'google':
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                results = doc.querySelectorAll('div.g');
                break;
            case 'duckduckgo':
                const dom = new JSDOM(html);
                results = dom.window.document.querySelectorAll('div.result');
                break;
            default:
                const parser2 = new DOMParser();
                const doc2 = parser2.parseFromString(html, 'text/html');
                results = doc2.querySelectorAll('div.g');
        }

        const searchResults: SearchResult[] = [];

        results.forEach(result => {
            let title, url, description;
            switch (searchEngine) {
                case 'google':
                    title = result.querySelector('h3')?.textContent;
                    url = result.querySelector('a')?.href;
                    description = result.querySelector('span.st')?.textContent;
                    break;
                case 'duckduckgo':
                    title = result.querySelector('h2')?.textContent;
                    url = result.querySelector('a.result__url')?.href;
                    description = result.querySelector('a.result__snippet')?.textContent;
                    break;
                default:
                    title = result.querySelector('h3')?.textContent;
                    url = result.querySelector('a')?.href;
                    description = result.querySelector('span.st')?.textContent;
            }

            if (title && url && description) {
                searchResults.push({
                    title,
                    url,
                    description
                });
            }
        });

        return searchResults;
    } catch (error) {
        console.error(error);
        return [];
    }
}
