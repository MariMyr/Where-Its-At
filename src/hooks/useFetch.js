import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
        .then(response => setData([...response.data.events]))
        .catch(error => setIsError(true))
        .finally(() => setIsLoading(false));
    }, [url]);

    return { data, isLoading, isError }
}

export default useFetch;