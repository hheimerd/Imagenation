import {User} from './User';
import {SanityImageSource} from '@sanity/image-url/lib/browser/types';

export type PinModel = {
    _id: string,
    title: string,
    about: string,
    image: SanityImageSource,
    postedBy: User,
    category: string,
    destination: string,
    save: User[]
}