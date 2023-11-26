import { PRIMARY } from '@utility/COLORS';
import styled from 'styled-components';

export const PostCardLayout = styled.div`
    cursor: pointer;
    border: 2px solid ${PRIMARY};
    height: 300px;
    width: 300px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    font-family: 'Pretendard';
    background: 'white';
`;
export const Content = styled.div`
    height: 70px;
    padding: 30px 10px;
    display: flex;
    justify-content: center;
    font-family: 'Pretendard-Bold';
    font-size: 25px;
`;

export const DateBox = styled.div`
    padding: 5px;
    text-align: center;
    border-bottom: 1px solid gray;
`;
export const DescriptionBox = styled.div`
    padding: 5px;
    height: 50px;
`;
export const TextBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
`;
