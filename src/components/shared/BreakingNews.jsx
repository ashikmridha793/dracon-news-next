import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    const news = [
        { "id": 1, "title": "Breaking News: Major Earthquake Reported in Southeast Asia" },
        { "id": 2, "title": "Breaking News: Global Markets Show Sudden Volatility After Policy Shift" },
        { "id": 3, "title": "Breaking News: New AI Breakthrough Announced by Leading Researchers" },
        { "id": 4, "title": "Breaking News: Emergency Climate Summit Called by World Leaders" },
        { "id": 5, "title": "Breaking News: Major Tech Company Unveils Unexpected Product Line" }
    ]
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 py-3 px-2 rounded container mx-auto'>
            <button className='btn bg-pink-700 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {news.map(n => {
                    return <span key={n.id}>{n.title}</span>
                })}
            </Marquee>
        </div>
    );
};

export default BreakingNews;