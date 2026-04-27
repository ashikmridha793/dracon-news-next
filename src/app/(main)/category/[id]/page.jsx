import Leftsidebar from '@/components/hompage/news/Leftsidebar';
import NewsCart from '@/components/hompage/news/NewsCart';
import RightSidebar from '@/components/hompage/news/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';



const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    console.log(id)

    const categories = await getCategories()
    const news = await getNewsByCategoryId(id)

    return (
        <div className="grid grid-cols-12 gap-4 container mx-auto my-[60px]">

            <Leftsidebar categories={categories} activeId={id} />

            <div className="col-span-6 space-y-2">
                <h1 className='text-xl font-bold'>News by category</h1>
                <div className="space-y-2">
                    {news.length > 0 ? (
                        news.map((n) => {
                            return <NewsCart key={n._id} news={n}></NewsCart>
                        })
                        ) : (
                            <h2 className='font-bold text-4xl text-center my-7'>
                                No News Found
                            </h2>
                        )}
                </div>
            </div>

            <div className="col-span-3">
                <RightSidebar />
            </div>
        </div>
    );
};

export default NewsCategoryPage;