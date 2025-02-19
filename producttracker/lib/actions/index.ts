"use server"

import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string) {

    if (!productUrl) {
        throw new Error('Please provide a valid URL');
    }

    try {
        const scrapedProduct = await scrapeAmazonProduct(productUrl);
    } catch (error: any) {

        throw new Error('Error');
    }


}