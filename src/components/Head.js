import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Header = styled.div`
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

const IVent = styled(NavLink)`
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

const Head = () => {
    return (
        <>
            <Header>
                <IVent to='/'>iVent</IVent>
            </Header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Head;
