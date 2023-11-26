import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RegisterRequestAPI, getPostDetailAPI } from '@apis';
import { TextButton, RegisterButton } from './style';
const PostDetail = () => {
    const [postData, setPostData] = useState();
    const params = useParams();

    const Register = async () => {
        try {
            await RegisterRequestAPI(params.id);
        } catch (error) {
            console.error('Error Requesting Register ', error);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const postDetailData = await getPostDetailAPI(params.id);
                setPostData(postDetailData.ivent);
            } catch (error) {
                console.error('Error fetching detail:', error);
            }
        };

        fetchData();
    }, [params.id]);

    return postData ? (
        <div>
            <div>{postData.title ?? 'title'}</div>
            <div>{postData.startAt}</div>
            <div>{postData.description}</div>
            <TextButton>{postData.recruitmentTill}</TextButton>
            <RegisterButton onClick={() => Register}>Register</RegisterButton>
        </div>
    ) : (
        <></>
    );
};
export default PostDetail;
