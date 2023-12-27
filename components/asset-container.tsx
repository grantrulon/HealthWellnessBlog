'use client';


import { Asset } from '@/data/asset';
import { getAsset } from '@/service/content-service';
import Image from 'next/image';


interface AssetProps {
    type: string,
    url: string
}

function AssetContainer(props: AssetProps) {

    if (props.type == "Video") {
        return (
            <video autoPlay loop controls>
                <source src={props.url} />
            </video>
        )
    } else if (props.type == "Image") {
        return <Image className='mx-auto my-[20px]' src={props.url} alt="alt" width={400} height={400} />
    } else {
        return <div>ERROR</div>
    }
}

export default AssetContainer;