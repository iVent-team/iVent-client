import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import CryptoJS from 'crypto-js';

import {
    GlobalStyle,
    Background,
    Container,
    Title,
    Box,
    CheckboxContainer,
    CheckboxLabel,
    Checkbox,
    Text,
    Button,
    ID,
    Password,
    PasswordNotice,
} from './style';
import { useNavigate } from 'react-router-dom';
const RegisterInstitution = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [isOfficial, setIsOfficial] = useState(false);
    const [isIndividual, setIsIndividual] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkPw, setCheckPw] = useState('');
    const [matched, setMatched] = useState(false);

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
        }
        if (!password) {
            return alert('비밀번호를 입력해주세요.');
        }
        if (!checkPw) {
            return alert('비밀번호를 확인해주세요.');
        }
        if (!name) {
            return alert('소속을 입력해주세요.');
        }
        if (!phone) {
            return alert('연락처를 입력하세요.');
        }
        if (isOfficial && isIndividual) {
            return alert(
                '학교 공식 계정과 외부 계정 중 하나만 선택 가능합니다.',
            );
        }
        if (!isOfficial && !isIndividual) {
            return alert('학교 공식 계정과 외부 계정 중 하나를 선택해주세요.');
        }
        try {
            const hashedPassword = hashPassword(password).toUpperCase();

            const data = {
                username: username,
                password: hashedPassword,
                isIndividual: isIndividual,
                phone: phone,
                website: website,
                name: name,
                isOfficial: isOfficial,
            };
            console.log(data);

            // 서버의 엔드포인트에 POST 요청 보내기
            const response = await axios.post(
                'https://api.i-vent.net/api/v0/user/sign',
                data,
            );

            console.log(response.data);

            navigate('/registeraccepted');
        } catch (error) {
            console.error('Registration error:', error);
            console.log(error.response);
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
                    <Title>기관/단체 회원가입</Title>
                    <Box onSubmit={RegisterFunc}>
                        <ID
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
                        <CheckboxContainer>
                            <CheckboxLabel>
                                <Checkbox
                                    type='checkbox'
                                    checked={isOfficial}
                                    onChange={() => setIsOfficial(!isOfficial)}
                                />
                                학교 공식 계정
                            </CheckboxLabel>
                            <CheckboxLabel>
                                <Checkbox type='checkbox' />
                                외부 계정
                            </CheckboxLabel>
                        </CheckboxContainer>
                        <Text
                            type='text'
                            placeholder='기관/단체명*'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <Text
                            type='text'
                            placeholder='연락처*'
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
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

export default RegisterInstitution;
