import Product from '@/components/Product';
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function Home() {

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
    const [backendData1, setBackendData1] = useState<Product[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/sales", { mode: "cors" }).then(
            response => response.json()
        ).then(
            data => setBackendData(data)
        )
        fetch("http://localhost:3000/best_selling", { mode: "cors" }).then(
            response => response.json()
        ).then(
            data => setBackendData1(data)
        )
    }, []);

    return (
        <div className="px-3 py-6 shadow-md w-8/12 mx-auto min-h-screen">
            <div className='flex flex-col'>
                <p className='m-2 text-lg font-bold'>Items on sale</p>
                <Carousel>
                    <CarouselContent className="-ml-1">
                        {backendData.map((product, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <Product
                                                key={index}
                                                id={product.id}
                                                price={product.price}
                                                title={product.title}
                                                page_num={product.page_num}
                                                available={product.available}
                                                sale={product.sale?.percent}
                                                type={product.type}
                                                author={`${product.author?.firstName}  ${product.author?.lastName}`}
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-2" />
                    <CarouselNext className="-right-2" />
                </Carousel>
            </div>
            <div className='flex flex-col'>
                <p className='m-2 text-lg font-bold'>Best sellers</p>
                <Carousel>
                    <CarouselContent className="-ml-1">
                        {backendData1.map((product, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <Product
                                                key={index}
                                                id={product.id}
                                                price={product.price}
                                                title={product.title}
                                                page_num={product.page_num}
                                                available={product.available}
                                                sale={product.sale?.percent}
                                                type={product.type}
                                                author={`${product.author?.firstName}  ${product.author?.lastName}`}
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-2" />
                    <CarouselNext className="-right-2" />
                </Carousel>
            </div>
        </div >
    )
}

export default Home;