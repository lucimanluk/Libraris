import Product from "@/components/Product";
import { useParams } from "react-router";
import { useEffect, useState } from 'react';

function ProductList() {


    interface Product {
        id: string;
        ISBN?: string | null;
        title: string;
        author?: Author;
        price: number;
        sale?: Sale;
        available: number;
        publishedOn?: Date | null;
        images: string[];
        description: string;
        page_num: number;
        type: string;
    }

    interface Sale {
        percent: number;
    }

    interface Author {
        lastName: string;
        firstName: string;
    }

    const [backendData, setBackendData] = useState<Product[]>([]);
    const { type } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:3000/items/type/${type}`, { mode: 'cors' });
                const json = await response.json();
                setBackendData(json);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, [type]);

    const category = type ? type.charAt(0) + type?.substring(1).toLowerCase() : null;

    return (

        <div className="px-3 pt-2 pb-6 shadow-md w-7/12 mx-auto min-h-screen flex flex-col">
            <p className="m-2 text-lg font-bold">{category}</p>
            <div className=" grid grid-cols-4 gap-y-3 place-items-center">
                {backendData.map((product, index) => {
                    return (
                        <Product
                            key={index}
                            id={product.id}
                            price={product.price}
                            title={product.title}
                            page_num={product.page_num}
                            available={product.available}
                            sale={product.sale?.percent}
                            type={product.type}
                            author={`${product.author?.firstName}  ${product.author?.lastName}`}>
                        </Product>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList;