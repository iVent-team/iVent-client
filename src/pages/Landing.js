import styled from 'styled-components';
import LogIn from '../components/LogIn';
import About from '../components/About';
import SuccessfulIvents from '../components/Successfulvents';
import UpcomingIvents from '../components/UpcomingIvents';

const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Container1 = styled.div`
    display: flex;
    height: 400px;
`;

const Left1 = styled.div`
    flex: 3;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Right1 = styled.div`
    flex: 2;
    background-color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container2 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1180px;
    margin: 0 auto;
`;

const Left2 = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Right2 = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Landing = () => {
    return (
        <TopContainer>
            <Container1>
                <Left1>
                    <About />
                </Left1>
                <Right1>
                    <LogIn />
                </Right1>
            </Container1>
            <Container2>
                <Left2>
                    <SuccessfulIvents />
                </Left2>
                <Right2>
                    <UpcomingIvents />
                </Right2>
            </Container2>
        </TopContainer>
    );
};

export default Landing;
