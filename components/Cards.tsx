import { getUserCards } from "@/lib/actions/cards";
import { loggedInUserId } from "@/lib/actions/user";
import { redirect } from "next/navigation";
import Card from "./Card";

const Cards = async ({
  isOverLapping = false,
  upperLimit,
}: {
  isOverLapping?: boolean;
  upperLimit?: number;
}) => {
  const userId = await loggedInUserId();
  if (!userId) {
    redirect("/login");
  }
  let cards = await getUserCards(userId);
  const nCards = cards.length;
  if (upperLimit && nCards > 0) {
    cards = cards.slice(0, upperLimit);
  }
  return (
    <>
      {cards.map((card, index) => {
        const customStyle = {
          top: `${index * 20}px`,
          left: `${index * 20}px`,
          zIndex: nCards - index,
          position: "absolute",
        };
        return (
          <Card
            {...card}
            customStyle={isOverLapping ? customStyle : {}}
            key={card.cardId}
          />
        );
      })}
    </>
  );
};

export default Cards;
