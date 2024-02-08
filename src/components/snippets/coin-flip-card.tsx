"use client";
import { Icons } from "@/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";


// Interface for the data structure of each flip card
interface flipCardData {
  nftImage: string;
  nftName: string,
  amount: number,
  opponent1: string,
  opponent1Level: number,
  opponent2: string,
  opponent2Level: number,
  personOneCoins: number,
  personTwoCoins: number,
  joiningAmount: number,
}

// Interface for the props of the CoinFlipCard component
interface cardData {
  data: flipCardData;
}

const CoinFlipCard = ({ data }: cardData) => {
  // State to manage the flipping animation and the result of the coin flip
  const [flipping, setFlipping] = useState(false);
  const [won, setWon] = useState<number>();


  // Function to handle the coin flip animation
  const handleFlip = () => {
    if (!flipping) {
      setFlipping(true);
      setTimeout(() => {
        setFlipping(false);
      }, 3000);
    }
  };

  // Effect to set the result of the coin flip when the component mounts
  useEffect(() => {
    setWon(getRandomInt());
  }, []);

  // Function to generate a random number (0 or 1) representing the result of the coin flip
  const getRandomInt = function () {
    return Math.floor(Math.random() * 2);
  }

  return (
    <div className="flipcoin-card w-full">
      {
        flipping &&
        <>
          <div className="bg-black absolute left-0 right-0 top-0 bottom-0 opacity-70 z-10"></div>
          <div className={` absolute left-1/2 top-1/2 -translate-x-[37%] -translate-y-[63%] z-10  backdrop ${flipping ? "active" : ""}`}>
            <div className={`coinflip-coin-container ${flipping ? "active" : ""}`} style={{ animationName: "coinflip-move-3-1" }}>
              <div className={`coinflip-coin-gif ${flipping ? "active" : ""}`} style={{ animationName: "coinflip-rotate-5", backgroundImage: `url(${`/images/example1.png`})` }}>
                <div className={`coinflip-sprite-container ${flipping ? "active" : ""}`}>
                  {/* <div className={`coinflip-sprite ${flipping ? "active" : ""}`} style={{ backgroundImage: `url(${`/images/aalu3.png`})` }} /> */}
                  {/* Conditionally render different sprites based on the result of the coin flip */}
                  {
                    won === 0 ?
                      <div className={`coinflip-sprite ${flipping ? "active" : ""}`} style={{ backgroundImage: `url(${`/images/example1-v6.png`})` }} />
                      : <div className={`coinflip-sprite ${flipping ? "active" : ""}`} style={{ backgroundImage: `url(${`/images/example2-v6.png`})` }} />
                  }
                </div>
              </div>
            </div>
          </div>
        </>
      }
      {/* Display card image and information */}
      <div className="flipCoin-card-image bg-[url('/images/room-image.png')] bg-cover">
        <p className="text-sm font-medium font-inter leading-[16.94px]">{data?.nftName}</p>
        <div className="flex gap-1 items-center">
          <Icons type="bettingCoin" />
          <p className="text-sm font-medium font-inter leading-[16.94px]">{data?.amount}</p>
        </div>
      </div>
      <div className="flipCoin-card-center relative">
        <div className="person">
          <Image src={`/images/${data?.opponent1}`} width={28} height={28} alt="person 1 avtar" className="person1-img" />
          <div className="level">{data?.opponent1Level}</div>
          <Image src='/images/gold-coin-oppp.svg' width={28} height={28} alt="Gold Coin" className="" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Icons type="vs" />
        </div>
        <div className="person !flex-row-reverse">
          <Image src={`/images/${data?.opponent2}`} width={28} height={28} alt="person 1 avtar" className="person1-img" />
          <div className="level2">{data?.opponent2Level}</div>
          <Image src='/images/silver-coin-opp.svg' width={28} height={28} alt="Silver Coin" className="" />
        </div>
      </div>
      {/* Button to initiate the coin flip */}
      <button className="coinflip-btn font-sm font-inter font-medium leading-[16.94px]" onClick={() => { handleFlip(); setWon(getRandomInt()); }}>
        Join For
        <Icons type="bettingCoin" />
        {data?.joiningAmount}
      </button>
    </div>
  );
};

export default CoinFlipCard;
