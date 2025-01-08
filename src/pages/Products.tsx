import { useParams } from "react-router";

function ProductList() {
    const { type } = useParams();
    console.log(type);
    return (

        <>
            Hallo
        </>
    )
}

export default ProductList;