import axios from "axios";
import { useState } from "react";

export default function useGetUsers() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    const url = process.env.REACT_APP_API_BASE_URL || "http://localhost:4000";

    function fetchData() {
        setLoading(true);
        axios.get(url + "/users")
            .then(onSuccess)
            .catch(onError);
    }

    const onSuccess = (res) => {
        setError(false);
        setLoading(false);
        setData(res.data);
    };

    const onError = (error) => {
        setLoading(false);
        console.log(error);
        setError(true);
    };

    return { loading, error, data, fetchData };
}
