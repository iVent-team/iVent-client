import { DateItem, IventCardLayout, Content, LocationItem } from './style';

export const IventCard = ({ date, location }) => {
    return (
        <IventCardLayout>
            <Content>
                <DateItem> {date}</DateItem>
                <LocationItem>{location}</LocationItem>
            </Content>
        </IventCardLayout>
    );
};
