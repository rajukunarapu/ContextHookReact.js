import { createContext } from "react"
import Home from "./Home"
export let context = createContext()
export default function Ex() {
    let productDetails = [
        {
            name: "Redmi 13 pro plus",
            price: "29,000"
        },
        {
            name: "Realme 10 Pro plus",
            price: "20,000"
        }
    ]

    return (
        <>
            <h1>This is an Create Context Component</h1>
            <context.Provider value={productDetails}>
                <Home></Home>
            </context.Provider>
        </>
    )
}
