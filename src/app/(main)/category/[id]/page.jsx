import Leftsidebar from '@/components/hompage/news/Leftsidebar';
import RightSidebar from '@/components/hompage/news/RightSidebar';
import React from 'react';

async function getCategories() {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json();
    return data
}
async function getNewsByCategoryId(category_id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    const data = await res.json();
    return data
}

const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    console.log(id)
    const categories = await getCategories()
    const news = await getNewsByCategoryId(id)
    console.log(news)

    return (
        <div className="grid grid-cols-12 gap-4 container mx-auto my-[60px]">
            <Leftsidebar categories={categories} activeId={null} />

            <div className="bg-blue-100 col-span-6">
                <h1>All news</h1>
                <div className="space-y-2">
                    {
                        news.data.length > 0 ? news.data.map(n => {
                            return <div key={n._id} className="p-5 rounded md border shadow">{n.title}</div>
                        }) : <h2 className='font-bold text-4xl text-center my-7'>No News Found</h2>
                    }
                </div>
            </div>

            <div className="col-span-3">
                <RightSidebar />
            </div>
        </div>
    );
};

export default NewsCategoryPage;