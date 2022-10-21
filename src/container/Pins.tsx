import React from 'react';
import {User} from '../models/User';
import {useState} from 'react';
import {useThrottle} from '../utils/hooks/useThrottle';
import {Navbar} from '../components';
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import {Feed} from '../components';
import {PinDetails} from '../components';
import CreatePin from '../components/CreatePin';
import {Search} from '../components';

const Pins = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const searchString = useThrottle(searchTerm);

    return (
        <div className="px-2 md:px-5">
            <div className="bg-gray-50">
                <Navbar searchString={searchString} setSearchString={setSearchTerm} />
            </div>
            <div className="h-full">
                <Routes>
                    <Route path="/" element={<Feed/>}/>
                    <Route path="/category/:categoryId" element={<Feed/>}/>
                    <Route path="/pin-detail/:pinId" element={<PinDetails/>}/>
                    <Route path="/" element={<CreatePin/>}/>
                    <Route path="/" element={<Search searchString={searchString} setSearchString={setSearchTerm}/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Pins;
