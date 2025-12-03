import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='text-2xl text-accent font-semibold mb-5'>Find Us on</h2>
            <div className="">
                <div className="join join-vertical w-full">
                    <button className="btn bg-base-100 justify-start gap-5 text-accent text-lg p-7 font-light join-item"><FaFacebook className='text-[#3B599C]' /> Facebook</button>
                    <button className="btn bg-base-100 justify-start gap-5 text-accent text-lg p-7 font-light join-item"><FaTwitter className='text-[#58A7DE]' /> Twitter</button>
                    <button className="btn bg-base-100 justify-start gap-5 text-accent text-lg p-7 font-light join-item"><FaInstagram className='text-[#D82D7E]' /> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;