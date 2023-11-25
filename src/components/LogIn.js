import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Background = styled.div`
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Welcome = styled.h1`
    font-size: 40px;
`;

const Form = styled.form`
    width: 300px;
    padding: 20px;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

const Email = styled.input`
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 5px;
    padding-left: 10px;
    margin: 5px;
    font-size: 16px;
`;
const Password = styled.input`
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 5px;
    padding-left: 10px;
    margin: 5px;
    font-size: 16px;
`;

const Find = styled(NavLink)`
    color: #909090;
    margin: 5px 5px;
    text-decoration: none;

    &:hover {
        color: black;
    }
`;

const Button = styled.button`
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

const Register = styled(NavLink)`
    color: rgb(134, 38, 51);
    text-decoration: none;
    margin: 10px;
    text-align: center;

    &:hover {
        color: black;
    }
`;
const LogIn = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const LoginFunc = e => {
        e.preventDefault();
        if (!id) {
            return alert('이메일을 입력해주세요.');
        } else if (!password) {
            return alert('비밀번호를 입력해주세요.');
        }
    };

    return (
        <Background>
            <Container>
                <Welcome>iVent에 오신 걸 환영합니다!</Welcome>
                <Form onSubmit={LoginFunc}>
                    <Email
                        type='text'
                        placeholder='아이디'
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <Password
                        type='password'
                        placeholder='비밀번호'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Find to='/findpw'>*비밀번호 찾기</Find>
                    <Button type='submit'>로그인</Button>
                    <Register to='/registercommon'>회원가입</Register>
                </Form>
            </Container>
        </Background>
    );
};

export default LogIn;
