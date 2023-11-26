import {
    Background1,
    Background2,
    Container,
    Callender,
    Options,
    Title,
    GlobalStyle,
    Button,
} from './style';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import { getPostsAPI, logoutAPI } from '@apis';
import { useEffect, useState } from 'react';
import { PostCard } from '@components/PostCard';
const Main = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const logout = async () => {
        try {
            await logoutAPI();
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPostsAPI();
                if (response) {
                    setData(response.ivent);
                }
            } catch (error) {
                console.error('Error loading invents:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <GlobalStyle />
            <Background1>
                {data.map((item, index) => (
                    <PostCard
                        key={index}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        hostId={item.hostId}
                        startAt={item.startAt}
                        recruitmentTill={item.recruitmentTill}
                    />
                ))}
            </Background1>
            <Background2>
                <Container>
                    <Callender>
                        <Title>iVent 스케줄</Title>
                    </Callender>

                    <Options>
                        <Button to={'/mypage'}>MY PAGE</Button>
                        <Button to={'/post'}>iVent 만들기</Button>
                        <Button onClick={logout}>로그아웃</Button>
                    </Options>
                </Container>
            </Background2>
        </>
    );
};

export default Main;
