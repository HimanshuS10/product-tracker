import axios from 'axios';
import * as cheerio from 'cheerio';
import { extractPrice } from '../utils';

export async function scrapeAmazonProduct(url: string) {
    if (!url) {
        return;
    }


    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.PASSWORD);
    const port = 33335;
    const session_id = (Math.random() * 100000) | 0;
    
    

    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    };

    try {
        const response = await axios.get(url, options);

        const $ = cheerio.load(response.data);

        const title  = $('#productTitle').text().trim();


        // Figure this out
        const price = extractPrice(
            $('.priceToPay span.a-price-whole'),
            $('a.size.base.a-color-price'),
            $('.a-button-selected .a-color-base'),
        );

    console.log({title, price});

        // console.log(response.data)

    } catch (error: any) {
        throw new Error('Error to scaraple product');
    }
}