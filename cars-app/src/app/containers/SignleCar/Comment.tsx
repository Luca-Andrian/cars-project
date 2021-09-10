import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IComment } from "../../../typings/comment";

interface ICommentProps extends IComment {}


const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-2/5
        h-full
        overflow-x-hidden
    `}
`;

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


export function Comment(props: ICommentProps) {
    const {
        author,
        text,
      } = props;

    return (
        <PageContainer>
            <Author>{author}</Author>
            <CommentText>{text}</CommentText>
        </PageContainer>
    )
}