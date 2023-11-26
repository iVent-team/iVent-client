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

export const ButtonContainer = styled.div`
    display: flex;
    width: 1180px;
    margin: 0 auto;
    justify-content: space-between;
`;

export const Button = styled.button`
    margin: 20px;
    font-size: 20px;
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 5px 20px;
    background-color: transparent;
`;
