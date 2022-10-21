import React from 'react';
import {useGoogleOneTapLogin} from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import {client} from '../client';
import {useNavigate} from 'react-router-dom';
import {LocalStorageUtils} from '../models';

const Login = () => {
    const navigate = useNavigate();

    useGoogleOneTapLogin({
        onSuccess: async credentialResponse => {
            if (!credentialResponse.credential)
                return;
            const user = jwtDecode(credentialResponse.credential);
            if (user instanceof Object === false) return;

            const {name: userName, picture: avatar} = user as any;
            LocalStorageUtils.setItem('user', {
                userName,
                avatar,
                googleId: credentialResponse.clientId!!,
            });

            await client.createIfNotExists({
                _id: credentialResponse.clientId!!,
                _type: 'user',
                userName,
                avatar,
            });
            navigate('/', {replace: true});
        },
    });

    return (
        <div className="flex justify-start items-center flex-col h-screen">
            <div className="relative w-full h-full">
                <video
                    src={shareVideo}
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
                    <div className="p-5">
                        <img src={logo} width="130px" alt="logo"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
