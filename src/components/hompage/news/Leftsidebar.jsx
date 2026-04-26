import Link from 'next/link';
import React from 'react';

const Leftsidebar = ({ categories, activeId }) => {
    return (
        <div className="col-span-3">
            <h3 className="font-bold text-lg">All categories</h3>
            <ul className="flex flex-col gap-1">
                {
                    categories.data.news_category.map(category => {
                        return <li
                            className={`
                                ${activeId === category.category_id && "bg-slate-200"}
                                rounded-md text-gray-800 text-left`}
                            key={category.category_id}
                        >
                            <Link 
                             href={`/category/${category.category_id}`}
                                className='block p-2 rounded'
                             >
                                {category.category_name}
                            </Link>
                        </li>
                    })
                }
            </ul>
        </div >
    );
};

export default Leftsidebar;