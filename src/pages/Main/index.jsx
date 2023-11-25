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

const Main = () => {
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
                        <Button>MY PAGE</Button>
                        <Button>iVent 만들기</Button>
                        <Button>로그아웃</Button>
                    </Options>
                </Container>
            </Background2>
        </>
    );
};

export default Main;
