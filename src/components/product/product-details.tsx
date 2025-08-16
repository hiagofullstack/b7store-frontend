"use client"

import { ProductComplete } from "@/types/product"
import Image from "next/image";

type Props = {
    product: ProductComplete;
}

export const ProductDetails = ({ product }: Props) => {

    const addToCart = async () => {
        // TODO = Carrinho de compras
    }


    return (
        <div className="flex-1">
            <div className="">
                <div className="text-xs text-gray-500 mb-2">Cod {product.id}</div>
                <div className="font-bold text-3xl mb-6">{product.label}</div>
                <div className="font-bold text-4xl text-blue-600 mb-2">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                </div>
                <div className="text-sm text-gray-500 mb-6"> Em até 12x no cartão</div>
                <div className="flex gap-2">
                    <button
                        onClick={addToCart}
                        className="flex-1 py-4 max-w-xs px-8 bg-blue-600 text-white border-0 rounded-sm cursor-pointer hover:opacity-90">Adicionar ao carrinho</button>
                    <div className="cursor-pointer size-14 max-w-sm border border-gray-200 flex justify-center items-center rounded-sm">
                        <Image
                            src="/assets/ui/heart-3-line.png"
                            alt="Favoritar produto"
                            width={24}
                            height={24}
                        />
                    </div>
                    <div className="cursor-pointer max-w-sm size-14 border border-gray-200 flex justify-center items-center rounded-sm">
                        <Image
                            src="/assets/ui/share-line.png"
                            alt="Compartilhar produto"
                            width={24}
                            height={24}
                            className=""
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}