import { MyPageLayout, Header, IventBox, IventLayout } from './style';
import { IventContainer, IconBox } from './style';
import { useState } from 'react';
import { IventCard } from '@components';
import SvgIcon from '@mui/material/SvgIcon';
import { SvgIconComponent } from '@mui/icons-material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import MyDetails from './MyDetails';
export const MyPage = () => {
    const dummies = [
        { date: 'November 27 4PM', location: '카페' },
        { date: 'November 27 4PM', location: '카페' },
        { date: 'November 27 4PM', location: '카페' },
        { date: 'November 27 4PM', location: '카페' },
    ];
    const dummy = {
        name: '정보인',
        phone: '01012345678',
        gender: 'F',
        college: 'informatics',
        major: 'computer science',
        status: 'studying',
    };
    return (
        <MyPageLayout>
            <MyDetails
                name={dummy.name}
                phone={dummy.phone}
                gender={dummy.gender}
                college={dummy.college}
                major={dummy.major}
                status={dummy.status}
            />
            <IventLayout>
                <div style={{ display: 'flex' }}>
                    <IventContainer>
                        <Header>
                            My Schedule
                            <IconBox>
                                <SvgIcon
                                    component={ArrowCircleLeftIcon}
                                    inheritViewBox
                                />
                                <SvgIcon
                                    component={ArrowCircleRightIcon}
                                    inheritViewBox
                                />
                            </IconBox>
                        </Header>
                        <IventBox>
                            {dummies.map((dummy, index) => (
                                <IventCard
                                    key={index}
                                    date={dummy.date}
                                    location={dummy.location}
                                />
                            ))}
                        </IventBox>
                    </IventContainer>
                    <IventContainer>
                        <Header>
                            히스토리
                            <IconBox>
                                <SvgIcon
                                    component={ArrowCircleLeftIcon}
                                    inheritViewBox
                                />
                                <SvgIcon
                                    component={ArrowCircleRightIcon}
                                    inheritViewBox
                                />
                            </IconBox>
                        </Header>
                        <IventBox>
                            {dummies.map((dummy, index) => (
                                <IventCard
                                    key={index}
                                    date={dummy.date}
                                    location={dummy.location}
                                />
                            ))}
                        </IventBox>
                    </IventContainer>

                    <IventContainer>
                        <Header>
                            내가 만든 Ivent
                            <IconBox>
                                <SvgIcon
                                    component={ArrowCircleLeftIcon}
                                    inheritViewBox
                                />
                                <SvgIcon
                                    component={ArrowCircleRightIcon}
                                    inheritViewBox
                                />
                            </IconBox>
                        </Header>
                        <IventBox>
                            {dummies.map((dummy, index) => (
                                <IventCard
                                    key={index}
                                    date={dummy.date}
                                    location={dummy.location}
                                />
                            ))}
                        </IventBox>
                    </IventContainer>
                </div>
            </IventLayout>
        </MyPageLayout>
    );
};
