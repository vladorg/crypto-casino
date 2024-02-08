import { Icons } from '@/icons'
import UsersChat from './usersChat'

// Sidebar component displaying a chat room with online users
const Sidebar = () => {
    // Dummy data for user chats
    const usersChatsData = [
        {
            "avtar": "avatar.png",
            "userName": "Courtney Henry1",
            "rankIcon": "rank.svg",
            "level": 12,
            "message": "hello Friends !"
        },
        {
            "avtar": "avatar.png",
            "userName": "Courtney Henry2",
            "rankIcon": "rank.svg",
            "level": 12,
            "message": "hello Friends !"
        },
        {
            "avtar": "avatar.png",
            "userName": "Marvin McKinney3",
            "rankIcon": "rank.svg",
            "level": 96,
            "message": "bro why does emp give withdrawers a whole 12 hours to accept"
        },
        {
            "avtar": "avatar.png",
            "userName": "Courtney Henry4",
            "rankIcon": "rank.svg",
            "level": 12,
            "message": "hello Friends !"
        },
        {
            "avtar": "avatar.png",
            "userName": "Courtney Henry5",
            "rankIcon": "rank.svg",
            "level": 12,
            "message": "hello Friends !"
        },
        {
            "avtar": "avatar.png",
            "userName": "Courtney Henry6",
            "rankIcon": "rank.svg",
            "level": 12,
            "message": "hello Friends !"
        },
        {
            "avtar": "avatar.png",
            "userName": "Marvin McKinney7",
            "rankIcon": "rank.svg",
            "level": 96,
            "message": "bro why does emp give withdrawers a whole 12 hours to accept"
        },
        {
            "avtar": "avatar.png",
            "userName": "Courtney Henry8",
            "rankIcon": "rank.svg",
            "level": 12,
            "message": "hello Friends !"
        },
        {
            "avtar": "avatar.png",
            "userName": "Courtney Henry9",
            "rankIcon": "rank.svg",
            "level": 12,
            "message": "hello Friends !"
        },
        {
            "avtar": "avatar.png",
            "userName": "Courtney Henry10",
            "rankIcon": "rank.svg",
            "level": 12,
            "message": "hello Friends !"
        },
    ]

    return (
        <div className='max-w-[260px] w-full py-5 bg-dark-200 fixed left-0 h-[calc(100vh-75px)]'>
            {/* Header section with Chat Room title and online users count */}
            <div className='flex justify-between items-center pb-5 px-4 border-b border-white-8'>
                <h3 className='text-white font-inter text-lg font-medium'>Chat Room</h3>
                <div className='flex gap-1.5 items-center'>
                    <Icons type='online' />
                    <span className='text-light-100 text-sm font-inter'>600 Online</span>
                </div>
            </div>

            {/* User chat list */}
            <UsersChat usersChatsData={usersChatsData} />

            {/* Footer section with input for typing messages */}
            <div className='px-4 py-5 bg-dark-200'>
                <div className='p-3.5 flex gap-3.5 justify-between bg-dark-100 rounded-md '>
                    {/* Input for typing messages */}
                    <input type="text" placeholder='Type Message' className='bg-transparent outline-none text-white text-sm font-normal placeholder:text-white' />

                    {/* Options menu */}
                    <div className='w-5 h-5 cursor-pointer'>
                        <Icons type='verticalDots' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
