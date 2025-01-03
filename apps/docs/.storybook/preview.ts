import type { Preview } from "@storybook/react";
import "@sportycoon/ui/styles/globals.css";

import { withThemeByClassName } from "@storybook/addon-styling";

/* TODO: update import to your tailwind styles file */

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "white",
      values: [
        {
          name: "white",
          value: "#e5e5e5",
        },
        {
          name: "dark",
          value: "#232323",
        },
      ],
    },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
