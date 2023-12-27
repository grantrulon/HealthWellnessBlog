import BlogHeader from '@/components/blog-header';
import PageNotFound from '@/components/page-not-found';
import PageSelector from '@/components/page-selector';
import PostCard from '@/components/post-card';
import { PostCardData } from '@/data/blog-post';
import { getAllPostsPaginated, getFeaturedPosts, getPageNums, getRecentVideoPosts } from '@/service/content-service';
import { useQuery } from '@apollo/client';
import Image from 'next/image';

/*  

    Some examples of pagination:
    - /blog is basically page 1, which will be posts 1-4 incl ----> limit: 4, skip: 0
    - /blog/page/2 will be posts 5-7 incl -----> limit: 3, skip: 4 = 4 + (2-2) * 3
    - /blog/page/3 will be posts 8-10 incl ----> limit: 3, skip: 7 = 4 + (3-2) * 3
    - etc. -----> if in /page/[pageNum] then limit: 3, skip: 4 + (pageNum - 2) * 3

*/


async function getServerSideProps() {
    return await getAllPostsPaginated(3, 4);
}

async function BlogPostsPaginated({ params }: { params: { pageNum: string } }) {
    var data: [PostCardData] = await getServerSideProps();
    var pageNums: number[] = await getPageNums(parseInt(params.pageNum));

    return (
        <div>
            <BlogHeader featuredStyle='font-bold' exerciseStyle='font-medium' nutritionStyle='font-medium' mentalHealthStyle='font-medium' />

            {pageNums.length == 0 ?
                <PageNotFound />
                : <div>
                    <section className="bg-[#DEE3E5] grid grid-cols-12 px-[63px] py-[27px] gap-[30px]"> {/* Rest of recent articles section */}
                        {data.map((value, i) =>
                            <div key={i} className="col-span-4">
                                <PostCard data={value} />
                            </div>
                        )}
                    </section>
                    <section>
                        <PageSelector pathRoot='/blog' pageNum={parseInt(params.pageNum)} pageNums={pageNums} />
                    </section>
                </div>}
        </div>
    );
}

export default BlogPostsPaginated;