import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "ui";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", defaultValue: "Button" },
    variant: { control: "select" },
    size: { control: "select" },
    rounded: {
      options: ["sm", "md", "sm", "lg", "xl", "full"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
        type: { summary: "sm | md | sm | lg | xl | full" },
      },
    },
    fullWidth: {
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    onClick: { action: "clicked", type: "function" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
    rounded: "xl",
  },
};

export const OutlinePrimary: Story = {
  args: {
    variant: "outline-primary",
    children: "Button",
    rounded: "sm",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const OutlineSecondary: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: {
    variant: "outline-secondary",
    children: "Button",
  },
};

export const GhostPrimary: Story = {
  args: {
    variant: "ghost-primary",
    children: "Button",
  },
};

export const GhostSecondary: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: {
    variant: "ghost-secondary",
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: "Icon",
  },
};
