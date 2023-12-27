
import PostCard from '@/components/post-card';
import { Author } from '@/data/author';
import { PostCardData } from '@/data/blog-post';
import { getAuthorData, getAuthorPosts } from '@/service/content-service';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

async function getServerSideProps(authorId: string) {
    return await getAuthorData(authorId);
}

async function AuthorPage({ params }: { params: { authorId: string } }) {
    var authorData: Author = await getServerSideProps(params.authorId);
    var postsData: [PostCardData] = await getAuthorPosts(params.authorId);

    return (
        <div className='bg-[#DEE3E5]'>
            <div className="relative w-full h-[200px] bg-gray-800">

            </div>
            <section className="h-[300px] flex px-[100px] -translate-y-[150px]">
                <div className="grid grid-cols-[1fr_3fr] grid-rows-2 gap-x-[75px] gap-y-[20px]">
                    <div className="row-span-2 flex justify-around w-[300px]">
                        <Image className=' rounded-full mr-3' src={authorData.authorHeadshot.url} alt="Your Company" width={300} height={300} />
                    </div>
                    <div className='flex flex-col justify-end'>
                        <h1 className='text-[36px] text-white font-bold'>
                            {authorData.name}
                        </h1>
                    </div>
                    <div className='flex text-[18px]'>
                        <h5>{documentToReactComponents(authorData.bio.json)}</h5>
                    </div>
                </div>
            </section>
            <div className='px-[75px]'>
                <h3 className='text-[32px] font-bold'>{authorData.name}&apos;s Latest Posts</h3>
            </div>
            <section className="bg-[#DEE3E5] grid grid-cols-12 px-[63px] py-[27px] gap-[30px]"> {/* Rest of recent articles section */}
                    {postsData.map((value, i) =>
                        <div key={i} className="col-span-4">
                            <PostCard data={value} />
                        </div>
                    )}
                </section>
        </div>
    );
}

export default AuthorPage;
