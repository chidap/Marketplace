import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const { user } = useSelector(( state ) => ({...state}));
    return(
        <div>
            <p>Home Page { JSON.stringify(user)} </p>
        </div>
    )
};

export default Home;