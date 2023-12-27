
import { PostCardData } from '@/data/blog-post';
import { toDisplayDate } from '@/service/date-service';
import Image from 'next/image';


interface PostCardProps {
    data: PostCardData
}

function PostCard(props: PostCardProps) {


    return (
        <div className="shadow-lg bg-white hover:-translate-y-2 transition-all duration-300 flex min-h-[500px]">
            <a className="" href={`/blog/${props.data.sys.id}`}>
                <Image src={props.data.cardImage.url} alt="Your Company" width={1000} height={1} />
                <div className="px-6 py-4  flex flex-col justify-between">
                    <div className="font-bold text-xl mb-2">{props.data.title}</div>
                    <div className='flex flex-row mt-3'>
                    <Image className=' rounded-full mr-3' src={props.data.author.authorHeadshot.url} alt="Your Company" width={50} height={50} />
                        <div className='flex flex-col justify-evenly h-[50px]'>
                            <div className='flex text-[15px]  '>
                                <div className='relative after:absolute after:h-[3px] after:bottom-[-2px] after:left-0 after:right-0 after:w-0  after:bg-[#f9a21a] after:transition-all after:duration-500 after:ease-in-out hover:after:duration-1000 hover:after:transition-all hover:after:w-full'>
                                    {props.data.author.name}
                                </div>
                            </div>
                            <div className='text-[12px]'>
                                {/* Pipe should be border of the _ min read */}
                                {toDisplayDate(props.data.publishDate)} 
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default PostCard;