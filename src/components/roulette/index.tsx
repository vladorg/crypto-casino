"use client"
// Import necessary dependencies and components
import Image from 'next/image'
import AmountBar from '../snippets/amount-bar'
import PlaceBetSec from './place-bet-sec'
import LeaderBoardSec from './leader-board-sec'
import { useEffect, useState } from 'react'

// Main Roulette component
const Roulette = () => {
    // Array of betting amounts
    let amounts = ['Clear', '+0.01', '+0.1', '+1', '+10', '+100', '1/2', 'X2', 'MAX'];

    const endTime = Date.now() + 14 * 1000; // Set the end time 14 Seconds from now

    // State to manage countdown timer
    const [countdown, setCountdown] = useState(calculateCountdown());

    // Function to calculate countdown time
    function calculateCountdown() {
        return Math.max(0, endTime - Date.now());
    }

    // Effect to update countdown every 10 milliseconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(calculateCountdown());
        }, 10); // Update every 10 milliseconds

        // Clear the interval when the countdown reaches 0
        return () => {
            clearInterval(timer);
        };
    }, []);

    // Function to format time from milliseconds
    const formatTime = (timeInMilliseconds: number) => {
        const totalSeconds = Math.floor(timeInMilliseconds / 1000);
        const seconds = totalSeconds % 60;
        const milliseconds = timeInMilliseconds % 1000;
        const formattedSeconds = String(seconds).padStart(2, '0');
        const formattedMilliseconds = String(milliseconds).slice(0, 2).padStart(2, '0');
        return `${formattedSeconds}.${formattedMilliseconds}`;
    };


    const order: number[] = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4];

    // Function to initialize the wheel
    const initWheel = () => {
        const wheel = document.querySelector('.roulette-wrapper .wheel') as HTMLElement;
        let row = '';

        // Creating rows of coins in the wheel
        row += "<div class='row'>";
        row += "  <div class='wheel_coin red_coin '><\/div>";
        row += "  <div class='wheel_coin black_coin '><\/div>";
        row += "  <div class='wheel_coin red_coin'><\/div>";
        row += "  <div class='wheel_coin green_coin '><\/div>";
        row += "  <div class='wheel_coin black_coin '><\/div>";
        row += "  <div class='wheel_coin red_coin '><\/div>";
        row += "  <div class='wheel_coin green_coin '><\/div>";
        row += "  <div class='wheel_coin black_coin '><\/div>";
        row += "  <div class='wheel_coin red_coin '><\/div>";
        row += "  <div class='wheel_coin green_coin '><\/div>";
        row += "  <div class='wheel_coin black_coin '><\/div>";
        row += "  <div class='wheel_coin red_coin '><\/div>";
        row += "  <div class='wheel_coin green_coin '><\/div>";
        row += "  <div class='wheel_coin black_coin '><\/div>";
        row += "  <div class='wheel_coin red_coin '><\/div>";
        row += "<\/div>";

        // Adding rows to the wheel
        for (let x = 0; x < 29; x++) {
            wheel.innerHTML += row;
        }
    };

    // Function to spin the wheel
    const spinWheel = () => {
        const wheel = document.querySelector('.roulette-wrapper .wheel') as HTMLElement;
        const position = Math.floor(Math.random() * order.length);
        const rows = 12;
        const card = 75 + 3 * 2;
        let landingPosition = rows * 15 * card + position * card;
        const randomize = Math.floor(Math.random() * 75) - 75 / 2;

        landingPosition += randomize;

        const object = {
            x: Math.floor(Math.random() * 50) / 100,
            y: Math.floor(Math.random() * 20) / 100,
        };

        wheel.style.transitionTimingFunction = `cubic-bezier(0, ${object.x}, ${object.y}, 1)`;
        wheel.style.transitionDuration = '6s';
        wheel.style.transform = `translate3d(-${landingPosition}px, 0px, 0px)`;

        setTimeout(() => {
            // Gradually ease out the transition
            wheel.style.transitionTimingFunction = 'ease-out';
            wheel.style.transitionDuration = '2s';

            wheel.style.transform = `translate3d(-${landingPosition}px, 0px, 0px)`;
        }, 4 * 1000); // Adjust the time accordingly
    };

    useEffect(() => {
        initWheel();
    }, []);

    useEffect(() => {
        // spin the wheel when the countdown reaches 0
        if (countdown <= 0) {
            spinWheel();
        }
    }, [countdown])

    const previousCoins = ["red-coin-24.png", "green-coin-24.png", "black-coin-24.png", "red-coin-24.png", "green-coin-24.png", "black-coin-24.png", "red-coin-24.png", "green-coin-24.png", "black-coin-24.png",]
    return (
        <div className='container'>
            {/* Roulette wheel */}
            <div className=" relative mt-[50px] mb-[42px] max-w-[1132px] mx-auto">
                <div className='roulette-wrapper'>
                    <div className="wheel"></div>
                </div>
                <span className={`bg-reddish w-[4px] rounded h-[120px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 ${countdown <= 0 ? "block" : "hidden"}`}></span>
                <div className={`wheel_overlay ${countdown <= 0 ? " mask" : "wheel_mask"}`}></div>
                <div className={`absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ${countdown <= 0 ? "hidden" : "block"}`}>
                    <span className={`mb-1 text-white text-sm font-normal uppercase font-inter`}>Rolling</span>
                    <span className='block font-inter text-white uppercase font-numeric text-[28px] leading-[42px] font-bold'>{formatTime(countdown)}</span>
                </div>
            </div>

            {/* Previous Rolls */}
            <div className='flex gap-[30px] items-center justify-center mb-6'>
                <div className='flex gap-3 items-center'>
                    <span className='text-light-100 font-inter text-[11px] font-semibold'>PREVIOUS ROLLS</span>
                    <div className='relative'>
                        {/* <span className='absolute h-full w-full bg-contain block  bg-gradient-to-l from-transparent  to-dark-100 '></span> */}
                        <ul className='flex items-center gap-[5px]'>
                            {
                                previousCoins?.map((coin, index) => {
                                    return (
                                        <li key={index}>
                                            <Image src={`/images/${coin}`} alt='coin image' width={24} height={24} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <span className='font-inter text-[11px] font-semibold text-[#576A78]'>Last 100</span>
                    <div className='flex gap-1 items-center'>
                        <Image src="/images/green-coin-24.png" alt='coin image' width={16} height={16} />
                        <span className='text-xs font-medium font-inter text-[#D3E0E9]'> 40</span>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <Image src="/images/black-coin-24.png" alt='coin image' width={16} height={16} />
                        <span className='text-xs font-medium font-inter text-[#D3E0E9]'> 40</span>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <Image src="/images/red-coin-24.png" alt='coin image' width={16} height={16} />
                        <span className='text-xs font-medium font-inter text-[#D3E0E9]'> 40</span>
                    </div>
                </div>
            </div>

            {/* Betting amounts bar */}
            <div className='max-w-[688px] w-full mx-auto mb-8'>
                <AmountBar amounts={amounts} px="10px" py="8px" />
            </div>

            {/* Place Bet Section */}
            <PlaceBetSec />

            {/* Leaderboard Section */}
            <LeaderBoardSec />
        </div>
    )
}

export default Roulette