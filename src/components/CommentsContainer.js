import React from 'react'

const commentsData = [
    {
        name: "Devank Sisodia",
        text: "This video is very good.Please make more Video like this",
        replies: [
        ]
    },
    {
        name: "Devank Sisodia",
        text: "This video is very good.Please make more Video like this",
        replies: [
            {
                name: "Devank Sisodia",
                text: "This video is very good.Please make more Video like this",
                replies: [
                    {
                        name: "Devank Sisodia",
                        text: "This video is very good.Please make more Video like this",
                        replies: [
                            {
                                name: "Devank Sisodia",
                                text: "This video is very good.Please make more Video like this",
                                replies: [
                                    {
                                        name: "Devank Sisodia",
                                        text: "This video is very good.Please make more Video like this",
                                        replies: [
                                            {
                                                name: "Devank Sisodia",
                                                text: "This video is very good.Please make more Video like this",
                                                replies: [
                                                    {
                                                        name: "Devank Sisodia",
                                                        text: "This video is very good.Please make more Video like this",
                                                        replies: [
                                                        ]
                                                    },
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "Devank Sisodia",
        text: "This video is very good.Please make more Video like this",
        replies: [
            {
                name: "Devank Sisodia",
                text: "This video is very good.Please make more Video like this",
                replies: [
                ]
            },
        ]
    },
    {
        name: "Devank Sisodia",
        text: "This video is very good.Please make more Video like this",
        replies: [
            {
                name: "Devank Sisodia",
                text: "This video is very good.Please make more Video like this",
                replies: [
                ]
            },
        ]
    },
    {
        name: "Devank Sisodia",
        text: "This video is very good.Please make more Video like this",
        replies: [
        ]
    },
    {
        name: "Devank Sisodia",
        text: "This video is very good.Please make more Video like this",
        replies: [
        ]
    },
    {
        name: "Devank Sisodia",
        text: "This video is very good.Please make more Video like this",
        replies: [
        ]
    },
    {
        name: "Devank Sisodia",
        text: "This video is very good.Please make more Video like this",
        replies: [
        ]
    },
]


const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
            <img
                className="w-12 h-12"
                alt="user"
                src="https://t4.ftcdn.net/jpg/12/49/12/63/360_F_1249126338_leS5yTD2NdGuTra86mGyq9heEAxLbX5O.jpg"
            />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
};

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index} >
            <Comment data={comment} />
            <div className='pl-6  border border-l-black'>
                <CommentsList comments={comment.replies}/> 
            </div>
        </div>
    ));
};

const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments: </h1>
            <CommentsList comments={commentsData} />
        </div>
    );
};



export default CommentsContainer;