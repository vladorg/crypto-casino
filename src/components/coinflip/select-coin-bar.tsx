"use client"; // Assuming this is a custom directive or comment

import Image from "next/image";
import { useState } from "react";
import AmountBar from "../snippets/amount-bar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectCoinBar = () => {
  const [selectCoin, setSelectCoin] = useState(0);

  // Array of amounts for AmountBar
  let amounts = ["Clear", "+1", "+10", "+100", "1/2", "X2", "MAX"];

  return (
    <div className="flex gap-[10px] pb-6 border-b border-white-8 items-center mt-9">
      {/* Coinflip title */}
      <p className="text-lg font-medium text-white w-full font-inter">Coinflip</p>

      <div className="flex gap-[10px] items-center">
        {/* Coin selection */}
        <div className="bg-dark-400 border border-dark-300 rounded-md py-[5px] px-3 flex items-center gap-[10px] max-w-[172px] w-full">
          <p className="text-[13px] font-inter text-light-100 whitespace-nowrap">
            Select Side-
          </p>
          <div className="flex gap-2 items-center min-w-[56px] w-full">
            {/* Golden coin selection */}
            <Image
              src="/images/golden-coin.png"
              width={24}
              height={24}
              alt="golden-coin"
              className={`cursor-pointer ${selectCoin === 1 ? "opacity-1" : "opacity-[0.4]"
                }`}
              onClick={() => setSelectCoin(1)}
            />

            {/* Silver coin selection */}
            <Image
              src="/images/silver-coin.png"
              width={24}
              height={24}
              alt="silver-coin"
              className={`cursor-pointer ${selectCoin === 2 ? "opacity-1" : "opacity-[0.4]"
                }`}
              onClick={() => setSelectCoin(2)}
            />
          </div>
        </div>

        {/* AmountBar component */}
        <AmountBar amounts={amounts} py="7.5px" px="12px"/>

        {/* Select component for multiplier */}
        <div className="">
          <Select>
            <SelectTrigger className="w-[74px] text-light-100 border-none rounded-md px-2.5 py-[9px] outline-none bg-dark-400 focus:border-none">
              <SelectValue placeholder="1X" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2x">2X</SelectItem>
              <SelectItem value="3x">3X</SelectItem>
              <SelectItem value="4x">4x</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Create Game button */}
        <Button variant='primary'>Create Game</Button>
      </div>
    </div>
  );
};

export default SelectCoinBar;
