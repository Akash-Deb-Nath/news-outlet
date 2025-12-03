import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json")
    .then(res => res.json());

const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h2 className='font-bold'>All Categories: {categories.length}</h2>
            <div className='grid grid-cols-1 mt-5 gap-5'>
                {
                    categories.map(category => <NavLink
                        key={category.id}
                        className='btn px-10 lg:px-25 bg-base-100 border-0 justify-start hover:bg-base-200 text-accent font-semibold'
                        to={`/category/${category.id}`} > {category.name}
                    </NavLink>)
                }
            </div>
        </div >
    );
};

export default Categories;