import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostDetailAPI } from '@apis';

const PostDetail = () => {
    const [postData, setPostData] = useState();
    const params = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const postDetailData = await getPostDetailAPI(params.id);
                setPostData(postDetailData);
            } catch (error) {
                console.error('Error fetching challenge detail:', error);
            }
        };

        fetchData();
    }, [params.id]);

    return (
        postData && (
            <div>
                <div></div>
            </div>
        )
    );
};
export default PostDetail;
