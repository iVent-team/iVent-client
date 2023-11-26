import { getPostsAPI } from '@apis';
import { getUserDetailAPI } from '@apis/user';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    PostCardLayout,
    Content,
    DateBox,
    DescriptionBox,
    TextBox,
} from './style';
export const PostCard = ({
    title,
    description,
    startAt,
    recruitmentTill,
    hostId,
    id,
}) => {
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [host, setHost] = useState();
    const startDate = new Date(startAt).toLocaleDateString();
    const endDate = new Date(recruitmentTill).toLocaleDateString();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const hostResponse = await getUserDetailAPI(hostId);
                setHost(hostResponse.user.username);
                const dataResponse = await getPostsAPI();
                // setData(dataResponse);
                console.log(hostResponse);
                console.log(dataResponse);
            } catch (error) {
                console.error('Error loading invents:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <PostCardLayout>
            <Content onClick={() => navigate(`/post/${id}`)}>{title}</Content>
            <DescriptionBox>{description}</DescriptionBox>
            <DateBox>Deadline: {endDate}</DateBox>
            <TextBox>{host}</TextBox>
        </PostCardLayout>
    );
};
