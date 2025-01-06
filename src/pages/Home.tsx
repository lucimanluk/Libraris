import Product from "@/components/Product";
import { useState, useEffect } from 'react';

function Home() {

    interface Product {
        id: string;
        ISBN?: string | null;
        title: string;
        price: number;
        publishedOn?: Date | null;
        images: string[];
        description: string;
        page_num: number;
    }

    const [backendData, setBackendData] = useState<Product>();

    useEffect(() => {
        fetch("http://localhost:3000/api", { mode: "cors" }).then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, []);

    return (
        <div className="px-3 py-6 shadow-md w-8/12 mx-auto min-h-screen">
            {Array.from({ length: 7 }, (_, index) => (
                <Product key={index} price={backendData?.price} title={backendData?.title} />
            ))}
        </div>
    )
}

export default Home;