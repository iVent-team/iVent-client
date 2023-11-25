import {
    DetailHeader,
    MyDetailsLayout,
    DetailTitle,
    DetailText,
    DetailContainer,
    DetailImg,
} from './style';
import Tiger from '../../../img/Tiger.svg';
const MyDetails = ({ name, phone, gender, college, major, status }) => {
    return (
        <MyDetailsLayout>
            <DetailHeader>My Details</DetailHeader>
            <div style={{ display: 'flex' }}>
                <DetailImg src={Tiger} />
                <DetailContainer>
                    <DetailTitle>Name:</DetailTitle>
                    <DetailText>{name}</DetailText>
                    <p />
                    <DetailTitle>Phone: </DetailTitle>
                    <DetailText>{phone}</DetailText>
                    <p />
                    <DetailTitle>Gender:</DetailTitle>
                    <DetailText>{gender}</DetailText>
                    <p />
                    <DetailTitle>College:</DetailTitle>
                    <DetailText>{college}</DetailText>
                    <p />
                    <DetailTitle>Major:</DetailTitle>
                    <DetailText>{major}</DetailText>
                    <p />
                    <DetailTitle>Status:</DetailTitle>
                    <DetailText>{status}</DetailText>
                    <p />
                </DetailContainer>
            </div>
        </MyDetailsLayout>
    );
};
export default MyDetails;
