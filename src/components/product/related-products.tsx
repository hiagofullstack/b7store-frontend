import { data } from "@/data"
import { ProductList } from "../product-list"

export const RelatedProducts = () => {
    return (
        <div className="mt-10">
            
            <h3 className="text-2xl">Você também vai gostar</h3>

            <div className="mt-9">
               <ProductList list={data.products} />
            

            </div>
        </div>
    )
}