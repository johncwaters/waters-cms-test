import { defineConfig } from "astro/config";
import waterscms from "waters-cms";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [waterscms()],
});
