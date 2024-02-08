// Importing necessary dependencies and components
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
import { Icons } from '@/icons'


// LeaderBoardSec component
const LeaderBoardSec = () => {

    // data for the leaderboard
    const leaderBoardData = [
        {
            rankIcon: "rank.svg",
            rank: "1st",
            userName: "Devon Lane",
            totalInvested: "33, 830.06",
            prize: "3, 500.00",
        },
        {
            rankIcon: "rank.svg",
            rank: "2nd",
            userName: "Devon Lane",
            totalInvested: "33, 830.06",
            prize: "3, 500.00",
        },
        {
            rankIcon: "rank.svg",
            rank: "3rd",
            userName: "Devon Lane",
            totalInvested: "33, 830.06",
            prize: "3, 500.00",
        },
        {
            rankIcon: "rank.svg",
            rank: "4th",
            userName: "Devon Lane",
            totalInvested: "33, 830.06",
            prize: "3, 500.00",
        },
        {
            rankIcon: "rank.svg",
            rank: "5th",
            userName: "Devon Lane",
            totalInvested: "33, 830.06",
            prize: "3, 500.00",
        },
    ]

    return (
        <div className='py-5 px-6 bg-dark-100 rounded-[10px]'>
            {/* Header section with title and select dropdown */}
            <div className='flex items-center gap-2 justify-between pb-4 border-b border-white-8'>
                <h2 className='font-inter text-white font-medium'>Leaderboard</h2>
                {/* Select dropdown for time duration */}
                <Select>
                    <SelectTrigger className="w-[83x] text-white gap-1.5 border-none rounded-md px-2 py-1 outline-none bg-white-4 focus:border-none font-inter text-xs font-normal tracking-wide">
                        <SelectValue placeholder="1 Month" />
                    </SelectTrigger>
                    <SelectContent className='bg-dark-100 text-white'>
                        <SelectItem value="1 week" className=''>1 week</SelectItem>
                        <SelectItem value="1 Month" >1 Month</SelectItem>
                        <SelectItem value="6 Month" >6 Month</SelectItem>
                        <SelectItem value="1 Year">1 Year</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Leaderboard table */}
            <Table className='border-spacing-y-2 border-separate '>
                <TableHeader>
                    <TableRow className='h-[45px] border-none hover:bg-transparent'>
                        <TableHead className="w-20  text-light-100 font-inter text-xs">Rank</TableHead>
                        <TableHead >Name</TableHead>
                        <TableHead>Total Invested</TableHead>
                        <TableHead className="text-right">Prize</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        // Mapping through leaderboard data to generate rows
                        leaderBoardData?.map((userLeaderboard, index) => {
                            return (
                                <TableRow key={userLeaderboard?.rank} className=' bg-[#141C22] border-none' >
                                    <TableCell className="font-normal text-white text-xs font-inter flex items-center gap-1.5 py-2.5">
                                        {
                                            index < 3 &&
                                            <Image src={`/images/${userLeaderboard?.rankIcon}`} width={14} height={14} alt='Rank Icon' />
                                        }
                                        {userLeaderboard?.rank}
                                    </TableCell>
                                    <TableCell className="font-medium text-white text-xs font-inter py-2.5">{userLeaderboard?.userName}</TableCell>
                                    <TableCell className="font-medium text-white text-xs font-inter flex gap-1.5 items-center py-2.5">
                                        <div className='flex items-center gap-1.5'>
                                            <Icons type="dollar" />
                                            {userLeaderboard?.totalInvested}
                                        </div>
                                    </TableCell>
                                    <TableCell className="font-medium text-white text-xs font-inter text-right py-2.5">
                                        <div className='flex items-center gap-1.5 justify-end'>
                                            <Icons type="dollar" />
                                            {userLeaderboard?.prize}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default LeaderBoardSec
