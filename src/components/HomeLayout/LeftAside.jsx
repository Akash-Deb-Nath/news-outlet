import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="skeleton skeleton-text">AI is thinking harder...</span>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;