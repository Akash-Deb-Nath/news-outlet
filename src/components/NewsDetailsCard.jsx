import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    // console.log(news);
    return (
        <div className='flex justify-center items-center'>
            <div className="bg-base-100 shadow-sm">
                <h2 className='text-2xl font-semibold px-10 pt-5'>News details</h2>
                <figure className="px-10 pt-5">
                    <img
                        src={news.image_url}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body px-10">
                    <h2 className="card-title">{news.title}</h2>
                    <p className='text-justify'>{news.details}</p>
                    <div className="card-actions flex">
                        <Link to={`/category/${news.category_id}`} className="btn btn-secondary justify-center items-center mt-3"><FaArrowLeft />
                            Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;