import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from './NewsSummeryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>All News</h2>
            <div>
                {
                    allNews.map(news => <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>)
                }
            </div>
        </div>
    );
};

export default Home;