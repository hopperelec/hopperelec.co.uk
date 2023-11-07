// noinspection JSUnusedGlobalSymbols

import { vitePreprocess } from "@sveltejs/kit/vite";
import adapterNode from "@sveltejs/adapter-node";
import adapterStatic from "@sveltejs/adapter-static";
import dotenv from "dotenv";
dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter:
      process.env.GITHUB_PAGES === "true"
        ? adapterStatic({ fallback: "404.html" })
        : adapterNode({ precompress: true, polyfill: false }),
    paths: {
      base: process.env.BASE_PATH,
    },
  },
};
