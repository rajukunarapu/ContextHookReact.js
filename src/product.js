import { useContext } from "react"
import { context } from "./ContextHook"
export default function Product() {
    let data = useContext(context)
    return (
        <>
            <h1>This is Product Component</h1>
            {/* <h1>Name : </h1>
            <p>{name}</p>
            <h1>Price :</h1>
            <p>{price}</p> */}
            <h1>Mobile Name: </h1>
            <p>{data[0].name}</p>
            <h1>Mobile price: </h1>
            <p>{data[0].price}</p>
            <h1>Mobile Name: </h1>
            <p>{data[1].name}</p>
            <h1>Mobile price: </h1>
            <p>{data[1].price}</p>

        </>
    )
}