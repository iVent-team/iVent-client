import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; /* Reset default margin */
    padding: 0; /* Reset default padding */
    overflow: hidden;
  }
`;

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    margin-top: -150px;
`;

export const Title = styled.h1`
    font-size: 40px;
    margin: 20px auto;
`;

export const Box = styled.form`
    width: 600px;
    padding: 20px;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Text = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    font-size: 16px;
    box-sizing: border-box;
`;

export const TextArea = styled.input`
    width: 100%;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    font-size: 18px;
    box-sizing: border-box;
    resize: vertical;
    font-family: 'Pretendard-Light', sans-serif;
`;

export const DateTopContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const DateContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 20px;
`;

export const P = styled.p`
    font-size: 18px;
    margin-right: 15px;
`;

export const FileContainer = styled.div`
    display: flex;
    width: 100%;
`;

export const Button = styled.button`
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 10px;
    padding: 5px;
    margin: 25px 0;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    background-color: rgb(134, 38, 51);
    color: white;
    font-family: 'Pretendard-SemiBold', sans-serif;

    &:hover {
        color: black;
        background-color: #e2e2e2;
        border: 1px solid #ccc;
    }
`;
