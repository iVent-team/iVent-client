import { Container, Title, IconContainer } from './style';
import { GiMedicines } from 'react-icons/gi';
import ImageSlider from '@components/ImageSlider';

const images = [
    'images/iVent-scuba.png',
    'images/iVent-scuba.png',
    'images/iVent-scuba.png',
    'images/iVent-scuba.png',
    'images/iVent-scuba.png',
    'images/iVent-scuba.png',
];

export const SuccessfulIvents = () => {
    return (
        <Container>
            <Title>
                성공적인 iVents를 구경하세요
                <IconContainer>
                    <GiMedicines />
                </IconContainer>
            </Title>
            <div>
                <ImageSlider images={images} />
            </div>
        </Container>
    );
};
