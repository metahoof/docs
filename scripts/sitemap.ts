import fs from 'node:fs';
import fg from 'fast-glob';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const inputDirectory = './dist';
const sitemapStream = new SitemapStream({ hostname: 'https://whitepaper.metahoof.com' });

async function build() {
    const links = await fg([`${inputDirectory}/**/*.html`], {
        onlyFiles: true,
        globstar: true,
    });
    const linkList = links.map((url) => {
        return { url: url.replace(inputDirectory, ''), changefreq: 'weekly' };
    });

    // Return a promise that resolves with your XML string
    streamToPromise(Readable.from(linkList).pipe(sitemapStream)).then((sitemap) => {
        fs.writeFileSync(`dist/sitemap.xml`, sitemap);
    });
}

build();
