import type { Preview } from "@storybook/react-vite";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
      <div style={{ padding: "20px", background: "#f9f9f9" }}>
        <Story />
      </div>
    )
  ]
};

export default preview;
