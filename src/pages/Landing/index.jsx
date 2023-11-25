import { LogIn, About, SuccessfulIvents, UpcomingIvents } from '@components';
import {
    TopContainer,
    Container1,
    Container2,
    Left1,
    Left2,
    Right1,
    Right2,
} from './style';
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
