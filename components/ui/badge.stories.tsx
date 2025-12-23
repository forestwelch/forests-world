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
    term: "TypeScript and JavaScript",
  },
};

export const Multiple: Story = {
  render: () => (
    <ul className="list-none flex flex-wrap gap-2">
      <Badge term="React" />
      <Badge term="TypeScript" />
      <Badge term="Next.js" />
      <Badge term="Tailwind CSS" />
      <Badge term="Node.js" />
    </ul>
  ),
};
