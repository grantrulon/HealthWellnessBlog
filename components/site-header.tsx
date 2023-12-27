

import logo from '/logo.png';
import Image from 'next/image';


function SiteHeader() {
    return (

        <div className='bg-white'>
            <header className="font-['Roboto Slab'] text-[20px]">
                <nav className='grid grid-cols-[1fr_5fr_7fr] p-5'>
                    <div className='px-5'>
                        <Image className="h-8 w-auto" src="/logo.png" alt="Your Company" width="64" height="64" />
                    </div>
                    <div className='flex justify-around'>
                        <a href='/blog' className='relative after:absolute after:h-[2px] after:bottom-[0px] after:left-0 after:right-0 after:w-0 after:m-auto after:bg-black after:transition-all after:duration-1000 after:ease-in-out hover:after:duration-1000 hover:after:transition-all hover:after:w-full '>Blog</a>
                        <a href='/company' className='relative after:absolute after:h-[2px] after:bottom-[0px] after:left-0 after:right-0 after:w-0 after:m-auto after:bg-black after:transition-all after:duration-1000 after:ease-in-out hover:after:duration-1000 hover:after:transition-all hover:after:w-full '>Company</a>
                        <a href='/insights' className='relative after:absolute after:h-[2px] after:bottom-[0px] after:left-0 after:right-0 after:w-0 after:m-auto after:bg-black after:transition-all after:duration-1000 after:ease-in-out hover:after:duration-1000 hover:after:transition-all hover:after:w-full '>Insights</a>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default SiteHeader;