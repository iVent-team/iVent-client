import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { GlobalStyle, Wrap, RatingText, Stars, Button, Skip } from './style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ARRAY = [0, 1, 2, 3, 4];

function Rating() {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState([false, false, false, false, false]);
    const [submitted, setSubmitted] = useState(false);
    const [result, setResult] = useState(0);

    const handleStarClick = (index: number) => {
        const clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
            clickStates[i] = i <= index ? true : false;
        }
        setClicked(clickStates);
    };

    useEffect(() => {
        if (submitted) {
            sendReview();
        }
    }, [submitted, clicked]);

    const sendReview = async () => {
        const score = clicked.filter(Boolean).length;
        if (score > 2) {
            setResult(score - 2);
        } else {
            setResult(score - 3);
        }
        try {
            const data = {
                score: result,
            };
            const response = await axios.post(
                'https://api.i-vent.net/api/v0/ivent/rate/1',
                data,
            );
        } catch (error: any) {
            console.error('Registration error:', error);
            console.log(error.response);
            if (error.response) {
                alert(`Registration failed: ${error.response.data.message}`);
            } else {
                alert('Registration failed. Please try again later.');
            }
        }
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const handleSkip = async () => {
        try {
            const data = {
                score: 0,
            };
            const response = await axios.post(
                'https://api.i-vent.net/api/v0/ivent/rate/1',
                data,
            );
        } catch (error: any) {
            console.error('Registration error:', error);
            console.log(error.response);
            if (error.response) {
                alert(`Registration failed: ${error.response.data.message}`);
            } else {
                alert('Registration failed. Please try again later.');
            }
        }
    };

    return (
        <>
            <GlobalStyle />
            <Wrap>
                <RatingText>참여했던 iVent를 평가해주세요!</RatingText>
                <Stars>
                    {ARRAY.map((el, idx) => {
                        return (
                            <FaStar
                                key={idx}
                                size='50'
                                onClick={() => handleStarClick(el)}
                                className={clicked[el] ? 'yellowStar' : ''}
                            />
                        );
                    })}
                </Stars>
                <Button onClick={handleSubmit}>제출</Button>
                <Skip to={'/home'} onClick={handleSkip}>
                    스킵하기
                </Skip>
            </Wrap>
        </>
    );
}

export default Rating;
