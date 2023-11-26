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
`;

export const Welcome = styled.h1`
    font-size: 40px;
`;

export const Form = styled.form`
    width: 300px;
    padding: 20px;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export const Email = styled.input`
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 5px;
    padding-left: 10px;
    margin: 5px;
    font-size: 16px;
`;
export const Password = styled.input`
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 5px;
    padding-left: 10px;
    margin: 5px;
    font-size: 16px;
`;

export const Find = styled(NavLink)`
    color: #909090;
    margin: 5px 5px;
    text-decoration: none;

    &:hover {
        color: black;
    }
`;

export const Button = styled.button`
    height: 40px;
    border: none;
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
    font-size: 16px;
    text-align: center;
    background-color: rgb(134, 38, 51);
    color: white;
    font-family: 'Pretendard-SemiBold', sans-serif;

    &:hover {
        color: black;
        background-color: #e2e2e2;
        border: 1px solid #ccc;
    }
`;

export const Register = styled(NavLink)`
    color: rgb(134, 38, 51);
    text-decoration: none;
    margin: 10px;
    text-align: center;

    &:hover {
        color: black;
    }
`;
