import styled from "styled-components"
import { MdBusinessCenter as CompanyIcon } from "react-icons/md";

export default function User({ postId, title, body, name, company }) {

    return (
        <UserContainer>
            <div>
                <div>
                    <strong>{name}</strong>
                    <div>
                        <CompanyIcon />
                        <p>Empresa atual: {company}</p>
                    </div>
                </div>
                <img src={`https://picsum.photos/70/?random=${postId}`} />
            </div>
            <strong>{title}</strong>
            <p>{body}</p>
        </UserContainer>
    )
}

const UserContainer = styled.div`

    margin: 10px;
    padding: 10px;
    width: 300px;
    height: 240px;
    border: 1px solid ${props => props.theme.colors.background_tertiary};
    box-shadow: 2px 2px 4px 1px ${props => props.theme.colors.background_tertiary};
    background-color: ${props => props.theme.colors.background_primary};

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        img{
            border-radius: 50%;

        }

        div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;

            div{
                display: flex;
                align-items: center;
                flex-direction: row;
                font-size: 24px;
                margin-top: 10px;
                p{
                    font-size: 12px;
                    padding: 0 5px;
                }
            }
        }
    }

    strong{
        font-size: 15px;
    }

    p{
        font-size: 13px;
    }
`;