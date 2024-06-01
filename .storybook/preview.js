import "../src/index.css";
import { initialize, mswLoader } from "msw-storybook-addon";
/** @type { import('@storybook/react').Preview } */
initialize();
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
