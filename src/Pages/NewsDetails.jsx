import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/HomeLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import Navbar from '../components/Navbar';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({});
    useEffect(() => {
        const NewsDetails = data.find(singleNews => singleNews.id == id);
        setNews(NewsDetails);
    }, [data, id]);
    return (
        <div>
            <header>
                <Header></Header>
                {/* <nav className='w-11/12 mx-auto mt-5'>
                    <Navbar></Navbar>
                </nav> */}
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
                <section className='col-span-9'>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;