import { useState, useEffect } from 'react';
import {
    GlobalStyle,
    Background,
    Container,
    Title,
    Box,
    Email,
    Password,
    PasswordNotice,
    Name,
    Button,
} from './style';
const RegisterInstitution = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPw, setCheckPw] = useState('');
    const [name, setName] = useState('');
    const [matched, setMatched] = useState(false);

    const CheckPw = e => {
        setCheckPw(e.target.value);
    };

    useEffect(() => {
        if (checkPw.length > 0) {
            if (password !== checkPw) {
                setMatched(false);
            } else {
                setMatched(true);
            }
        }
    }, [password, checkPw, matched]);

    const RegisterFunc = e => {
        e.preventDefault();
        if (!email) {
            return alert('이메일을 입력해주세요.');
        } else if (!password) {
            return alert('비밀번호를 입력해주세요.');
        } else if (!checkPw) {
            return alert('비밀번호를 확인해주세요.');
        } else if (!name) {
            return alert('닉네임을 입력해주세요.');
        } else if (password !== checkPw) {
            return alert('비밀번호를 다시 확인해주세요.');
        }
    };

    return (
        <>
            <GlobalStyle />
            <Background>
                <Container>
                    <Title>기관/단체 회원가입</Title>
                    <Box onSubmit={RegisterFunc}>
                        <Email
                            type='email'
                            placeholder='(학교) 이메일*'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Password
                            type='password'
                            placeholder='비밀번호*'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Password
                            type='password'
                            placeholder='비밀번호 확인*'
                            value={checkPw}
                            onChange={CheckPw}
                        />
                        <PasswordNotice
                            show={checkPw !== ''}
                            isMatched={matched}
                        >
                            {matched
                                ? '확인되었습니다!'
                                : '비밀번호가 틀립니다.'}
                        </PasswordNotice>
                        <Name
                            type='text'
                            placeholder='닉네임*'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <Button type='submit'>회원가입</Button>
                    </Box>
                </Container>
            </Background>
        </>
    );
};

export default RegisterInstitution;
