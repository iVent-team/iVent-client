import {
    MyPageLayout,
    Header,
    IventBox,
    Background,
    Table,
    TableHeader,
    TableRow,
    TableCell,
    RejectButton,
    AcceptButton,
    Friendliness,
    GlobalStyle,
} from './style';
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
        <>
            <GlobalStyle />
            <MyPageLayout>
                <MyDetails
                    name={dummy.name}
                    phone={dummy.phone}
                    gender={dummy.gender}
                    college={dummy.college}
                    major={dummy.major}
                    status={dummy.status}
                />
                <Background>
                    <IventContainer>
                        <Header>
                            <IconBox>
                                <SvgIcon
                                    component={ArrowCircleLeftIcon}
                                    inheritViewBox
                                />
                            </IconBox>
                            내 스케줄
                            <IconBox>
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
                            <IconBox>
                                <SvgIcon
                                    component={ArrowCircleLeftIcon}
                                    inheritViewBox
                                />
                            </IconBox>
                            히스토리
                            <IconBox>
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
                            <IconBox>
                                <SvgIcon
                                    component={ArrowCircleLeftIcon}
                                    inheritViewBox
                                />
                            </IconBox>
                            내가 만든 iVent
                            <IconBox>
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
                </Background>
                <Table>
                    <thead>
                        <TableRow>
                            <TableHeader>Name</TableHeader>
                            <TableHeader>College, Major</TableHeader>
                            <TableHeader># of Events Joined</TableHeader>
                            <TableHeader>Friendliness Level</TableHeader>
                            <TableHeader>Warning Status</TableHeader>
                            <TableHeader>Request</TableHeader>
                        </TableRow>
                    </thead>
                    <tbody>
                        {/* Example row, replace with your data */}
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>
                                University of Example, Computer Science
                            </TableCell>
                            <TableCell>10</TableCell>
                            <TableCell>
                                <Friendliness friendlinessLevel={5} />
                            </TableCell>
                            <TableCell>No Warning</TableCell>
                            <TableCell>
                                <AcceptButton>Accept</AcceptButton>
                                <RejectButton>Reject</RejectButton>
                            </TableCell>
                        </TableRow>
                        {/* Add more rows as needed */}
                    </tbody>
                </Table>
            </MyPageLayout>
        </>
    );
};
