import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ListDiv, ListItem } from '../../Style/ListCSS';

function List() {
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
                    <Link to={`/post/${post.postNum}`}>
                    <p className='title'>{post.title}</p>
                    <p>{post.author.displayName}</p>
                    <p>{post.content}</p>
                    </Link>
                </ListItem>
            );
        })}
        </ListDiv>
    )
}

export default List;