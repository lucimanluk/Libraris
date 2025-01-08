import { Link } from "react-router";

function Product({
    price,
    title,
    page_num,
    available
}: {
    price: number
    title: string
    page_num: number
    available: number
}) {


    return (
        <div className="w-[200px] border-[1px] rounded-md flex flex-col gap-4 p-3">
            <Link to="/productpage" state={{ from: price, title, page_num }}>
                <img src="./src/assets/logo2.png" className="rounded-xl" />
            </Link >
            <div>
                <div className="text-green-600 flex flex-row items-center text-[13px]">
                    <svg className="inline-block mr-1" width="10px" height="10px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path className="fill-current" d="m10 0 .1.1s1.2 3.6 3.7 6c2.5 2.6 6 3.8 6 3.8l.2.1-.1.1s-3.6 1.2-6.1 3.7c-2.5 2.5-3.7 6-3.7 6l-.1.2-.1-.1s-1.2-3.6-3.7-6C3.7 11.2.2 10 .2 10H0l.1-.1s3.6-1.2 6.1-3.7c2.5-2.5 3.7-6 3.7-6L10 0"></path></svg>
                    {available ? <span>In stoc</span> : <span>stoc epuizat</span>}
                </div>
                <p className="text-md font-medium">{title}<br />by Tolkien</p>
                <p className="text-blue-700 text-2xl font-bold">{price} lei</p>
            </div>
            <button className="bg-blue-700 text-white text-sm py-[6px] px-3 rounded-tr rounded-bl hover:bg-blue-900">Adauga in cos</button>
        </div >
    )
}

export default Product;