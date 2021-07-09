import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Button({ content, to }) {
    return (
        <Link to={to}>
            <ButtonContainer>
                <div className="top"><span>{content}</span></div>
                <div className="bottom"><span>{content}</span></div>
            </ButtonContainer>
        </Link>
    )
}

const ButtonContainer = styled.button`
    padding: 1rem 2.2rem;
    border: 2px solid ${props => props.theme.colors.background_primary};
    border-radius: 0rem;
    color: ${props => props.theme.colors.background_primary};
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.3rem;
    position: relative;
    background-color: transparent;
    transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
    transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 

    .top  {
    position: relative;
    height: 6px;
    overflow: hidden;
    top: 0;
    transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040);
    transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040);
    transition-delay:0.35s;
    }

    .bottom  {
    position: relative;
    height: 6px;
    overflow: hidden;
    bottom: 0;
    transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040);
    transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040);
    transition-delay:0.35s;
    }

    .bottom span {
    top: -6px;
    position: absolute;
    left: 0;
    }

    :hover .top {
    top: -5px;
    transition-delay:0.35s; 
    }

    :hover .bottom {
    bottom: -5px;  
    transition-delay:0.35s; 
    }

    :hover, :focus, :active {
    margin-left: 10px;
    }

    :before{
    content: '';
    height: 1px;
    width: 30px;
    background-color: #ffffff;
    position: absolute;
    margin-top: 6px;
    right: -10px;
    transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225);
    transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225);
    }
    :hover:before{
    width: 130%;
    }
`;


