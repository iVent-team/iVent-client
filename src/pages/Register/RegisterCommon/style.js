import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Background = styled.div`
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -100px;
`;

export const Title = styled.h1`
    font-size: 50px;
    text-align: center;
`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Button = styled(NavLink)`
    margin: 120px;
    margin-top: 40px;
    padding: 20px;
    font-size: 40px;
    text-decoration: none;
    color: black;
    border-radius: 20px;
    background-color: #e2e2e2;

    &:hover {
        color: #black;
        background-color: transparent;
        border: 1px solid #ccc;
    }
`;
