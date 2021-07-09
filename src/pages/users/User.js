import styled from "styled-components"
import { AiOutlineMail as EmailIcon } from "react-icons/ai";
import { MdGpsFixed as AddressIcon, MdPhoneAndroid as PhoneIcon, MdBusinessCenter as CompanyIcon } from "react-icons/md";
import { CgWebsite as WebsiteIcon } from "react-icons/cg";

export default function User({ id, name, email, address, phone, website, company }) {

    return (
        <UserContainer>
            <strong>{name}</strong>
            <img src={`https://picsum.photos/100/?random=${id}`} />
            <div>
                <EmailIcon />
                <p>Email: {email}</p>
            </div>
            <div>
                <AddressIcon />
                <p>Cidade: {address.city}</p>
            </div>
            <div>
                <PhoneIcon />
                <p>Telefone: {phone}</p>
            </div>
            <div>
                <WebsiteIcon />
                <p>Website: {website}</p>
            </div>
            <div>
                <CompanyIcon />
                <p>Empresa atual: {company.name}</p>
            </div>
        </UserContainer>
    )
}

const UserContainer = styled.div`

    margin: 20px;
    padding: 15px 10px;
    width: 220px;
    height: 300px;
    border: 1px solid ${props => props.theme.colors.background_tertiary};
    box-shadow: 2px 2px 4px 1px ${props => props.theme.colors.background_tertiary};
    background-color: ${props => props.theme.colors.background_primary};

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    strong{
        font-size: 16px;
    }

    img{
        border-radius: 50%;
    }

    div{
        font-size: 20px;
        width: 100%;
        color: black;
        display: flex;
        align-items: center;

        p{
            font-size: 13px;
            margin-left: 5px;
        }
    }
`;