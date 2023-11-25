import { Background, Container, Title, Button, ButtonContainer } from './style';
const RegisterCommon = () => {
    return (
        <Background>
            <Container>
                <Title>iVent 사용 목적을 알려주세요!</Title>
                <ButtonContainer>
                    <Button to='/registerinstitution'>기관/단체</Button>
                    <Button to='/registerindividual'>개인</Button>
                </ButtonContainer>
            </Container>
        </Background>
    );
};

export default RegisterCommon;
