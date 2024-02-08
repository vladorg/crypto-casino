import Image from 'next/image';
import React from 'react';

// Props for UsersChat component, containing an array of user chat data
interface UsersChatProps {
    usersChatsData?: {
        avtar?: string;
        userName?: string;
        rankIcon?: string;
        level?: number;
        message?: string;
    }[];
}

// UsersChat component displays a list of user chats
const UsersChat = (props: UsersChatProps) => {
    return (
        <ul className='pt-5 relative h-[calc(100%-89px)] scroll-y scroll-y--contain px-4 '>
            {/* Map through user chats and render each chat item */}
            {
                props?.usersChatsData?.map((userChat) => {
                    return (
                        <li key={userChat?.userName} className='p-3 bg-white-3 rounded-md mb-2 last:mb-0'>
                            {/* User information and rank */}
                            <div className='flex items-center justify-between gap-1.5 '>
                                <div className='flex gap-1.5 items-center'>
                                    {/* User avatar */}
                                    <Image src={`/images/${userChat?.avtar}`} width={24} height={24} alt='User Avatar' />
                                    {/* User name */}
                                    <span className='text-white text-xs font-inter font-mediumF'>{userChat?.userName}</span>
                                </div>
                                {/* User rank and level */}
                                <div className='flex gap-1 items-center px-1.5 py-[3px] rounded bg-blue-10'>
                                    <Image src={`/images/${userChat?.rankIcon}`} width={14} height={14} alt='User Rank' />
                                    <span className='block text-xs text-white font-inter'>{userChat?.level}</span>
                                </div>
                            </div>
                            {/* User message */}
                            <div className='mt-2.5'>
                                <p className='text-xs text-light-100 font-inter'>{userChat?.message}</p>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default UsersChat;
