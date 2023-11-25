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

interface IFormInput {
    Question1: string;
    Question2: IQuestion2[];
}

interface IQuestion2 {
    name: string;
    detail: string;
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
        { name: '', detail: '', rate: 1 },
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
        const newSection: IQuestion2 = { name: '', detail: '', rate: 1 };
        setSections([...sections, newSection]);
    };

    return (
        <ReviewLayout>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <FormItem>
                    <StyledLabel>참여하신 Ivent가 어떠셨나요?😊</StyledLabel>
                    <StyledTextArea {...register('Question1')} />
                </FormItem>
                {sections.map((section, index) => (
                    <div key={index}>
                        <FormItem>
                            <StyledLabel>이름</StyledLabel>
                            <input
                                {...register(
                                    `Question2.${index}.name` as const,
                                )}
                            />
                        </FormItem>
                        <FormItem>
                            <StyledLabel>신고내용</StyledLabel>
                            <StyledTextArea
                                {...register(
                                    `Question2.${index}.detail` as const,
                                )}
                            />
                        </FormItem>
                        <FormItem>
                            <StyledLabel>별점평가</StyledLabel>
                            <StyledRadio>
                                {[1, 2, 3, 4, 5].map(value => (
                                    <input
                                        key={value}
                                        {...register(
                                            `Question2.${index}.rate` as const,
                                        )}
                                        type='radio'
                                        value={value.toString()}
                                    />
                                ))}
                            </StyledRadio>
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
