"use client"

import Image from "next/image";
import { useState } from "react";


type Props = {
    text: string;
}
export const ProductDescription = ({ text }: Props) => {

    const [opened, setOpened] = useState(false);


    return (
        <div className="bg-white  rounded-sm border border-gray-200 mt-20  px-7 ">
            <div className={`${opened? 'border-b': 'border-0'} flex justify-between items-center py-7 border-gray-200`}>
                <div className="text-xl ">Informações do Produto</div>
                <div
                    onClick={() => setOpened(!opened)}
                    className={` border size-14 border-gray-200 flex justify-center items-center rounded-sm`}
                >
                    <Image
                        src={"/assets/ui/arrow-left-s-line.png"}
                        alt=""
                        width={24}
                        height={24}
                        className={`transition-transform ${opened ? "rotate-180" : ""}`}

                    />

                </div>

            </div>
            {opened && (
                <div className={`cursor-pointer text-gray-500 my-5`}>
                    {text}
                </div>
            )}

        </div>
    )
}