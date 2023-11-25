import styled from 'styled-components';

export const SliderContainer = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const SlideWrapper = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    justify-content: center; /* 중앙 정렬을 위해 추가 */
    align-items: center;
    transform: translateX(-${props => props.translatevalue}%);
`;

export const Slide = styled.img`
    height: 300px;
    width: auto;
`;
