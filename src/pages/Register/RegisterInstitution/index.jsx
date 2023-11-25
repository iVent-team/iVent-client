import { useState } from 'react';
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
} from './style';

const RegisterInstitution = () => {
    const [affiliation, setAffiliation] = useState('');
    const [number, setNumber] = useState('');
    const [webLink, setWebLink] = useState('');
    const [isSchool, setIsSchool] = useState(false);
    const [isThird, setIsThird] = useState(false);

    const RegisterFunc = e => {
        e.preventDefault();
        if (!affiliation) {
            return alert('소속을 입력해주세요.');
        }
        if (!number) {
            return alert('연락처를 입력하세요.');
        }
        if (isSchool && isThird) {
            return alert(
                '학교 공식 계정과 외부 계정 중 하나만 선택 가능합니다.',
            );
        }
        if (!isSchool && !isThird) {
            return alert('학교 공식 계정과 외부 계정 중 하나를 선택해주세요.');
        }
    };

    return (
        <>
            <GlobalStyle />
            <Background>
                <Container>
                    <Title>기관/단체 회원가입</Title>
                    <Box onSubmit={RegisterFunc}>
                        <CheckboxContainer>
                            <CheckboxLabel>
                                <Checkbox
                                    type='checkbox'
                                    checked={isSchool}
                                    onChange={() => setIsSchool(!isSchool)}
                                />
                                학교 공식 계정
                            </CheckboxLabel>
                            <CheckboxLabel>
                                <Checkbox
                                    type='checkbox'
                                    checked={isThird}
                                    onChange={() => setIsThird(!isThird)}
                                />
                                외부 계정
                            </CheckboxLabel>
                        </CheckboxContainer>
                        <Text
                            type='text'
                            placeholder='소속*'
                            value={affiliation}
                            onChange={e => setAffiliation(e.target.value)}
                        />
                        <Text
                            type='text'
                            placeholder='연락처*'
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                        />
                        <Text
                            type='text'
                            placeholder='사이트 링크(옵션)'
                            value={webLink}
                            onChange={e => setWebLink(e.target.value)}
                        />
                        <Button type='submit'>회원가입</Button>
                    </Box>
                </Container>
            </Background>
        </>
    );
};

export default RegisterInstitution;
