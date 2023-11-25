import { MyPageLayout, Header, Content, IventBox } from './style';

import { useState } from 'react';
import { IventCard } from '@components';
export const MyPage = () => {
    const [IventList, setIventList] = useState([]);
    return (
        <MyPageLayout>
            <Header>MyPage</Header>
            <Content>
                <IventCard />
            </Content>
        </MyPageLayout>
    );
};
