import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStarHalf } from 'react-icons/io';

export const generateMetadata = async ({ params }) => {
    const {id} = await params
    console.log(id, 'id')

    const news = await getNewsDetailsById(id)
    console.log(news, 'news')
    
    return{
        title: news.title,
        description: news.details
    }
}



const NewsDetailsPage = async ({ params }) => {
    const { id } = await params
    const news = await getNewsDetailsById(id)
    return (
        <div className="max-w-5xl bg-gray-200 shadow-md py-3 mx-auto mb-20">
            <div className="card-body space-y-2">
                <div className='relative w-full'>
                    <Image
                        src={news?.image_url || "/default-image.jpg"}
                        alt={news?.title}
                        width={900}
                        height={500}
                        className="w-full"
                    />
                </div>

                <h2 className="card-title font-bold">{news.title}</h2>
                <p>{news.details}</p>

                <div className='flex items-center gap-2 justify-between py-2'>

                    <div className='flex items-center gap-2'>
                        <h2 className='flex items-center gap-2'><IoIosStarHalf className='text-lg text-amber-400' /> {news.rating?.number}</h2>
                        <h2 className='flex items-center gap-2'><FaEye className='text-lg' />
                            {news.total_view}</h2>
                    </div>
                </div>
                <Link href={`/caregory/${news.category_id}`}>
                    <button className='btn bg-pink-700 text-white'>
                        <BiLeftArrowAlt />All news in this category
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default NewsDetailsPage;