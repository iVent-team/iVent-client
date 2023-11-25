import React, { useEffect, useState } from 'react';
import {
    FormItem,
    ReviewLayout,
    StyledButton,
    StyledForm,
    StyledLabel,
    StyledRadio,
    StyledTextArea,
} from './style';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Rating } from '@mui/material';

interface IFormInput {
    Question1: string;
    Question2: IQuestion2[];
}

interface IQuestion2 {
    name: string;
    rate: number;
}

const Review = () => {
    const {
        register,
        handleSubmit,
        setFocus,

        formState: { errors },
    } = useForm<IFormInput>();

    const [sections, setSections] = useState<IQuestion2[]>([
        { name: '', rate: -1 },
    ]);
    useEffect(() => {
        setFocus('Question1');
    }, [setFocus]);
    const onSubmit: SubmitHandler<IFormInput> = async data => {
        Swal.fire({
            title: '제출하시겠습니까?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '승인',
            cancelButtonText: '취소',
            customClass: {
                container: 'custom-swal-container',
            },
        }).then(async result => {
            if (result.isConfirmed) {
                console.log(data);
                Swal.fire(
                    '제출이 완료되었습니다.',
                    '수고많으셨습니다',
                    'success',
                );
            }
        });
    };

    const addSection = () => {
        const newSection: IQuestion2 = { name: '', rate: 1 };
        setSections([...sections, newSection]);
    };
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];
    const [value, setValue] = React.useState<number | null>();
    return (
        <ReviewLayout>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <FormItem>
                    <StyledLabel>참여하신 Ivent가 어떠셨나요?😊</StyledLabel>
                    <div>
                        <input
                            type='radio'
                            id='yes'
                            value='yes'
                            {...register('Question1')}
                        />
                        <label>다시 참여할래요</label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            id='no'
                            value='no'
                            {...register('Question1')}
                        />
                        <label>다시 참여하고 싶지않아요</label>
                    </div>
                </FormItem>
                {sections.map((section, index) => (
                    <div key={index}>
                        <FormItem>
                            <StyledLabel>추천인 이름 {index + 1}</StyledLabel>
                            <input
                                {...register(
                                    `Question2.${index}.name` as const,
                                )}
                                style={{ padding: '5px' }}
                            />
                            <StyledRadio>
                                <Rating
                                    name={`Question2.${index}.rate`}
                                    value={section.rate}
                                    defaultValue={section.rate}
                                    onChange={(event, newValue) => {
                                        setSections(prevSections => {
                                            const newSections = [
                                                ...prevSections,
                                            ];
                                            newSections[index].rate =
                                                newValue ?? 5;
                                            return newSections;
                                        });
                                        register(
                                            `Question2.${index}.rate` as const,
                                            {
                                                value: newValue ?? 1,
                                            },
                                        );
                                    }}
                                />
                            </StyledRadio>
                        </FormItem>

                        <FormItem>
                            {/* <StyledLabel>신고 이름</StyledLabel> */}

                            {/* {[1, 2, 3, 4, 5].map(value => (
                                    <input
                                        key={value}
                                        {...register(
                                            `Question2.${index}.rate` as const,
                                        )}
                                        type='radio'
                                        value={value.toString()}
                                    />
                                ))} */}
                        </FormItem>
                    </div>
                ))}
                <StyledButton onClick={addSection}>추가</StyledButton>
                <input type='submit' />
            </StyledForm>
        </ReviewLayout>
    );
};

export default Review;
