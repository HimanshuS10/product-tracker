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

        const title = $('#productTitle').text().trim();

        // Target price using multiple common classes


        // Issue with the price selector is solved
        // So what I need to do is split the number from the decimal point
        // can also get the first 2 digitals after the decimal point

        //ex: 223.23.423.324.234.23.12.
        // split and get 223

        // Getting the price from the amazon page and formatting it

        const currentPrice = extractPrice(
            $('.a-price-whole').text().trim(),
            $('.a-price-fraction').text().trim(),
        )

        const orginalPrice = extractPrice(
            $('#priceblock_ourprice'),
            $('.a-price.a-text-price span.a-offscreen'), 
            $('#listPriceValue span.a-offscreen'),
            $(),
        )

        // Gets the whole number of the price
        let priceWhole = $('.a-price-whole').text().trim();
        // Gets the fraction of the price
        let priceFraction = $('.a-price-fraction').text().trim();
        
        // Spliting the price from the decimal point
        const priceDollar = priceWhole.split(".")[0];
        
        const priceCents = priceFraction.slice(0, 2);

        console.log("The price  = "+ priceDollar);
        console.log("The cents = " + priceCents);

        console.log({ title, currentPrice });

    } catch (error: any) {
        console.error('Error scraping product:', error.message);
    }
}
