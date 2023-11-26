import React, { useState } from 'react';
import {
    SliderContainer,
    SlideWrapper,
    Slide,
    ButtonContainer,
    Button,
} from './style';

const ImageSlider = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev === images.length - 1 ? prev : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev === 0 ? 0 : prev - 1));
    };

    return (
        <SliderContainer>
            <SlideWrapper translatevalue={currentSlide * 100}>
                {images.map((image, index) => (
                    <Slide key={index} src={image} alt={`Slide ${index + 1}`} />
                ))}
            </SlideWrapper>
            <ButtonContainer>
                <Button onClick={prevSlide}>이전</Button>
                <Button onClick={nextSlide}>다음</Button>
            </ButtonContainer>
        </SliderContainer>
    );
};

export default ImageSlider;
