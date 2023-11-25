import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import {
    GlobalStyle,
    Background,
    Container,
    Title,
    Button,
    Box,
    Text,
    Password,
    PasswordNotice,
} from './style';

const RegisterIndividual = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkPw, setCheckPw] = useState('');
    const [matched, setMatched] = useState(false);
    const [studentNumber, setStudentNumber] = useState('');
    const [isIndividual, setIsIndividual] = useState(true);
    const [website, setWebsite] = useState('');

    const CheckPw = e => {
        setCheckPw(e.target.value);
    };

    const hashPassword = password => {
        return CryptoJS.SHA512(password).toString(CryptoJS.enc.Hex);
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

    const RegisterFunc = async e => {
        e.preventDefault();
        if (!username) {
            return alert('아이디를 입력해주세요.');
        } else if (!password) {
            return alert('비밀번호를 입력해주세요.');
        } else if (!checkPw) {
            return alert('비밀번호를 확인해주세요.');
        } else if (!studentNumber) {
            return alert('학번을 입력해주세요.');
        }
        try {
            const hashedPassword = hashPassword(password).toUpperCase();

            const data = {
                username: username,
                password: hashedPassword,
                isIndividual: isIndividual,
                website: website,
                studentNumber: studentNumber,
            };
            console.log(data);

            // 서버의 엔드포인트에 POST 요청 보내기
            const response = await axios.post(
                'https://api.i-vent.net/api/v0/user/sign',
                data,
            );

            navigate('/registeraccepted');
        } catch (error) {
            console.error('Registration error:', error);
            console.log(error);
            if (error.response) {
                alert(`Registration failed: ${error.response.data.message}`);
            } else {
                alert('Registration failed. Please try again later.');
            }
        }
    };

    return (
        <>
            <GlobalStyle />
            <Background>
                <Container>
                    <Title>개인 회원가입</Title>
                    <Box onSubmit={RegisterFunc}>
                        <Text
                            type='id'
                            placeholder='아이디*'
                            value={username}
                            onChange={e => setUsername(e.target.value)}
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
                            ismatched={matched}
                        >
                            {matched
                                ? '확인되었습니다!'
                                : '비밀번호가 틀립니다.'}
                        </PasswordNotice>
                        <Text
                            type='text'
                            placeholder='학번*'
                            value={studentNumber}
                            onChange={e => setStudentNumber(e.target.value)}
                        />
                        <Text
                            type='text'
                            placeholder='사이트 링크(옵션)'
                            value={website}
                            onChange={e => setWebsite(e.target.value)}
                        />
                        <Button type='submit'>회원가입</Button>
                    </Box>
                </Container>
            </Background>
        </>
    );
};

export default RegisterIndividual;
