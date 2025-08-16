import { ProductList } from "../product-list";
import { data } from "@/data";

export const MostViewedProducts = () => {
    // TODO: Fazer a requisição dos produtos
  
    return (
        <div className="mt-10">
            <h1 className="text-2xl text-center md:text-left">Produtos mais vistos</h1>
            <p className="text-gray-500 text-center md:text-left">Campeões de visualização da nossa loja</p>

            <div className="mt-9">
                <ProductList
                    list={data.products}
                />
            </div>
        </div>
    )
}