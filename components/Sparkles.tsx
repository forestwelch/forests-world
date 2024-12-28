import React from "react";

const DEFAULT_COLOR = "hsl(50deg, 100%, 80%)";

// Utility helper for random number generation
const random = (min: number = 50, max: number = 500) =>
  Math.floor(Math.random() * (max - min)) + min;

const useRandomInterval = (
  callback: () => void,
  minDelay: number,
  maxDelay: number
) => {
  const timeoutId = React.useRef<number | undefined>(undefined);
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const handleTick = () => {
      const nextTickAt = random(minDelay, maxDelay);

      timeoutId.current = window.setTimeout(() => {
        savedCallback.current();
        handleTick();
      }, nextTickAt);
    };

    handleTick();

    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);

  const cancel = React.useCallback(function () {
    window.clearTimeout(timeoutId.current);
  }, []);

  return cancel;
};

// const generateRandomColor = () => {
//   const hue = Math.floor(Math.random() * 360); // Random hue: 0-359
//   const saturation = Math.floor(Math.random() * 100); // Random saturation: 0-100%
//   const lightness = Math.floor(Math.random() * 100); // Random lightness: 0-100%
//   return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
// };

const generateSparkle = (color = DEFAULT_COLOR) => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(5, 10),
    style: {
      top: random(0, 80) + "%",
      left: random(0, 100) + "%",
    },
  };
};

interface SparkleType {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: React.CSSProperties;
}

const Sparkle = ({
  color,
  size,
  style,
}: {
  color: string;
  size: number;
  style: React.CSSProperties;
}) => {
  const path =
    "M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z";

  return (
    <span
      style={style}
      className="absolute block pointer-events-none animate-comeInOut"
    >
      <svg
        className="block animate-spin"
        width={size}
        height={size}
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fill={color} />
      </svg>
    </span>
  );
};

function Sparkles({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  const [sparkles, setSparkles] = React.useState<SparkleType[]>([]);

  useRandomInterval(
    () => {
      const now = Date.now();
      const sparkle = generateSparkle(color);
      const nextSparkles = sparkles.filter(
        (sparkle) => now - sparkle.createdAt < 1000
      );
      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    50,
    500
  );

  return (
    <div className="relative inline-block">
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Sparkles;
