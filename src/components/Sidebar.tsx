import React from 'react';
import {User} from '../models/User';

import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {RiHomeFill} from 'react-icons/ri';
import {UserContext} from '../context/UserContext';
import {useContext} from 'react';

type SidebarProps = {
    closeToggle?(): void
}

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease0in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extablod border-r-2 border-black transition-all duration-200 ease0in-out capitalize';

type Category = {
    name: string,
}

const categories: Category[] = [
    {name: 'Animals'},
    {name: 'Gaming'},
    {name: 'Wallpapers'},
    {name: 'Photography'},
    {name: 'Coding'},
];

const Sidebar = ({closeToggle}: SidebarProps) => {
    const handleCloseSidebar = () => {
        closeToggle?.();
    };
    const user = useContext(UserContext);

    return (
        <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
            <div className="flex flex-col">
                <Link
                    to="/"
                    className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
                    onClick={handleCloseSidebar}

                >
                    <img src={logo} alt="logo" className="w-full"/>
                </Link>
                <NavLink
                    to="/"
                    end
                    className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                >
                    <RiHomeFill/>
                    Home
                </NavLink>

                <h3 className="mt-2 px-5 text-base 2xl:text-xl">Discover Categories</h3>
                {categories.map(category => (
                    <NavLink
                        to={`/category/${category.name}`} key={category.name}
                        className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                    >
                        {category.name}
                    </NavLink>
                ))}
            </div>

            {user && (
                <Link
                    to={`user-profile/${user._id}`}
                    className="flex flex-row m-3 mt-5 gap-2 p-2 items-center bg-white rounded-lg shadow-lg"
                >
                    <img src={user.avatar} className="w-10 h-10 rounded-full" alt="user profile"/>
                    <p>{user.userName}</p>
                </Link>
            )}
        </div>
    );
};

export default Sidebar;
