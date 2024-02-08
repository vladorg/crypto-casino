"use client";

import { Icons } from "@/icons";
import SelectCoinBar from "./select-coin-bar";
import CoinFlipCard from "../snippets/coin-flip-card";
import { useState } from "react";




const Coinflip = () => {
  const amounts = [{ amount: "All" }, { amount: "0.00 - 1.00" }, { amount: "1.00 - 5.00" }, { amount: "5.00 - 10.00" }, { amount: "10.00 - 100.00" }, { amount: "100.00 -" },
  ]
  const [selected, setSelected] = useState<string | undefined>("All");
  const [dropdown, setDropdown] = useState(false);

  // Sample data for CoinFlipCard components
  let cardData = [
    {
      nftImage: "room-image.png",
      nftName: "The Heist NFT",
      amount: 40.00,
      opponent1: "avatar-28.png",
      opponent1Level: "49",
      opponent2: "avatar-28.png",
      opponent2Level: "59",
      personOneCoins: 50,
      personTwoCoins: 52,
      joiningAmount: 5.00,
    },
    {
      nftImage: "room-image.png",
      nftName: "The Heist NFT",
      amount: 40.00,
      opponent1: "avatar-28.png",
      opponent1Level: 49,
      opponent2: "avatar-28.png",
      opponent2Level: 59,
      personOneCoins: 50,
      personTwoCoins: 52,
      joiningAmount: 5.00,
    },
    {
      nftImage: "room-image.png",
      nftName: "The Heist NFT",
      amount: 40.00,
      opponent1: "avatar-28.png",
      opponent1Level: "49",
      opponent2: "avatar-28.png",
      opponent2Level: "59",
      personOneCoins: 50,
      personTwoCoins: 52,
      joiningAmount: 5.00,
    },
    {
      nftImage: "room-image.png",
      nftName: "The Heist NFT",
      amount: 40.00,
      opponent1: "avatar-28.png",
      opponent1Level: "49",
      opponent2: "avatar-28.png",
      opponent2Level: "59",
      personOneCoins: 50,
      personTwoCoins: 52,
      joiningAmount: 5.00,
    },
    {
      nftImage: "room-image.png",
      nftName: "The Heist NFT",
      amount: 40.00,
      opponent1: "avatar-28.png",
      opponent1Level: 49,
      opponent2: "avatar-28.png",
      opponent2Level: 59,
      personOneCoins: 50,
      personTwoCoins: 52,
      joiningAmount: 5.00,
    },
    {
      nftImage: "room-image.png",
      nftName: "The Heist NFT",
      amount: 40.00,
      opponent1: "avatar-28.png",
      opponent1Level: "49",
      opponent2: "avatar-28.png",
      opponent2Level: "59",
      personOneCoins: 50,
      personTwoCoins: 52,
      joiningAmount: 5.00,
    },
    {
      nftImage: "room-image.png",
      nftName: "The Heist NFT",
      amount: 40.00,
      opponent1: "avatar-28.png",
      opponent1Level: "49",
      opponent2: "avatar-28.png",
      opponent2Level: "59",
      personOneCoins: 50,
      personTwoCoins: 52,
      joiningAmount: 5.00,
    },
    {
      nftImage: "room-image.png",
      nftName: "The Heist NFT",
      amount: 40.00,
      opponent1: "avatar-28.png",
      opponent1Level: 49,
      opponent2: "avatar-28.png",
      opponent2Level: 59,
      personOneCoins: 50,
      personTwoCoins: 52,
      joiningAmount: 5.00,
    },
    {
      nftImage: "room-image.png",
      nftName: "The Heist NFT",
      amount: 40.00,
      opponent1: "avatar-28.png",
      opponent1Level: "49",
      opponent2: "avatar-28.png",
      opponent2Level: "59",
      personOneCoins: 50,
      personTwoCoins: 52,
      joiningAmount: 5.00,
    },
    {
      nftImage: "room-image.png",
      nftName: "The Heist NFT",
      amount: 40.00,
      opponent1: "avatar-28.png",
      opponent1Level: 49,
      opponent2: "avatar-28.png",
      opponent2Level: 59,
      personOneCoins: 50,
      personTwoCoins: 52,
      joiningAmount: 5.00,
    },
    {
      nftImage: "room-image.png",
      nftName: "The Heist NFT",
      amount: 40.00,
      opponent1: "avatar-28.png",
      opponent1Level: "49",
      opponent2: "avatar-28.png",
      opponent2Level: "59",
      personOneCoins: 50,
      personTwoCoins: 52,
      joiningAmount: 5.00,
    },

  ];



  return (
    <div className=" max-w-[1132px] w-full mx-auto  bg-dark-100 min-h-[(calc(100vh-88px))] h-full">
      {/* SelectCoinBar component */}
      <SelectCoinBar />

      <div className="flex py-6 gap-6 items-center justify-between">
        {/* Open Games title and count */}

        <div className="flex gap-[10px]">
          <p className="text-lg leading-normal font-inter font-medium text-white">
            Open Games
          </p>
          <p className="text-lg leading-normal font-inter font-medium text-primary">
            {cardData?.length}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-[6px]  items-center">
            <p className="text-xs leading-[14.52px] font-inter font-normal text-light-100"> Amount:</p>
            <div className="relative">
              <div className="flex gap-1.5 items-center cursor-pointer" onClick={() => { setDropdown(!dropdown) }}>
                <Icons type="coin-14" />
                <div className="text-xs leading-[14.52px] font-inter font-normal text-light-100 " >
                  {selected}
                </div>
              </div>
              <div className={`absolute z-10 left-1/2 top-10 -translate-x-1/2 duration-300   ${dropdown ? "opacity-100 visible -translate-y-[2%]" : "opacity-0 invisible"}`}>
                <span className="block w-4 h-4 bg-[#16222A] rotate-45 absolute left-1/2 -translate-x-1/2 -top-[8px] z-0"></span>
                <ul className="p-1.5 bg-dark-600 min-w-[160px] w-full rounded-[3px] border border-white-8 relative z-20">
                  {
                    amounts?.map((item, index) => {
                      return (
                        <li key={index} className="flex gap-2 items-center px-2 py-1.5 hover:bg-white-8 rounded-sm mb-1 cursor-pointer"
                          onClick={() => { setSelected(item?.amount); setDropdown(false) }}>
                          <Icons type="coins" />
                          <span className="text-[13px] font-medium font-inter text-light-100">{item?.amount}</span>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>

          </div>

          {/* Show Games filter */}
          <div className="flex gap-[6px]  items-center">
            <p className="text-sm leading-normal font-inter font-normal whitespace-nowrap text-light-100">
              Show Games:
            </p>
            <p className="text-xs leading-[14.52px] font-inter font-normal text-light-100">
              10
            </p>
          </div>

          {/* Sort By filter */}
          <div className="flex gap-[6px]  items-center">
            <p className="text-sm leading-normal font-inter font-normal whitespace-nowrap text-light-100">
              Sort By:
            </p>
            <p className="text-sm leading-normal font-inter font-normal whitespace-nowrap text-light-100">
              Highest Amount First
            </p>
          </div>

          {/* Sound Off button */}
          <div className="flex gap-[6px]  items-center">
            <Icons type="sound-off" />
            <p className="text-xs leading-[14.52px] font-inter font-normal text-light-100 whitespace-nowrap">
              Sound Off
            </p>
          </div>
        </div>
      </div>

      {/* Grid of CoinFlipCard components */}
      <div className="grid grid-coinflip gap-x-6 gap-y-5">
        {cardData.map((item: any, index: number) => {
          return <CoinFlipCard key={Date.now() + index} data={item} />;
        })}
      </div>

    </div>
  );
};

export default Coinflip;
