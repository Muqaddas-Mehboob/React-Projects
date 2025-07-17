import { useState, useEffect } from "react";

function useWeatherInfo(city){

    const [data, setdata] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    
    useEffect(() => {

        // What does AbortController do?
        // It cancels the previous request when a new one starts.
        // So only the latest city request will give you the result — not any old/stale ones.

        const controller = new AbortController();
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e45e162455a79971d5ff2349697a17ea&units=metric`;
        setLoading(true);
        setError(null);

        if(!city) return;

        fetch(URL, {signal : controller.signal})
        .then((res) => {
            if(!res.ok) throw new Error("City not found");
            return res.json();
        })
        .then((data) => setdata(data))
        .catch((err) => {if (err.name !== "AbortError") setError(err.message);})
        .finally(() => setLoading(false));


        return () => controller.abort();

    }, [city])

    return {data, loading, error};
}

export default useWeatherInfo;