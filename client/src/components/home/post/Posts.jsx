import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { API } from '../../../service/api';
import Post from './Post';

const Posts = () => {
    const [posts, getPosts] = useState([]);
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getAllPosts({ category: category || '' });
            if (response.isSuccess) {
                getPosts(response.data);
            }
        };
        fetchData();
    }, [category]);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {posts?.length ? (
                posts.map(post => (
                    <Link
                        key={post._id}
                        style={{ textDecoration: 'none', color: 'inherit', flexBasis: '30%' }}
                        to={`details/${post._id}`}
                    >
                        <Post post={post} />
                    </Link>
                ))
            ) : (
                <Box style={{ color: '#878787', margin: '30px 80px', fontSize: 18 }}>
                    No data is available for the selected category
                </Box>
            )}
        </div>
    );
};

export default Posts;
