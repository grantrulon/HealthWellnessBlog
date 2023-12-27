import BlogHeader from "@/components/blog-header"
import Image from 'next/image';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <main>
                {/* <BlogHeader /> */}
                {children}
            </main>
            <footer className="bg-gray-800 text-white">
                <section className="py-[50px] px-[100px] flex flex-row gap-[100px]">
                    <div>
                    {/* <div className='px-5'>
                        <Image className="h-8 w-auto" src="/logo.png" alt="Your Company" width="100" height="100" />
                    </div> */}
                    </div>
                    <div className="flex flex-col">
                        {/* <h4 className="text-[18px] font-bold underline">About</h4>
                        <a href='#'>Contact</a>
                        <a href='#'>Careers</a> */}
                    </div>
                </section>
                <section>

                </section>
            </footer>
        </>
    )
}