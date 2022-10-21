import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Spinner from './Spinner';
import {searchQuery} from '../utils/data';
import {feedQuery} from '../utils/data';
import {client} from '../client';
import {PinModel} from '../models/PinModel';
import MasonryLayout from './MasonryLayout';

const Feed = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const {categoryId} = useParams();
    const [pins, setPins] = useState<PinModel[]>([]);

    useEffect(() => {
        const query = categoryId
            ? searchQuery(categoryId)
            : feedQuery;

        client.fetch(query).then(data => {
            setPins(data);
            setLoading(false);
        });
    }, [categoryId]);


    if (loading)
        return <Spinner message="We are adding new ideas to your feed"/>;

    return (
        <div>
            {pins && <MasonryLayout pins={pins}/>}
        </div>
    );
};

export default Feed;
