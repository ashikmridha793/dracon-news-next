import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2, } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStarHalf } from 'react-icons/io';

const NewsCart = ({ news }) => {
    return (
        <div className='card py-3'>
            <div className="card-body rounded-md space-y-2 bg-gray-200 ">
                <div className='flex justify-between items-center bg-gray-100 p-2 rounded'>
                    <div className='flex gap-1 items-center p-1'>
                        <div className='rounded-full overflow-hidden h-[30px] w-[30px]'>
                            <Image
                                src={news.author?.img}
                                alt={news.author?.name}
                                height={40}
                                width={40}
                            />
                        </div>
                        <div>
                            <h1 className='font-semibold'>{news.author?.name}</h1>
                            <p className='text-xs'>{news.author?.published_date}</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <CiShare2 className='text-xl' />
                        <CiBookmark className='text-xl' />
                    </div>
                </div>
                <h2 className="card-title font-bold">{news.title}</h2>
                <div className='relative w-full'>
                    <Image
                        src={news?.image_url || "/default-image.jpg"}
                        alt={news?.title}
                        width={900}
                        height={500}
                        className="w-full"
                    />
                </div>
                <p className='line-clamp-2'>{news.details}</p>

                <div className='flex items-center gap-2 justify-between py-2'>

                    <div className='flex items-center gap-2'>
                        <h2 className='flex items-center gap-2'><IoIosStarHalf className='text-lg text-amber-400' /> {news.rating?.number}</h2>
                        <h2 className='flex items-center gap-2'><FaEye className='text-lg' />
                         {news.total_view}</h2>
                    </div>

                    <Link href={`/news/${news._id}`}>
                        <button className='btn'>See Details</button>
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default NewsCart;