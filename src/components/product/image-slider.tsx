"use client"

import Image from "next/image";
import { useState } from "react";

type Props = {
    images: string[]
}

export const ImageSlider = ({ images } : Props) => {

    const [ selectedImage , setSelectedImage ] = useState(0);
    return (
        <div className="max-w-sm mx-auto md:mx-0">
            <div className="border border-gray-300 bg-white p-14">
                <Image
                    src={images[selectedImage]}
                    alt="Product Image"
                    width={500}
                    height={500}
                    className="max-w-full rounded-lg"
                />
            </div>
            <div className="mt-8 grid grid-cols-4 gap-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`p-2 bg-white cursor-pointer border ${selectedImage === index ? 'border-blue-500' : 'border-gray-300'}`}
                    >
                        <Image 
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            width={120}
                            height={120}
                            className="w-full h-full object-cover rounded-lg"
                            onClick={() => setSelectedImage(index)}
                        />
                       

                    </div>
                ))}
            </div>
        </div>
    )
}