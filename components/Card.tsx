"use client";

// TODO: Add passkey check for showing private info
import { CARD_TYPE } from "@/constants";
import { formatCardNumber, getCardType } from "@/lib/utils";
import React, { useState } from "react";
import type { ReactNode } from "react";

interface CardProps {
  cardNumber: string;
  bankName: string;
  cardHolderName: string;
  expirationDate: string;
  cvv: string;
  customStyle?: object;
}

interface CardLayoutProps {
  header: string;
  main: string;
  footer: string | ReactNode;
}

const getBgGradient = (cardType: CARD_TYPE): string => {
  switch (cardType) {
    case CARD_TYPE.MASTERCARD:
      return "bg-gradient-to-tr from-[#cc0000] via-[#ff9900] to-[#000066]";

    case CARD_TYPE.VISA:
      return "bg-gradient-to-tr from-[#1a1f71] to-[#fcbf2d]";

    case CARD_TYPE.RUPAY:
      return "bg-gradient-to-tr from-[#54138a] to-[#ffb20d]";
    default:
      return "bg-gradient-to-tr from-gray-400 to-gray-600";
  }
};

const Card = ({
  cardNumber,
  bankName,
  cardHolderName,
  expirationDate,
  cvv,
  customStyle,
}: CardProps) => {
  const cardType = getCardType(cardNumber);
  const bgGradient = getBgGradient(cardType);
  const formattedCardNumber = formatCardNumber(cardNumber);
  const [shouldShowPrivateData, setShouldShowPrivateData] = useState(false);

  return (
    <div
      className={`h-40 w-64 relative rounded-3xl border text-white p-4 ${bgGradient}`}
      style={customStyle}
      onClick={() => setShouldShowPrivateData((prev) => !prev)}
    >
      {shouldShowPrivateData ? (
        <CardLayout
          header={bankName}
          main={formattedCardNumber}
          footer={
            <>
              <span>{expirationDate}</span>
              <span className="border p-1 px-2 bg-gradient-to-r from-[#c5cfe2] to-[#d3d6db] text-black">
                {cvv}
              </span>
            </>
          }
        />
      ) : (
        <CardLayout header={bankName} main={cardType} footer={cardHolderName} />
      )}
    </div>
  );
};

const CardLayout = ({ header, main, footer }: CardLayoutProps) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className=" font-inter font-semibold text-base">{header}</div>
      <div>
        <div className=" font-mono font-semibold text-sm">
          {main.toUpperCase()}
        </div>
        <div className="font-mono font-semibold text-sm flex justify-between items-center">
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Card;
