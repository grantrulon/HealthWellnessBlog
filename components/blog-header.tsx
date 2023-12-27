import logo from '/logo.png';
import Image from 'next/image';

interface BlogHeaderProps {
    featuredStyle: string,
    exerciseStyle: string, 
    nutritionStyle: string,
    mentalHealthStyle: string
}

function BlogHeader(props: BlogHeaderProps) {

    return (
        <div className='bg-[#DEE3E5]'>
            <div className="flex  p-5">
                <a href="/blog" className={`${props.featuredStyle} mx-5 text-sm relative after:absolute after:h-[2px] after:bottom-[-4px] after:left-0 after:right-0 after:w-0 after:m-auto after:bg-black after:transition-all after:duration-1000 after:ease-in-out hover:after:duration-1000 hover:after:transition-all hover:after:w-full `}>Featured</a>
                <a href="/blog/tag/exercise" className={`${props.exerciseStyle} mx-5 text-sm relative after:absolute after:h-[2px] after:bottom-[-4px] after:left-0 after:right-0 after:w-0 after:m-auto after:bg-black after:transition-all after:duration-1000 after:ease-in-out hover:after:duration-1000 hover:after:transition-all hover:after:w-full `}>Exercise</a>
                <a href="/blog/tag/nutrition" className={`${props.nutritionStyle} mx-5 text-sm relative after:absolute after:h-[2px] after:bottom-[-4px] after:left-0 after:right-0 after:w-0 after:m-auto after:bg-black after:transition-all after:duration-1000 after:ease-in-out hover:after:duration-1000 hover:after:transition-all hover:after:w-full `}>Nutrition</a>
                <a href="/blog/tag/mental-health" className={`${props.mentalHealthStyle} mx-5 text-sm relative after:absolute after:h-[2px] after:bottom-[-4px] after:left-0 after:right-0 after:w-0 after:m-auto after:bg-black after:transition-all after:duration-1000 after:ease-in-out hover:after:duration-1000 hover:after:transition-all hover:after:w-full `}>Mental Health</a>
            </div>
        </div>
    );
}

export default BlogHeader;