import styled from "styled-components"
import Button from "./Button"

export default function NavBar() {

    return (
        <NavBarContainer>
            <Title>Monitor de usuários e posts</Title>
            <Buttons>
                <Button content="Usuários" to="/users" />
                <Button content="Posts" to="/posts" />
            </Buttons>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
    background-color: ${props => props.theme.colors.background_tertiary};
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;

    @media (max-width: 400px){
        flex-direction: column;
        height: 250px;
    }
`;

const Title = styled.h1`
    font-family: 'Permanent Marker', cursive;
    font-size: clamp(1.8em , 1em + 1vw , 35px);
    color: ${props => props.theme.colors.background_primary};
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
`;