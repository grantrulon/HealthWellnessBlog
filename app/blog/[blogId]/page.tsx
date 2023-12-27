import { getPostData } from '@/service/content-service';
import { toDisplayDate } from '@/service/date-service';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { PostData } from '@/data/blog-post';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Video from 'next-video';
import AssetContainer from '@/components/asset-container';
import { getAsset } from '@/service/content-service';


async function getServerSideProps(blogId: string) {
    return await getPostData(blogId);
    
}

async function PostPage({ params }: { params: { blogId: string } }) {
    var data: PostData = await getServerSideProps(params.blogId);

    const options = {
        renderNode: {
            [BLOCKS.HEADING_3]: (node: any, children: any) => <div className="text-[24px] font-bold">{children}</div>,
            [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
                var id = node.data.target.sys.id;
                var assets = data.content.links.assets.block;
                var url;
                var type;
                for (var asset of assets) {
                    if (asset.sys.id == id) {
                        url = asset.url;
                        type = asset.contentfulMetadata.tags[0].name;
                    }
                }
                return <AssetContainer type={type ?? ""} url={url ?? ""}  />;
            }
        },
    };

    return (
        <div className="grid grid-cols-[1fr_3fr_1fr] pb-[100px]">
            <div className="col-start-2 flex flex-col content-center">
                <div className="py-[50px]">
                    <div className="flex flex-row">
                        {data.tags != null ? data.tags.map((value, i) =>
                            <div key={i}
                                className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1.5 px-3 mr-2 font-sans text-xs font-bold uppercase text-gray-900">
                                <span className="">{value}</span>
                            </div>
                        ) : <div></div>}
                    </div>
                    <div className="">
                        <h1 className="text-[36px] font-bold">
                            {data.title}
                        </h1>
                    </div>
                    <div className='flex flex-row mt-3'>
                        <a href={`/blog/author/${data.author.sys.id}`}>
                            <Image className=' rounded-full mr-3' src={data.author.authorHeadshot.url} alt="Your Company" width={50} height={50} />
                        </a>
                        <div className='flex flex-col justify-evenly h-[50px]'>
                            <div className='flex text-[15px]  '>
                                <a href={`/blog/author/${data.author.sys.id}`}>
                                    <div className='relative after:absolute after:h-[3px] after:bottom-[-2px] after:left-0 after:right-0 after:w-0  after:bg-[#f9a21a] after:transition-all after:duration-500 after:ease-in-out hover:after:duration-1000 hover:after:transition-all hover:after:w-full'>
                                        {data.author.name}
                                    </div>
                                </a>
                            </div>
                            <div className='text-[12px]'>
                                {/* Pipe should be border of the _ min read */}
                                {toDisplayDate(data.publishDate)} 
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    {documentToReactComponents(data.content.json, options)}
                </div>
            </div>
        </div>
    );
}

export default PostPage;