import type { Meta, StoryObj } from "@storybook/react";
import Badge from "@/components/ui/badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ul className="list-none">
        <Story />
      </ul>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    term: "React",
  },
};

export const LongText: Story = {
  args: {
    term: "TypeScript",
  },
};

export const ShortText: Story = {
  args: {
    term: "AI",
  },
};

