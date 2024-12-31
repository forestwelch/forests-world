import Image from "next/image";
import tarotCards from "@/public/tarot/cards.json";

const CardReveal = () => {
  const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];

  return (
    <figure className="flex flex-col gap-8">
      <h2 className="text-4xl font-light">{card.name}</h2>
      <Image
        src={`/tarot/images/${card.image}`}
        alt={card.name}
        width={300}
        height={300}
        className="rounded-2xl"
      />
      <figcaption className="text-lg font-light">{card.description}</figcaption>
      <p className="text-md font-light">
        If you would like more, please contact me about my current rates.
      </p>
    </figure>
  );
};

export default CardReveal;
