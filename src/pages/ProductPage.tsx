import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function ProductPage() {
    const num: number = 5;

    return (
        <div className="flex flex-row align-center justify-center">
            <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {Array.from({ length: num }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="rounded-none border-0 shadow-none">
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default ProductPage;