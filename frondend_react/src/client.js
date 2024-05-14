import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId : 'snqq8q9c',
    dataset : 'production',
    apiVersion : '2021-06-03',
    useCd : true,
    token: 'skj4B12S0Q3LqwHysyZfebLLsFuGgx96MR9mhB2liqIJSny9LMLRPaUoMpUmahXkVSWcjz7uUT8XCOzhP73ecUesyuwViGFf9KoUXRcC9FTOC6ehlc2VW5dei3zMZ414m6F7U2ExsugL2iRkBkmwXYFhiNlihjh5Fh4lBNB5Xzy6Swu9LEiW', 

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);