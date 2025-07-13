// Creating Custom Hooks : In custom hooks we can return an array or the data based on the 
// function we want to perform

import { useEffect, useState } from "react";

function useCurrencyConverter(currency){

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data)
    }, [currency]);

    console.log(data);
    return data;
}

export default useCurrencyConverter;