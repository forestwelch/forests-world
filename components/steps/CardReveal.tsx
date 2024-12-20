import Image from "next/image";
import tarotCards from "@/public/assets/tarot/cards.json";

const CardReveal = () => {
  const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];

  return (
    <div className="card-display fade-in center">
      <Image
        src={`/assets/tarot/images/${card.image}`}
        alt={card.name}
        width={300}
        height={300}
      />
      <h3>{card.name}</h3>
      <p>{card.description}</p>
    </div>
  );
};

export default CardReveal;
