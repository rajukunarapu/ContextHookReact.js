import './App.css';
import useGetProduct from './getProduct';
import Home from './Home.js'
import Ex from './ContextHook.js'

function App() {
  let p = {
    name: "Realme 10 pro",
    price: "20,000"
  }
  let product = useGetProduct("https://fakestoreapi.com/products/1")

  if (product.length === 0) {
    return (
      <>
        <h1>Fetching the data ....</h1>
      </>
    )
  }

  return (
    <>
      <h1>Object Keys : </h1>
      <p>{Object.keys(product)}</p>
      <h1>Product Title:</h1>
      <p>{product.title}</p>
      {/* <Home {...p}></Home> */}
      <Ex></Ex>
    </>
  )
}

export default App;
