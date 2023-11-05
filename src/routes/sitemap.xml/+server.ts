import * as sitemap from "super-sitemap";
import type { RequestHandler } from "@sveltejs/kit";
import { BASE_URL } from "$lib/constants";

export const GET: RequestHandler = async () => {
  return await sitemap.response({
    origin: BASE_URL,
  });
};
