import { useState } from 'react';
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
