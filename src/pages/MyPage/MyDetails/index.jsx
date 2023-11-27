import {
    DetailHeader,
    MyDetailsLayout,
    DetailTitle,
    DetailText,
    DetailContainer,
    DetailImg,
} from './style';
import Tiger from '../../../img/Tiger.svg';
import { useEffect, useState } from 'react';
import { getMyDataAPI, getRequestsAPI } from '@apis/mypage';
const MyDetails = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getMyDataAPI();
                const requests = await getRequestsAPI();
                const scheduleData = await getRequestsAPI();
                setData(response.user);
                console.log(scheduleData);
                console.log(requests);
            } catch (error) {
                console.error('Error fetching detail:', error);
            }
        };

        fetchData(); // <-- Call the fetchData function
    }, []);
    return (
        data && (
            <MyDetailsLayout>
                <DetailHeader>My Details</DetailHeader>
                <div style={{ display: 'flex' }}>
                    <DetailImg src={Tiger} />
                    <DetailContainer>
                        <DetailTitle>Name:</DetailTitle>
                        <DetailText>{data?.name} </DetailText>
                        <p />
                        <DetailTitle>Phone: </DetailTitle>
                        <DetailText>{data?.phone}</DetailText>
                        <p />
                        <DetailTitle>Gender:</DetailTitle>
                        <DetailText>{data?.gender}</DetailText>
                        <p />
                        <DetailTitle>College:</DetailTitle>
                        <DetailText>{data?.college}</DetailText>
                        <p />
                        <DetailTitle>Major:</DetailTitle>
                        <DetailText>{data?.major}</DetailText>
                        <p />
                        <DetailTitle>Status:</DetailTitle>
                        <DetailText>
                            {data?.academicStatus ? '재학중' : '휴학중'}
                        </DetailText>
                        <p />
                    </DetailContainer>
                </div>
            </MyDetailsLayout>
        )
    );
};
export default MyDetails;
