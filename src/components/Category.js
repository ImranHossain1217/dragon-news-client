import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from './NewsSummeryCard';

const Category = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
          <h2>Available News: {categoryNews.length}</h2>
          <div>
            {
                categoryNews.map(news => <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>)
            }
          </div>
        </div>
    );
};

export default Category;