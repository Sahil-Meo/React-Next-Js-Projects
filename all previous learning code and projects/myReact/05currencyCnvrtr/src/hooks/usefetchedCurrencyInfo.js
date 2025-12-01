import React, { useEffect, useState } from 'react'

function usefetchedCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res)
                console.log(res)

            })

    }, [currency])

    return data;

}

export default usefetchedCurrencyInfo
