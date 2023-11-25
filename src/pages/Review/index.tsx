import React, { useEffect, useState } from 'react';
import { FormItem, ReviewLayout, StyledForm, StyledRadio } from './style';
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
                    <label>
                        How was the recent event that you participated in?
                    </label>
                    <textarea {...register('Question1')} />
                </FormItem>
                {sections.map((section, index) => (
                    <div key={index}>
                        <FormItem>
                            <label>Name</label>
                            <input
                                {...register(
                                    `Question2.${index}.name` as const,
                                )}
                            />
                        </FormItem>
                        <FormItem>
                            <label>
                                Please write about the incident freely
                            </label>
                            <textarea
                                {...register(
                                    `Question2.${index}.detail` as const,
                                )}
                            />
                        </FormItem>
                        <FormItem>
                            <label>Please Rate the person</label>
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
                <button type='button' onClick={addSection}>
                    Add Person
                </button>
                <input type='submit' />
            </StyledForm>
        </ReviewLayout>
    );
};

export default Review;
