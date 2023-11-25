import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    margin: 0; /* Reset default margin */
    padding: 0; /* Reset default padding */
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
    width: 300px;
    padding: 20px;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Email = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    font-size: 16px;
    box-sizing: border-box;
`;

export const Password = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    font-size: 16px;
    box-sizing: border-box;
`;

export const PasswordNotice = styled.div`
    display: ${props => (props.show ? 'block' : 'none')};
    color: ${props => (props.isMatched ? 'green' : 'red')};
    margin-bottom: 5px;
`;

export const Name = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    font-size: 16px;
    box-sizing: border-box;
`;

export const Button = styled.button`
    width: 300px;
    height: 40px;
    border: none;
    border-radius: 10px;
    padding: 5px;
    margin: 10px 0;
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
