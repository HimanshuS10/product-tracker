'use client'
import { scrapeAndStoreProduct } from '@/lib/actions';
import React, { FormEvent } from 'react'
import { useState } from 'react'

const isValidUrlFunction = (url: string) => {
    try {
        const passedUrl = new URL(url);

        const hostname = passedUrl.hostname;

        // Checks if the host is amazon.

        if (hostname.includes('amazon')) {
            return true;
        } 

        return true;
    } catch (error) {
        return false;
    }

    return false;
}

const Searchbar = () => {

    const [SearchPrompt, setSearchPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValidUrl = isValidUrlFunction(SearchPrompt);

        if (!isValidUrl) {
            alert('Please enter a valid Amazon URL');
            return;
        }

        try {
            setIsLoading(true);
            

            // Scrape the product details from the URL
            const product = await scrapeAndStoreProduct(SearchPrompt);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
 
    }

    return (
        <>
            <form className='flex flex-wrap gap-4 mt-12'
                onSubmit={handleSubmit}>

                <input
                    type='text'
                    value={SearchPrompt}
                    onChange={(e) => setSearchPrompt(e.target.value)}
                    placeholder='Enter Product Link'
                    className='searchbar-input' />

                <button type="submit" className='searchbar-btn'
                disabled={SearchPrompt === ''}>
                    {isLoading ? 'Loading...' : 'Track Product'}
                </button>


            </form>
        </>
    )
}

export default Searchbar