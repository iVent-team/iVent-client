import styled from 'styled-components';

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
`;
const Title = styled.h1`
    font-size: 40px;
`;

const About = () => {
    return (
        <Background>
            <Container>
                <Title></Title>
            </Container>
        </Background>
    );
};

export default About;
