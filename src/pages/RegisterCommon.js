import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
    margin-top: -100px;
`;

const Title = styled.h1`
    font-size: 50px;
    text-align: center;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Button = styled(NavLink)`
    margin: 120px;
    margin-top: 40px;
    padding: 20px;
    font-size: 40px;
    text-decoration: none;
    color: black;
    border-radius: 20px;
    background-color: #e2e2e2;

    &:hover {
        color: #black;
        background-color: transparent;
        border: 1px solid #ccc;
    }
`;

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
