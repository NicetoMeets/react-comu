import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListDiv, ListItem } from '../../Style/ListCSS';

function List(props) {
    const [postList , setPostList] = useState([]);

    useEffect(()=>{
        axios.post("/api/post/list").then((response)=>{
            if(response.data.success){
                setPostList([...response.data.postList])
            }
        }).catch((err)=>{
            console.log(err);
        });
    }, []);

    return (
        <ListDiv>
        {postList.map((post, i)=>{
            return (
                <ListItem key={i}>
                    <p className='title'>{post.title}</p>
                    <p>내용 : {post.content}</p>
                </ListItem>
            );
        })}
        </ListDiv>
    )
}

export default List;