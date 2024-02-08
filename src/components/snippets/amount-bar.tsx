"use client";
import { Icons } from "@/icons";
import React, { useState } from "react";

// Interface for defining the props of AmountBar component
interface AmountBarProps {
  amounts: string[]; // List of predefined bet amounts
  px?: string; // Optional prop for horizontal padding
  py?: string; // Optional prop for vertical padding
}

const AmountBar = ({ px = "10px", py = "8px", amounts }: AmountBarProps) => {
  // State to track the current bet amount
  const [amount, setAmount] = useState(0.00);

  // Function to handle changes in the bet amount based on the selected action
  const handleAmount = (elem: string) => {
    switch (elem) {
      case "Clear":
        setAmount(0);
        break;
      case "X2":
        setAmount(amount ** 2);
        break;
      case '1/2':
        setAmount(amount / 2);
        break;
      case "MAX":
        setAmount(amount);
        break;
      default:
        // Using eval to dynamically evaluate the bet amount
        setAmount(eval(`${amount}${elem}`));
        break;
    }
  };

  return (
    <div className={`bg-dark-400 border border-dark-300 rounded-md  flex items-center gap-[10px] justify-between w-full`} style={{ padding: `${px} ${py}` }}>
      {/* Icon for coins */}
      <div className="p-[3px]">
        <Icons type="coins" />
      </div>

      {/* Input field for entering bet amount */}
      <input
        type="text"
        value={amount || ''}
        className="outline-none focus:outline-none text-sm font-medium text-light-100 bg-transparent"
        placeholder="Enter Bet Amount..."
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      {/* Buttons for predefined bet amounts */}
      <div className="flex gap-[6px] items-center">
        {amounts.map((item: string, index: number) => (
          <div key={item + index} className="py-[3px] px-[5px] text-center rounded-[1px] w-10 bg-white-8 cursor-pointer" onClick={() => handleAmount(item)}>
            <p className="text-[11px] leading-normal font-medium text-light-100 hover:text-white">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmountBar;
