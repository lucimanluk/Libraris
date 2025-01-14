import { useParams } from "react-router";
import { useEffect, useState } from 'react';
function ProductList() {
    interface Product {
        id: string;
        ISBN?: string | null;
        title: string;
        price: number;
        available: number;
        publishedOn?: Date | null;
        images: string[];
        description: string;
        page_num: number;
    }

    const [backendData, setBackendData] = useState<Product>();
    const { type } = useParams();
    console.log(type);

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
    }, []);

    console.log(backendData);

    return (

        <>
            Hallo
        </>
    )
}

export default ProductList;