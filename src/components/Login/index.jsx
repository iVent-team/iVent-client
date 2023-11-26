import { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import {
    Background,
    Container,
    Welcome,
    Form,
    Email,
    Password,
    Find,
    Button,
    Register,
} from './style';

export const LogIn = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const LoginFunc = async e => {
        e.preventDefault();
        if (!id) {
            return alert('이메일을 입력해주세요.');
        } else if (!password) {
            return alert('비밀번호를 입력해주세요.');
        }
        try {
            const hashedPassword = CryptoJS.SHA512(password)
                .toString(CryptoJS.enc.Hex)
                .toUpperCase();
            console.log(hashedPassword);
            const data = {
                username: id,
                password: hashedPassword,
            };

            const response = await axios.put(
                'https://api.i-vent.net/api/v0/user/sign',
                data,
            );

            const token = response.data.token;

            localStorage.setItem('access', token.access);
            localStorage.setItem('refresh', token.refresh);

            console.log(response.data);
            navigate('/main');
        } catch (error) {
            console.error('Login error:', error);

            if (error.response) {
                alert(`Login failed: ${error.response.data.message}`);
            } else {
                alert('Login failed. Please try again later.');
            }
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('access');
        if (token) {
            navigate('/main');
        } else {
            navigate('/');
        }
    }, [navigate]);
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
