import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 40px;
`;

const SuccessfulIvents = () => {
    return (
        <Container>
            <Title>#iVents #성공적</Title>
        </Container>
    );
};

export default SuccessfulIvents;
