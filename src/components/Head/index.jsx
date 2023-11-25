import { Outlet } from 'react-router-dom';
import { Header, IVent } from './style';
export const Head = () => {
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
