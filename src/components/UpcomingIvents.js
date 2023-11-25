import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 40px;
`;

const UpcomingIvents = () => {
    return (
        <Container>
            <Title>#인기 #iVents</Title>
        </Container>
    );
};

export default UpcomingIvents;
