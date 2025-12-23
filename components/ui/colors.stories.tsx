import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Design System/Colors",
  parameters: {
    layout: "fullscreen",
    docs: {
      canvas: {
        className: "dark:bg-gray-950",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

// Color swatch component
const ColorSwatch = ({
  name,
  className,
  hex,
  hsl,
}: {
  name: string;
  className: string;
  hex?: string;
  hsl?: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`w-full h-24 rounded-lg border border-gray-200 dark:border-gray-700 ${className}`}
      />
      <div className="text-sm">
        <div className="font-semibold text-gray-900 dark:text-gray-100">
          {name}
        </div>
        <div className="text-gray-600 dark:text-gray-400 font-mono text-xs mt-1">
          {className}
        </div>
        {hex && (
          <div className="text-gray-500 dark:text-gray-500 font-mono text-xs">
            {hex}
          </div>
        )}
        {hsl && (
          <div className="text-gray-500 dark:text-gray-500 font-mono text-xs">
            {hsl}
          </div>
        )}
      </div>
    </div>
  );
};

export const LightMode: Story = {
  render: () => (
    <div className="p-8 bg-white min-h-screen dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          Light Mode Color Palette
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Light Palette (Primary Accent)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <ColorSwatch name="Light 200" className="bg-light-200" />
            <ColorSwatch name="Light 300" className="bg-light-300" />
            <ColorSwatch name="Light 500" className="bg-light-500" />
            <ColorSwatch name="Light 600" className="bg-light-600" />
            <ColorSwatch name="Light 700" className="bg-light-700" />
            <ColorSwatch name="Light 900" className="bg-light-900" />
          </div>
          <div className="mt-4 p-4 bg-light-50 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Usage:</strong> Primary accent color for light mode
              (currently mapped to haiti). Used in badges, hover states, and
              interactive elements.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Neutral Grays
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <ColorSwatch name="Gray 200" className="bg-gray-200" />
            <ColorSwatch name="Gray 300" className="bg-gray-300" />
            <ColorSwatch name="Gray 400" className="bg-gray-400" />
            <ColorSwatch name="Gray 600" className="bg-gray-600" />
            <ColorSwatch name="Gray 700" className="bg-gray-700" />
            <ColorSwatch name="Gray 800" className="bg-gray-800" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Usage Examples
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-light-200/50 border border-light-900/20 rounded-lg">
              <p className="text-light-900 font-medium">
                Badge background example
              </p>
            </div>
            <div className="p-4 bg-light-700/10 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                Background accent example (light-700/10)
              </p>
            </div>
            <a
              href="#"
              className="inline-block font-semibold text-gray-800 dark:text-gray-200 hover:text-light-700 transition-colors duration-150"
            >
              Link hover example →
            </a>
          </div>
        </section>
      </div>
    </div>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <div className="p-8 bg-gray-950 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-100">
          Dark Mode Color Palette
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">
            Dark Palette (Primary Accent)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <ColorSwatch name="Dark 200" className="bg-dark-200" />
            <ColorSwatch name="Dark 400" className="bg-dark-400" />
            <ColorSwatch name="Dark 500" className="bg-dark-500" />
            <ColorSwatch name="Dark 700" className="bg-dark-700" />
            <ColorSwatch name="Dark 900" className="bg-dark-900" />
          </div>
          <div className="mt-4 p-4 bg-dark-950 rounded-lg border border-dark-800">
            <p className="text-sm text-gray-300">
              <strong>Usage:</strong> Primary accent color for dark mode
              (currently mapped to everglade). Used in badges, hover states, and
              interactive elements.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">
            Neutral Grays
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <ColorSwatch name="Gray 200" className="bg-gray-200" />
            <ColorSwatch name="Gray 300" className="bg-gray-300" />
            <ColorSwatch name="Gray 400" className="bg-gray-400" />
            <ColorSwatch name="Gray 600" className="bg-gray-600" />
            <ColorSwatch name="Gray 700" className="bg-gray-700" />
            <ColorSwatch name="Gray 800" className="bg-gray-800" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">
            Usage Examples
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-dark-900/50 border border-dark-200/20 rounded-lg">
              <p className="text-dark-200 font-medium">
                Badge background example
              </p>
            </div>
            <div className="p-4 bg-dark-500/10 rounded-lg border border-dark-800">
              <p className="text-gray-200">
                Background accent example (dark-500/10)
              </p>
            </div>
            <a
              href="#"
              className="inline-block font-semibold text-gray-200 hover:text-dark-400 transition-colors duration-150"
            >
              Link hover example →
            </a>
          </div>
        </section>
      </div>
    </div>
  ),
};

export const Comparison: Story = {
  render: () => (
    <div className="p-8 min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          Theme Comparison
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Light Mode
            </h2>
            <div className="space-y-4">
              <div className="p-3 bg-light-200/50 border border-light-900/20 rounded-lg">
                <p className="text-light-900 font-medium text-sm">Badge</p>
              </div>
              <a
                href="#"
                className="block font-semibold text-gray-800 hover:text-light-700 transition-colors"
              >
                Link Example →
              </a>
              <div className="p-3 bg-light-700/10 rounded-lg">
                <p className="text-gray-800 text-sm">Background accent</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-950 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">
              Dark Mode
            </h2>
            <div className="space-y-4">
              <div className="p-3 bg-dark-900/50 border border-dark-200/20 rounded-lg">
                <p className="text-dark-200 font-medium text-sm">Badge</p>
              </div>
              <a
                href="#"
                className="block font-semibold text-gray-200 hover:text-dark-400 transition-colors"
              >
                Link Example →
              </a>
              <div className="p-3 bg-dark-500/10 rounded-lg border border-dark-800">
                <p className="text-gray-200 text-sm">Background accent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
