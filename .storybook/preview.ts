import type { Preview } from "@storybook/nextjs-vite";
import React, { useEffect } from "react";
import "../app/globals.css";

// Theme wrapper component that applies theme class to document
const ThemeWrapper = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: string;
}) => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      document.body.className = "antialiased";

      // Set canvas background to match theme
      const canvas =
        document.querySelector('[data-is-root-path="true"]') ||
        document.querySelector(".sb-story") ||
        document.body;
      if (canvas) {
        (canvas as HTMLElement).style.backgroundColor =
          theme === "dark" ? "#000000" : "#ffffff";
      }
    }
  }, [theme]);

  return React.createElement(
    "div",
    {
      style: {
        backgroundColor: theme === "dark" ? "#000000" : "#ffffff",
        minHeight: "100vh",
        width: "100%",
      },
    },
    children
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    backgrounds: {
      default: "transparent",
      disable: true, // Disable Storybook's background addon since we're using custom themes
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "dark",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "dark";
      return React.createElement(ThemeWrapper, {
        theme,
        children: React.createElement(Story),
      });
    },
  ],
};

export default preview;
