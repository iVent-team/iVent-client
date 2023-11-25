import { MyPageLayout, Header, Content, IventBox } from './style';
import { IventItem } from './IventItem';
export const MyPage = () => {
    return (
        <MyPageLayout>
            <Header>MyPage</Header>
            <Content>
                <IventItem>FirstItem</IventItem>
            </Content>
        </MyPageLayout>
    );
};
