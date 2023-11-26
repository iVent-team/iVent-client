import styled from 'styled-components';
import { PRIMARY } from '@utility';
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    margin: 0; /* Reset default margin */
    padding: 0; /* Reset default padding */
  }
`;

export const MyPageLayout = styled.div``;

export const Header = styled.div`
    padding: 5px;
    display: flex;
    // justify-content: center;
    align-items: center;
    font-size: 30px;
`;
export const Content = styled.div``;
export const IventBox = styled.div``;
export const IventContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const IconBox = styled.div`
    cursor: pointer;
    margin: 10px;
`;

export const Table = styled.table`
    width: 1180px;
    border-collapse: collapse;
    margin: 20px auto;
`;

export const TableHeader = styled.th`
    padding: 12px;
    border: 1px solid #ddd;
    background-color: #f2f2f2;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

export const TableCell = styled.td`
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
`;
export const AcceptButton = styled.div`
    background-color: ${PRIMARY};
    color: white;
    border: 1px solid;
    text-align: center;
    font-family: 'Pretendard-Light';
    border-radius: 10px;
`;
export const RejectButton = styled.div`
    background-color: white;
    color: black;
    border: 1px solid black;
    text-align: center;
    font-family: 'Pretendard-Light';
    border-radius: 10px;
`;

export const Friendliness = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: ${props => {
        const friendlinessLevel = props.friendlinessLevel || 0;
        const color = calculateBackgroundColor(friendlinessLevel);
        return color;
    }};
`;

const calculateBackgroundColor = friendlinessLevel => {
    const totalLevels = 9;
    const step = 255 / totalLevels;

    // Calculate color based on friendliness level
    const red = Math.round(255 - step * friendlinessLevel);
    const green = Math.round(step * friendlinessLevel);
    const blue = 0;

    return `rgb(${red}, ${green}, ${blue})`;
};

export const Background = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 40px 0;
`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: center;
`;
