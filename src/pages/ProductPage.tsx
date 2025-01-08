import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocation } from "react-router";

function ProductPage() {

    const location = useLocation();
    const product = location.state;

    console.log(product);

    return (
        <div className="px-3 py-6 shadow-md w-8/12 mx-auto min-h-screen">
            {/*<div className="flex items-center text-red-brand text-13px leading-tight -tracking-0.39"><svg className="inline-block mr-1" width="10px" height="10px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path className="fill-current" d="m10 0 .1.1s1.2 3.6 3.7 6c2.5 2.6 6 3.8 6 3.8l.2.1-.1.1s-3.6 1.2-6.1 3.7c-2.5 2.5-3.7 6-3.7 6l-.1.2-.1-.1s-1.2-3.6-3.7-6C3.7 11.2.2 10 .2 10H0l.1-.1s3.6-1.2 6.1-3.7c2.5-2.5 3.7-6 3.7-6L10 0"></path></svg>stoc epuizat</div>*/}
            <p className="text-lg font-semibold">{product.title}</p>
            <div className="flex flex-row items-center justify-between h-[320px] py-6">
                <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card className="rounded-none border-0 shadow-none">
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <img src="./src/assets/logo2.png" className="w-[120px] h-[120px]" />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0" />
                    <CarouselNext className="right-0" />
                </Carousel>
                <div>
                    <p><strong>Autor:</strong></p>
                    <p><strong>Editura:</strong> Trei</p>
                    <p><strong>Anul:</strong> {product.from}</p>
                    <p><strong>Pagini:</strong> {product.page_num}</p>
                    <p><strong>ISBN:</strong> {product.from}</p>

                </div>
                <div className="shadow-md border-4 flex flex-col items-center justify-evenly h-full">
                    <div className="text-green-600 flex flex-row items-center text-[20px]">
                        <svg className="inline-block mr-1" width="17px" height="17px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path className="fill-current" d="m10 0 .1.1s1.2 3.6 3.7 6c2.5 2.6 6 3.8 6 3.8l.2.1-.1.1s-3.6 1.2-6.1 3.7c-2.5 2.5-3.7 6-3.7 6l-.1.2-.1-.1s-1.2-3.6-3.7-6C3.7 11.2.2 10 .2 10H0l.1-.1s3.6-1.2 6.1-3.7c2.5-2.5 3.7-6 3.7-6L10 0"></path></svg>
                        <span>in stoc</span>
                    </div>
                    <p className="text-blue-700 text-2xl font-bold">{product.price} lei</p>
                    <div className="flex flex-row items-center justify-center gap-1">
                        <button className="w-1/6 border-[1px] rounded-3xl text-center py-1">-</button>
                        <input type="text" className="w-2/6 border-4 text-center"></input>
                        <button className="w-1/6 border-[1px] rounded-3xl p-0 text-center py-1">+</button>
                    </div>
                    <button className="bg-blue-700 text-white text-sm py-3 rounded-tr rounded-bl hover:bg-blue-900 w-full">Adauga in cos</button>
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Descriere</h2>
                <p>{product.from.price}</p>
            </div>
        </div>
    )
}

export default ProductPage;