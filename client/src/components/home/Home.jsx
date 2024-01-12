import React from 'react';
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';

const Home = () => {
    return (
        <>
            <Banner />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '20px' }}>
                <div>
                    <Categories />
                </div>
                <div>
                    <Posts />
                </div>
            </div>
        </>
    );
}

export default Home;
