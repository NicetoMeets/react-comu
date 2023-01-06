import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { PostDiv, Post, BtnDiv } from '../../Style/PostDetailCSS';

function Detail() {
    let params = useParams();
    const [PostInfo, setPostInfo] = useState({})
    const [Flag, setFlag] = useState(false)

    useEffect(() => {
        let body = {
            postNum: params.postNum
        }
        axios.post("/api/post/detail", body).then((response) => {
            if (response.data.success){
                setPostInfo(response.data.post)
                setFlag(true)
            }
        }).catch((err) => {
            console.log(err)
        })
    }, []);

    return (
        <PostDiv>
            {Flag? 
            <>
            <Post>
            <h1>{PostInfo.title}</h1>
            <p>{PostInfo.content}</p>
            </Post>
            <BtnDiv>
                <Link to={`/edit/${PostInfo.postNum}`}>
                <button className='edit'>수정</button>
                </Link>
                <button className='delete'>삭제</button>
            </BtnDiv>
            </>
            : 
            <Spinner animation="border">
                Loading...
                </Spinner>
            }
        </PostDiv>
    )
}

export default Detail