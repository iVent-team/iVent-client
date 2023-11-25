import {
    Background1,
    Background2,
    Container,
    Callender,
    Options,
    Title,
    GlobalStyle,
    Button,
} from './style';
import { logoutAPI } from '@apis';
import { useNavigate } from 'react-router-dom';
const Main = () => {
    const navigate = useNavigate();
    const logout = async () => {
        try {
            await logoutAPI();
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <>
            <GlobalStyle />
            <Background1></Background1>
            <Background2>
                <Container>
                    <Callender>
                        <Title>iVent 스케줄</Title>
                    </Callender>
                    <Options>
                        <Button to={'/mypage'}>MY PAGE</Button>
                        <Button to={'/post'}>iVent 만들기</Button>
                        <Button onClick={logout}>로그아웃</Button>
                    </Options>
                </Container>
            </Background2>
        </>
    );
};

export default Main;
