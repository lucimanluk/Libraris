import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function ProductPage() {
    const num: number = 5;
    const [backendData, setBackendData] = useState(0);

    useEffect(() => {
        fetch("http://localhost:3000", { mode: 'cors' }).then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data);
            }
        )
    }, []);
    return (
        <div className="px-3 py-6 shadow-md w-8/12 mx-auto min-h-screen">
            <p className="text-lg font-semibold">Why the World Isn't Fair</p>
            <div className="flex flex-row items-center justify-between h-[320px] py-6">
                <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {Array.from({ length: num }).map((_, index) => (
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
                    <p><strong>Autor:</strong> Shefali Tsabary, Remme Jain</p>
                    <p><strong>Editura:</strong> Trei</p>
                    <p><strong>Anul:</strong> 2024</p>
                    <p><strong>Pagini:</strong> 328</p>
                    <p><strong>ISBN:</strong> 9786069787359</p>

                </div>
                <div className="shadow-md border-4 flex flex-col items-center justify-evenly h-full">
                    <div className="text-green-600 flex flex-row items-center text-[20px]">
                        <svg className="inline-block mr-1" width="17px" height="17px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path className="fill-current" d="m10 0 .1.1s1.2 3.6 3.7 6c2.5 2.6 6 3.8 6 3.8l.2.1-.1.1s-3.6 1.2-6.1 3.7c-2.5 2.5-3.7 6-3.7 6l-.1.2-.1-.1s-1.2-3.6-3.7-6C3.7 11.2.2 10 .2 10H0l.1-.1s3.6-1.2 6.1-3.7c2.5-2.5 3.7-6 3.7-6L10 0"></path></svg>
                        <span>in stoc</span>
                    </div>
                    <p className="text-blue-700 text-2xl font-bold">562 lei</p>
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
                <p>Povestea modului în care rețelele informaționale ne-au făcut și ne-au desfăcut lumea, de la autorul volumului Sapiens, aflat pe primul loc în topul bestsellerelor Sunday Times.

                    În ultimii 100.000 de ani, noi, sapiens, am acumulat o putere enormă. Dar, în ciuda tuturor descoperirilor, invențiilor și cuceririlor noastre, ne aflăm acum într-o criză existențială. Lumea este în pragul colapsului ecologic. Tensiunile politice sunt în creștere. Informațiile eronate abundă. Iar noi suntem mult prea grăbiți să intrăm în epoca inteligenței artificiale – o rețea informațională străină de umanitate care amenință să ne anihileze. Cu toate realizările noastre, de ce suntem oare atât de autodistructivi?

                    Nexus privește din perspectiva amplă a istoriei omenirii pentru a descoperi cum ne-a adus fluxul de informații în acest punct. Purtându-ne din epoca de piatră, prin alcătuirea Bibliei, inventarea tiparului, apariția mass-mediei și recenta reactivare a populismului, Yuval Noah Harari ne îndeamnă să analizăm relația complexă dintre informații și adevăr, dintre birocrație și mitologie, dintre înțelepciune și putere. El examinează modul în care sisteme precum Imperiul Roman, Biserica Catolică și Uniunea Sovietică s-au folosit de informații pentru a-și atinge scopurile, fie ele bune sau rele. Și abordează alegerile imperative cu care ne confruntăm în contextul în care inteligența nonumană ne amenință însăși existența.

                    Informațiile nu reprezintă materia primă a adevărului, nici nu sunt o simplă armă. Nexus explorează calea de mijloc dintre aceste extreme care încă ne dă o speranță, iar astfel, redescoperă umanitatea noastră comună.

                    Poveștile ne-au adus laolaltă.

                    Cărțile ne-au răspândit ideile – și mitologiile.

                    Internetul a promis cunoaștere infinită.

                    Algoritmul ne-a aflat secretele – iar apoi ne-a asmuțit pe unii împotriva altora.

                    IA ce va face?

                    Nexus este povestea palpitantă a modului cum am ajuns la acest moment și a alegerilor urgente pe care trebuie să le facem acum ca să supraviețuim – și să prosperăm.

                    Yuval Noah HARARI este istoric și filosof, considerat unul dintre cei mai influenți intelectuali activi astăzi. Născut în Israel în 1976, a obținut doctoratul în istorie la University of Oxford și este profesor de istorie universală în cadrul Departamentului de Istorie al Universității Ebraice din Ierusalim și distinguished research fellow la Centre for the Study of Existential Risk din cadrul University of Cambridge. Este cofondator al companiei de impact social Sapienship, axată pe educație și storytelling, alături de soțul său, Itzik Yahav. Cartea sa Sapiens, publicată inițial în Israel în 2011, a fost tradusă în peste șaizeci de limbi. Timp de nouăzeci și șase de săptămâni s-a aflat în topul bestsellerelor Sunday Times și a fost de asemenea în topul bestsellerelor New York Times. De același autor, la Editura Polirom au apărut Sapiens. Scurtă istorie a omenirii (2017), Homo deus. Scurtă istorie a viitorului (2018), 21 de lecții pentru secolul XXI (2018), Sapiens. O istorie grafică, vol. I: Nașterea omenirii (2020) și vol. II: Stâlpii civilizației (2021) și Suntem de neoprit, vol. I: Cum am luat în stăpânire lumea (2022) și vol. II: De ce nu este dreaptă lumea (2023).</p>
            </div>
        </div>
    )
}

export default ProductPage;