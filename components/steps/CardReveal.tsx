import Image from "next/image";
import tarotCards from "@/public/assets/tarot/cards.json";

const CardReveal = () => {
  const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h2 className="text-6xl font-extralight whitespace-nowrap">
        {card.name}
      </h2>
      <Image
        src={`/assets/tarot/images/${card.image}`}
        alt={card.name}
        width={300}
        height={300}
        className="rounded-2xl"
      />
      <p className="text-xl font-light text-center">{card.description}</p>
    </div>
  );
};

export default CardReveal;
