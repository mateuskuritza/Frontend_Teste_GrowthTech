import styled from "styled-components"
import useGetPosts from "../../requests/useGetPosts";

import Loader from "react-loader-spinner";
import Post from "./Post";
import { useEffect } from "react";

export default function Posts() {

    const { data, loading, error, fetchData } = useGetPosts();

    useEffect(() => {
        fetchData();
    }, [])

    if (error) return <strong>Por favor, tente novamente!</strong>;

    return (
        <PostsContainer>
            {loading ? <Loader type="Puff" color={"black"} height={300} width={300} timeout={3000} /> : data?.map(p => <Post key={p.postId} {...p} />)}
        </PostsContainer>
    )
}

const PostsContainer = styled.div`
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
`;