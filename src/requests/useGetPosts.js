import axios from "axios";
import { useState } from "react";

export default function useGetPosts() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    function fetchData() {
        setLoading(true);
        axios.get("http://localhost:4000/posts")
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
