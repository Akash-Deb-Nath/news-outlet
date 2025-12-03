import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    const breakingNews = news.filter(singleNews => singleNews.category_id == "2");
    // console.log(breakingNews);
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-3' pauseOnHover={true} speed={50}>
                {
                    breakingNews.map(singleBreakingNews => <p className='mx-3'>{singleBreakingNews.title}.</p>)
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;