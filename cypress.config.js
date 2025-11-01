import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:1000',
    setupNodeEvents(on, config) {},
  },
});
