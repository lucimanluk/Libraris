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
        price: number;
        available: number;
        publishedOn?: Date | null;
        images: string[];
        description: string;
        page_num: number;
    }

    const [backendData, setBackendData] = useState<Product>();

    useEffect(() => {
        fetch("http://localhost:3000", { mode: "cors" }).then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, []);

    return (
        <div className="px-3 py-6 shadow-md w-8/12 mx-auto min-h-screen">
            {/*{Array.from({ length: 7 }, (_, index) => (
                <Product key={index} price={backendData?.price} />
            ))}*/}
            <Carousel>
                <CarouselContent className="-ml-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <Product key={index} price={backendData?.price ?? 0} title={backendData?.title ?? ''} page_num={backendData?.page_num ?? 0} available={backendData?.available ?? 0} />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='-left-2' />
                <CarouselNext className='-right-2' />
            </Carousel>
        </div >
    )
}

export default Home;