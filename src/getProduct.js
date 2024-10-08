import { useState, useEffect } from 'react'

function useGetProduct(URL) {
    let [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        let res = await fetch(URL)
        let apidata = await res.json()
        setData(apidata)
    }
    return data
}

export default useGetProduct