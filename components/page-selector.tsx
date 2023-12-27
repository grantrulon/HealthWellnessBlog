/* 

    This component is a navigation bar for changing pages of blog post listings
    - The bar should show (Bare Bones):
        - current selected page
        - the page immediately before the current page, and the one before that (5 max pages)
        - the page immediately after the current page, and the one after that (5 max pages)
        - left and right arrows for going to the next, previous pages
    - In the future I can add features such as:
        - ... [last page num] if not already displayed as current, previous or next
        -- [first page num] ... if not already displayed as current, previous or next

*/

import { getPageNums } from "@/service/content-service";

interface PageSelectorProps {
    pageNum: number,
    pathRoot: string,
    pageNums: number[]
}

async function PageSelector(props: PageSelectorProps) {

    return (
        <div className="flex justify-center py-10 bg-[#DEE3E5]">
            {props.pageNums == undefined || props.pageNums.length == 0 ?
                <div></div>
                :
                <nav className="flex flex-row gap-5 items-center">
                    {
                        props.pageNums[0] == props.pageNum ?
                        <a ><svg className="fill-gray-300" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="13" aria-hidden="true"><g id="chevron-left1_layer"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></g></svg></a>
                    :
                    <a href={props.pageNum == 2 ? `${props.pathRoot}` : `${props.pathRoot}/page/${props.pageNum - 1}`}><svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="13" aria-hidden="true"><g id="chevron-left1_layer"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></g></svg></a>
                    }
                    
                    {props.pageNums.map((value: number) => {
                        if (value == props.pageNum) {
                            return (
                                <div className="font-bold border-solid border-2 border-[#f9a21a] rounded-md py-1 px-2" key={value}><a href={value != 1 ? `${props.pathRoot}/page/${value}` : `${props.pathRoot}`}>{value}</a></div>
                            )
                        } else {
                            return (
                                <div key={value}><a href={value != 1 ? `${props.pathRoot}/page/${value}` : `${props.pathRoot}`}>{value}</a></div>
                            )
                        }
                    })}
                    {
                        props.pageNums[props.pageNums.length - 1] == props.pageNum ?
                        <a >
                        <svg className="fill-gray-300" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="13" aria-hidden="true"><g id="chevron-right2_layer"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></g></svg>
                    </a>
                    :
                    <a href={`${props.pathRoot}/page/${props.pageNum + 1}`}>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="13" aria-hidden="true"><g id="chevron-right2_layer"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></g></svg>
                    </a>
                    }
                </nav>}
        </div >
    );
}

export default PageSelector;