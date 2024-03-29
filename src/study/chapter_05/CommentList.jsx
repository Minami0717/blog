import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: 'kimura',
        comment: 'akemashite'
    },
    {
        name: 'はいばら',
        comment: 'あけおめ！'
    },
    {
        name: '김정균',
        comment: '이궈궈던'
    },
]

function CommentList() {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    )
}

export default CommentList;