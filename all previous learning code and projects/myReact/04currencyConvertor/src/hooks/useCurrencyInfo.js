import React, { useState, useEffect } from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        // fetch(`https://v6.exchangerate-api.com/v6/c0d1d5b9076772f942927e48/latest/${currency}`)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((data) => { setData(data)
                console.log(data)
             })

    }, [currency])

    return data
}

export default useCurrencyInfo
