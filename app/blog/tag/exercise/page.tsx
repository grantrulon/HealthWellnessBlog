import BlogHeader from "@/components/blog-header";
import PostCard from "@/components/post-card";
import { PostCardData } from "@/data/blog-post";
import { getTaggedPosts } from "@/service/content-service";



async function getServerSideProps() {
    return await getTaggedPosts("Exercise");
}

async function ExerciseTagPage() {

    var data: [PostCardData] = await getServerSideProps();

    return (
        <div>
            <BlogHeader featuredStyle={"font-medium"} exerciseStyle={"font-bold"} nutritionStyle={"font-medium"} mentalHealthStyle={"font-medium"} />
            <section className="bg-[#DEE3E5] grid grid-cols-12 px-[63px] py-[27px] gap-[30px]"> 
                {data.map((value, i) =>
                    <div key={i} className="col-span-4">
                        <PostCard data={value} />
                    </div>
                )}
            </section>
        </div>
    );
}


export default ExerciseTagPage;