import {LocalStorageUtilsBase} from '../utils/LocalStorageUtilsBase';
import {LocalUser} from './LocalUser';
export type {LocalUser} from './LocalUser';

export const LocalStorageUtils = new LocalStorageUtilsBase<{
    'user': LocalUser
}>()