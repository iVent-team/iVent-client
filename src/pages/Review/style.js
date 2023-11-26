import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    margin: 0; /* Reset default margin */
    padding: 0; /* Reset default padding */
  }
`;

export const Wrap = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: -100px;
`;

export const RatingText = styled.div`
    color: black;
    font-size: 40px;
    margin: 30px;
`;

export const Stars = styled.div`
    display: flex;
    padding-top: 5px;

    & svg {
        color: gray;
        cursor: pointer;
    }

    :hover svg {
        color: #fcc419;
    }

    & svg:hover ~ svg {
        color: gray;
    }

    .yellowStar {
        color: #fcc419;
    }
`;

export const Button = styled.button`
    margin-top: 40px;
    font-size: 25px;
    background-color: transparent;
    border-radius: 10px;
    width: 150px;
    padding: 5px 0;
    font-family: 'Pretendard-Bold', sans-serif;

    &:hover {
        background-color: #ffc5c5;
        border: 1px solid #ccc;
        color: #868296;
    }
`;

export const Skip = styled(NavLink)`
    font-size: 20px;
    text-decoration: none;
    color: #868296;
    margin-top: 10px;
`;
