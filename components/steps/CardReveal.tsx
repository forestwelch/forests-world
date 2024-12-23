import Image from "next/image";
import tarotCards from "@/public/assets/tarot/cards.json";
import Link from "next/link";

const CardReveal = () => {
  const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];

  return (
    <figure className="flex flex-col justify-center items-center gap-8">
      <h2 className="text-8xl font-thin text-center">{card.name}</h2>
      <Image
        src={`/assets/tarot/images/${card.image}`}
        alt={card.name}
        width={300}
        height={300}
        className="rounded-2xl"
      />
      <figcaption className="text-xl font-light text-center">
        {card.description}
      </figcaption>
      <p className="text-lg font-light text-center">
        If you would like more, please{" "}
        <Link className="font-bold contact" href="/contact">
          ask me
        </Link>{" "}
        about my current rates.
      </p>
    </figure>
  );
};

export default CardReveal;
