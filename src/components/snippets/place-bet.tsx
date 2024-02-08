"use client"
// Importing necessary dependencies and components
import { Icons } from '@/icons'
import Image from 'next/image'
import React from 'react'

// Define interfaces for the bet user data and bet category data
interface BetUserData {
    avatar: string;
    rank: string;
    level: number;
    userName: string;
    betAmount: number;
}

interface BetCategoryData {
    coin: string;
    category: string;
    totalBetsAmount: number;
    betUsersData: BetUserData[];
}

// Define the props interface for the PlaceBet component
interface PlaceBetDataProps {
    placeBetData: BetCategoryData[];
}


// PlaceBet component
const PlaceBet = ({ placeBetData }: PlaceBetDataProps) => {

    return (
        <>
            {
                placeBetData?.map((placeBet) => {
                    return (
                        <div key={placeBet?.coin} className='w-full'>
                            {/* Container for each bet category */}
                            <div className='py-[7px] px-4 cursor-pointer rounded-[7px] bg-[#333541] justify-between flex items-center mb-2.5'>
                                <div className='flex gap-2 items-center'>
                                    {/* Display the coin icon */}
                                    <Image src={`/images/${placeBet?.coin}`} alt={placeBet?.coin} width={36} height={36} />
                                    <span className='block text-white text-[15px] font-medium font-inter'>Place Bet</span>
                                </div>
                                <span className='block text-light-100 text-sm font-medium font-inter leading-[16.94px]'>{placeBet?.category}</span>
                            </div>
                            {/* Container for bet details */}
                            <div className='p-[15px] rounded-[7px] bg-[#16171C] border border-dark-500 max-h-[500px] overflow-y-auto scroll-y'>
                                <div className='flex justify-between items-center pb-3 border-b border-dark-500'>
                                    {/* Display total number of bets */}
                                    <span className='font-inter text-xs text-light-100'>{placeBet?.betUsersData?.length} Bets Total</span>
                                    {/* Display total bets amount */}
                                    <div className='flex gap-2 items-center'>
                                        <Icons type="coins" />
                                        <span className='font-inter text-xs font-medium text-light-100'>{placeBet?.totalBetsAmount}</span>
                                    </div>
                                </div>

                                {/* List of bet users */}
                                <ul className='pt-3'>
                                    {
                                        placeBet?.betUsersData?.map((users) => {
                                            return (
                                                <li key={users?.level} className='flex gap-2.5 items-center justify-between pb-3 last:pb-0'>
                                                    <div className='flex gap-2 items-center'>
                                                        {/* Display user avatar */}
                                                        <Image src={`/images/${users?.avatar}`} width={20} height={20} alt='User Avtar' />
                                                        {/* Display user rank and level */}
                                                        <div className='px-1.5 py-[3px] rounded bg-blue-40 flex gap-1 justify-center w-[45px] text-center items-center '>
                                                            <Image src={`/images/${users?.rank}`} width={14} height={14} alt='User rank' />
                                                            <span className='text-xs font-inter text-white'>{users?.level}</span>
                                                        </div>
                                                        {/* Display username */}
                                                        <span className='text-light-100 font-inter text-xs'>{users?.userName}</span>
                                                    </div>
                                                    {/* Display user's bet amount */}
                                                    <span className='text-light-100 text-xs font-medium font-inter'>{users?.betAmount}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    )
                })

            }
        </>





    )
}

export default PlaceBet
