import React from 'react';
import {useParams} from 'react-router-dom';
import {useState} from 'react';
import Spinner from './Spinner';

const Feed = () => {
    const [loading, setLoading] = useState<boolean>(true);

    if (loading)
        return <Spinner message="We are adding new ideas to your feed"/>;


    return (
        <div>
            feed
        </div>
    );
};

export default Feed;
