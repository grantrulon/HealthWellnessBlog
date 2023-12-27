
import BlogHeader from '@/components/blog-header';
import PageSelector from '@/components/page-selector';
import PostCard from '@/components/post-card';
import { PostCardData } from '@/data/blog-post';
import { getAllPostsPaginated, getFeaturedPosts, getPageNums, getRecentVideoPosts } from '@/service/content-service';
import { useQuery } from '@apollo/client';
import Image from 'next/image';

async function getServerSideProps() {
    return await getAllPostsPaginated(4, 0);
}

async function FeatureBlogsPage() {
    var data: [PostCardData] = await getServerSideProps();
    var featuredPosts: [PostCardData] = await getFeaturedPosts();
    var videoPosts: [PostCardData] = await getRecentVideoPosts();
    var pageNums: number[] = await getPageNums(1);

    return (
        <div>
            <BlogHeader featuredStyle='font-bold' exerciseStyle='font-medium' nutritionStyle='font-medium' mentalHealthStyle='font-medium' />
            <div>
                <section className="bg-[#DEE3E5]"> {/* Recent Hero section */}
                    <div className="px-[63px] py-[27px]">
                        <div className="bg-[#DEE3E5] grid grid-cols-[6fr_5fr] gap-[30px]">
                            <PostCard data={data[0]} />
                            <aside className="bg-[#DEE3E5] flex flex-col gap-5">
                                <h2 className='text-[24px] py-1 font-bold relative after:absolute after:h-[5px] after:bottom-[0px] after:left-0 after:right-0 after:w-[80px] after:bg-[#f9a21a]'>Featured Posts</h2>
                                {featuredPosts.map((value, i) =>
                                    <article key={i} className='bg-white hover:underline font-bold'>
                                        <h3 className='p-[14px]'>
                                            <a>{value.title}</a>
                                        </h3>
                                    </article>
                                )}
                                <h2 className='text-[24px] py-1 font-bold relative after:absolute after:h-[5px] after:bottom-[0px] after:left-0 after:right-0 after:w-[80px] after:bg-[#f9a21a]'>Recent Videos</h2>
                                {videoPosts.map((value, i) =>
                                    <article key={i} className='bg-white hover:underline font-bold'>
                                        <h3 className='p-[14px]'>
                                            <a className='flex flex-row' href={`/blog/${value.sys.id}`}>
                                                <Image className='rounded-full' src={"/video_icon.png"} alt="alt" width={35} height={35} />
                                                <div className='my-auto mx-5'>{value.title}</div>
                                            </a>
                                        </h3>
                                    </article>
                                )}
                            </aside>
                        </div>
                    </div>
                </section>
                <section className="bg-[#DEE3E5] grid grid-cols-12 px-[63px] py-[27px] gap-[30px]"> {/* Rest of recent articles section */}
                    {data.slice(1).map((value, i) =>
                        <div key={i} className="col-span-4">
                            <PostCard data={value} />
                        </div>
                    )}
                </section>
                <section>
                    <PageSelector pathRoot='/blog' pageNum={1} pageNums={pageNums}/>
                </section>
            </div>
        </div>
    );
}

export default FeatureBlogsPage;