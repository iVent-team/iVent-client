import { PRIMARY } from '@utility/COLORS';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; /* Reset default margin */
    padding: 0; /* Reset default padding */
    overflow: hidden;
  }
`;

export const Background1 = styled.div`
    height: 40vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;

    // background-color: #ffc5c5;
`;

export const Background2 = styled.div`
    height: 50vh;
    width: 100vw;
    display: block;
    display-items: center;
    background-color: #eee;
`;

export const Container = styled.div`
    width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

export const Callender = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
`;

export const Title = styled.h1`
    font-size: 40px;
    margin-left: 200px;
`;

export const Button = styled(NavLink)`
    font-size: 25px;
    color: black;
    text-decoration: none;
    border: 1px solid #ccc;
    border-radius: 40px;
    margin-right: 200px;
    text-align: center;
    padding: 15px;
    margin-top: 10px;

    &: hover {
        background-color: white;
        color: rgb(134, 38, 51);
    }
`;
