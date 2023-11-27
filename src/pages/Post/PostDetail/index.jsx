import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RegisterRequestAPI, getPostDetailAPI } from '@apis';
import { TextButton, RegisterButton } from './style';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const PostDetail = () => {
    const [postData, setPostData] = useState();
    const params = useParams();
    const navigate = useNavigate();
    const Register = async () => {
        try {
            Swal.fire({
                title: '신청하시겠습니까',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#D9D9D9',
                confirmButtonText: '예',
                cancelButtonText: '아니오',
                customClass: {
                    container: 'custom-swal-container',
                },
            }).then(async result => {
                if (result.isConfirmed) {
                    const response = await RegisterRequestAPI(params.id).then(
                        Swal.fire({
                            title: '참여신청 완료',
                            icon: 'success',
                            text: '매니저의 승인요청을 기다려주세요',
                            customClass: {
                                container: 'custom-swal-container',
                            },
                        }),
                    );
                }
            });
        } catch (error) {
            console.log(error);
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
            <RegisterButton onClick={Register}>Register</RegisterButton>
        </div>
    ) : (
        <></>
    );
};
export default PostDetail;
