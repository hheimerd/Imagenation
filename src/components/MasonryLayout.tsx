import React from 'react';
import {PinModel} from '../models/PinModel';
import Masonry from 'react-masonry-css';
import Pin from './Pin';

type MasonryLayoutProps = {
    pins: PinModel[]
}

const breakPointObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
}

const MasonryLayout = ({pins}: MasonryLayoutProps) => {
    return (
        <Masonry className="flex animate-slide-in" breakpointCols={breakPointObj}>
            {pins?.map((pin) =>
                <Pin pin={pin} key={pin._id} className="w-max"/>
            )}
        </Masonry>
    );
};

export default MasonryLayout;
