import { useStep } from "@/components/StepContext";

const IntroductionButton = () => {
  const { incrementStep } = useStep();

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        onClick={incrementStep}
        className="mt-4 p-4 text-2xl font-light transition:bg duration-1000 rounded-xl border-dotted border button"
      >
        Commence your tarot reading.
      </button>
    </div>
  );
};

export default IntroductionButton;
