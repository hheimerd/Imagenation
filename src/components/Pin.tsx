import React from 'react';
import {PinModel} from '../models/PinModel';
import {urlFor} from '../client';

type PinProps = {
    pin: PinModel,
    className: string
}

export const Pin = ({pin, className}: PinProps) => {
    return (
        <div className={className}>
            <img className="rounded-lg w-full"
                 alt={pin.title}
                 src={urlFor(pin.image).width(250).url()}
            />
        </div>
    );
};

export default Pin;
