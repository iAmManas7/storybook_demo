// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component : Button,
  tags:['autodocs'], // helps generate docs automatically
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "red" }],
    },
  },
  
}

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary : Story = {
  args:{
    label:'Primary Button',
    primary : true,
    size: 'medium'
  },
  argTypes:{
    label : {
      control : {
        type : "text"
      }
    },
    primary : {
      control : {
        type : "boolean"
      }
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  }
}

export const Secondary : Story = {
  args:{
    label:'Secondary Button',
    primary : false,
    size: 'medium'
  }
}