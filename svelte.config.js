import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapterNode from "@sveltejs/adapter-node";
import adapterStatic from "@sveltejs/adapter-static";
import dotenv from "dotenv";

dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter:
      process.env.STATIC === "true"
        ? adapterStatic({ fallback: "404.html" })
        : adapterNode({ precompress: true }),
    paths: {
      base: process.env.BASE_PATH ? `/${process.env.BASE_PATH}` : "",
    },
  },
};
