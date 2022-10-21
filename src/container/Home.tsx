import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import {HiMenu} from 'react-icons/hi';
import {AiFillCloseCircle} from 'react-icons/ai';
import logo from '../assets/logo.png';
import {Sidebar} from '../components';
import {UserProfile} from '../components';
import {Link} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {userQuery} from '../utils/data';
import {LocalStorageUtils} from '../models';
import {client} from '../client';
import {User} from '../models/User';
import Pins from './Pins';
import {UserContext} from '../context/UserContext';

const Home = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const userInfo = LocalStorageUtils.getObject('user');

    useEffect(() => {
        if (!userInfo) return;
        const query = userQuery(userInfo.googleId);
        client.fetch(query).then(data => {
            setUser(data[0]);
        });
    }, []);


    useEffect(() => {
        scrollRef.current?.scrollTo(0, 0);
    }, []);


    return (
        <UserContext.Provider value={user}>
            <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">

                {/* PC version */}
                <div className="hidden md:flex h-screen flex-initial">
                    <Sidebar/>
                </div>

                {/* Mobile version */}
                <div className="flex md:hidden flex-row">
                    <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
                        <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)}/>
                        <Link to="/">
                            <img src={logo} alt="logo" className="w-28"/>
                        </Link>
                        <Link to={`user-profile/${user?._id}`}>
                            <img src={user?.avatar} alt="logo" className="w-28"/>
                        </Link>
                    </div>
                    {toggleSidebar && (
                        <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
                            <div className="absolute w-full flex justify-end items-center">
                                <AiFillCloseCircle fontSize={30} className="cursor-pointer"
                                                   onClick={() => setToggleSidebar(false)}/>
                            </div>
                            <Sidebar closeToggle={() => setToggleSidebar(false)}/>
                        </div>
                    )}
                </div>

                {/*MainContent*/}
                <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
                    <Routes>
                        <Route path="/user-profile/:userId" element={<UserProfile/>}/>
                        <Route path="/*" element={<Pins/>}/>
                    </Routes>
                </div>

            </div>
        </UserContext.Provider>
    );
};

export default Home;
