import { LogIn, About, SuccessfulIvents } from '@components';
import {
    TopContainer,
    Container1,
    Container2,
    Left1,
    Right1,
    Middle,
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
                <Middle>
                    <SuccessfulIvents />
                </Middle>
            </Container2>
        </TopContainer>
    );
};

export default Landing;
