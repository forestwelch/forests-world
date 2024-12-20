import { useStep } from "@/components/StepContext";

const IntroductionButton = () => {
  const { incrementStep } = useStep();

  return (
    <h2 className="text-2xl font-semibold">
      Click the button to start your reading.
      <button
        onClick={incrementStep}
        className="mt-4 p-4 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Next
      </button>
    </h2>
  );
};

export default IntroductionButton;
