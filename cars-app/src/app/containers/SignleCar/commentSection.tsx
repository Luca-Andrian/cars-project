import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useForm, SubmitHandler } from "react-hook-form";
import { IComment } from "../../../typings/comment";
import { Comment } from "./Comment";
import { firebase } from '../../../firebase/firebase';
import 'firebase/compat/auth';

interface ICommentProps extends IComment {}

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

const FormComment = styled.form`
    ${tw`
        w-64
        h-40
        max-w-lg
        m-auto
        text-center
    `}
`;

const Text = styled.textarea`
    ${tw`
        border-solid
        border-gray-300
        border
        w-full
        rounded
        text-gray-700
    `}
`;

const Button = styled.button`
    ${tw`
        w-32
        mt-1
        text-white
        bg-red-500
        hover:bg-yellow-400
        border
        py-2
        px-4
        font-semibold
        rounded
    `}
`;

type FormValues = {
    text: string;
  };

const Author = styled.p`
  ${tw`
      mt-10
      w-32
      text-black
      font-semibold
      rounded
  `}
`;

const CommentText = styled.p`
  ${tw`
      text-sm
      text-gray-500
      w-full
  `}
`;

const AlertComment = styled.p`
  ${tw`
    text-sm
    text-gray-500
  `}
`


export function CommentSection(props: {items: []}) {

    const [comments, setComments] = useState(props['items'] as any[]);
    const [isSingIn, setSingIn] = useState([] as any)
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            return setSingIn(user)
        }else{
            return setSingIn(false)
        }
    })
    const { register, handleSubmit, reset } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (data, e) => {
        const newComments = [{author: isSingIn.displayName, text: data.text}, ...comments];
        setComments(newComments);
        reset()
    };

    if(isSingIn) {
        return (
            <PageContainer>
                <FormComment onSubmit={handleSubmit(onSubmit)}>
                    <Text {...register("text")}/>
                    <Button type="submit">Commenter</Button>
                </FormComment>
                {comments.map((comment) => <Comment {...comment}/>)}
            </PageContainer>
        )
    } else {
        return (
            <PageContainer>
                <AlertComment>Vous devez vous connecter pour voir les commentaires....</AlertComment>
            </PageContainer>
        )
    }
}