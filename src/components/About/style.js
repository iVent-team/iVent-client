import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoCalendarNumberOutline } from 'react-icons/io5';

export const Background = styled.div`
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const Link = styled(NavLink)`
    font-size: 40px;
    text-decoration: none;
    color: #343a40;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 10px;
    margin: 10px;

    &:hover {
        background-color: white;
    }
`;

export const StyledIcon = styled(IoCalendarNumberOutline)`
    width: 200px;
    height: 200px;
    margin-left: 65px;
`;
