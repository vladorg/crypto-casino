import React from 'react'
import PlaceBet from '../snippets/place-bet'

const PlaceBetSec = () => {
    // data for place bets
    const placeBetData = [
        {
            coin: "red-coin.png",
            category: "Win 2X",
            totalBetsAmount: 350.00,
            betUsersData: [
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 1,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 2,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 3,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 5,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 6,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 7,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
            ]
        },

        {
            coin: "green-coin.png",
            category: "Win 14X",
            totalBetsAmount: 350.00,
            betUsersData: [
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 8,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 32,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 44,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 55,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 77,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 45,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 88,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 50,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
            ]
        },
        {
            coin: "black.png",
            category: "Win 2X",
            totalBetsAmount: 350.00,
            betUsersData: [
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 52,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 53,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 54,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 55,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 56,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 57,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
                {
                    avatar: "avatar.png",
                    rank: "rank.svg",
                    level: 58,
                    userName: "Devon Lane",
                    betAmount: 200.00,
                },
            ]
        },
    ]

    return (
        <div className='flex gap-6 items-start justify-between mb-6'>
            {/* PlaceBet component to display place bet information */}
            <PlaceBet placeBetData={placeBetData} />
        </div>
    )
}

export default PlaceBetSec
