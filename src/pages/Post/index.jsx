import {
    Background,
    Container,
    Title,
    Box,
    GlobalStyle,
    Text,
    DateContainer,
    DateTopContainer,
    P,
    TextArea,
    FileContainer,
    Button,
} from './style';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes } from 'date-fns';
import { addPostAPI } from '@apis/post';
import { useNavigate } from 'react-router-dom';
import creatingAnimation from 'src/animations/animation_lmrukuxj.json';
import loadingAnimation from 'src/animations/animation_lmrwrsbx.json';
import Swal from 'sweetalert2';
const Post = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [introduce, setIntroduce] = useState('');
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16),
    );
    const [isLoading, setIsLoading] = useState(false);
    const [endDate, setEndDate] = useState(
        setHours(setMinutes(new Date(), 30), 16),
    );
    const [selectedFile, setSelectedFile] = useState(null); // 추가: 파일 상태 추가

    // 추가: 파일 선택 시 실행되는 핸들러 함수
    const handleFileChange = e => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const RegisterFunc = async e => {
        e.preventDefault();
        if (!name) {
            return alert('iVent의 이름을 입력해주세요.');
        }
        if (!location) {
            return alert('장소를 입력해주세요.');
        }
        if (!startDate) {
            return alert('행사 일시를 입력해주세요.');
        }
        if (!endDate) {
            return alert('마감 기한을 입력해주세요.');
        }
    };
    const addPost = async () => {
        try {
            await addPostAPI(name, location, startDate, endDate, introduce);
            navigate('/main');
        } catch (error) {
            console.error('Add Post failed:', error);
        }
    };
    return (
        <>
            <GlobalStyle />
            <Background>
                <Container>
                    <Title>새 iVent 만들기</Title>
                    <Box onSubmit={RegisterFunc}>
                        <Text
                            type='text'
                            placeholder='iVent 이름*'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <Text
                            type='text'
                            placeholder='장소*'
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                        />
                        <DateTopContainer>
                            <DateContainer>
                                <P>행사 날짜</P>
                                <DatePicker
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    showTimeSelect
                                    excludeTimes={[
                                        setHours(setMinutes(new Date(), 0), 17),
                                        setHours(
                                            setMinutes(new Date(), 30),
                                            18,
                                        ),
                                        setHours(
                                            setMinutes(new Date(), 30),
                                            19,
                                        ),
                                        setHours(
                                            setMinutes(new Date(), 30),
                                            17,
                                        ),
                                    ]}
                                    dateFormat='MMMM d, yyyy h:mm aa'
                                />
                            </DateContainer>
                            <DateContainer>
                                <P>마감 기한</P>
                                <DatePicker
                                    selected={endDate}
                                    onChange={date => setEndDate(date)}
                                    showTimeSelect
                                    excludeTimes={[
                                        setHours(setMinutes(new Date(), 0), 17),
                                        setHours(
                                            setMinutes(new Date(), 30),
                                            18,
                                        ),
                                        setHours(
                                            setMinutes(new Date(), 30),
                                            19,
                                        ),
                                        setHours(
                                            setMinutes(new Date(), 30),
                                            17,
                                        ),
                                    ]}
                                    dateFormat='MMMM d, yyyy h:mm aa'
                                />
                            </DateContainer>
                        </DateTopContainer>

                        <TextArea
                            as='textarea'
                            placeholder='iVent를 자유롭게 소개해 보세요!'
                            value={introduce}
                            onChange={e => setIntroduce(e.target.value)}
                            rows={introduce.split('\n').length + 1}
                        />
                        <FileContainer>
                            <input type='file' onChange={handleFileChange} />
                        </FileContainer>

                        {selectedFile && (
                            <img
                                src={URL.createObjectURL(selectedFile)}
                                alt='Selected'
                                style={{ width: '100%', marginTop: '10px' }}
                            />
                        )}
                        <Button type='submit' onClick={addPost}>
                            제출
                        </Button>
                    </Box>
                </Container>
            </Background>
        </>
    );
};

export default Post;
