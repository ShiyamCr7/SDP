import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Activity, User, Power } from 'lucide-react';
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaGetPocket } from "react-icons/fa";
import { Button } from '../ui/button';

const UserLeftbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Add any logout logic here (e.g., clearing auth tokens, etc.)
        navigate('/login');
    };

    const UserLinks = [
        {
            title: 'Dashboard',
            link: '/userdashboard',
            icon: Activity
        },
        {
            title: 'Get Policy',
            link: '/user/getpolicy',
            icon: FaGetPocket
        },
        {
            title: 'FAQ',
            link: '/user/faq',
            icon: MdOutlineQuestionMark 
        },
    ];

    return (
        <div className='h-screen w-1/6 flex justify-center items-center flex-col shadow-sm shadow-primary pt-10'>
            <div className='h-[5%] text-primary font-bold text-2xl flex justify-center items-center'>
                PolicyChunk
            </div>
            <div className='h-[90%] w-full flex flex-col justify-start items-center gap-2'>
                {
                    UserLinks.map((data, index) => (
                        <NavLink key={index} to={data.link} className='p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full'>
                            <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                                {React.createElement(data.icon, { size: 20 })}
                                {data.title}
                            </span>
                        </NavLink>
                    ))
                }
            </div>
            <div className='h-[5%] w-full flex flex-col justify-center items-center'>
                <Button onClick={handleLogout} className='p-5 bg-red-500/5 hover:bg-red-500/10 font-bold w-full'>
                    <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
                        <Power size={20} /> Logout
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default UserLeftbar;
