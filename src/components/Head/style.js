import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
    display: flex;
    padding: 1.2rem;
    width: 1180px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1180px) {
        width: 100%;
        overflow-x: auto;
    }
`;

export const IVent = styled(NavLink)`
    font-size: 2rem;
    font-family: 'Pretendard-Bold', sans-serif;
    cursor: pointer;
    white-space: pure;
    text-decoration: none;
    color: inherit;

    &:hover {
        color: rgb(134, 38, 51);
    }
`;
