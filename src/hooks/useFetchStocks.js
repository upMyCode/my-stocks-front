/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"

const useFetchStocks = (loading, data, setStocks) => {
  useEffect(() => {
    !loading && data && setStocks(data.getAllStocks)
  }, [data])
}

export default useFetchStocks