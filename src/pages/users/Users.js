import styled from "styled-components"
import useGetUsers from "../../requests/useGetUsers";

import Loader from "react-loader-spinner";
import User from "./User";
import { useEffect } from "react";

export default function Users() {

    const { data, loading, error, fetchData } = useGetUsers();

    useEffect(() => {
        fetchData();
    }, [])

    if (error) return <strong>Por favor, tente novamente!</strong>;

    return (
        <UsersContainer>
            {loading ? <Loader type="Puff" color={"black"} height={300} width={300} timeout={3000} /> : data?.map(u => <User key={u.id} {...u} />)}
        </UsersContainer>
    )
}

const UsersContainer = styled.div`
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
`;