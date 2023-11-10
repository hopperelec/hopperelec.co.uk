import type { RequestHandler } from "@sveltejs/kit";
import manifest from "./site.webmanifest?raw";
import insert_constants from "$lib/insert_constants";

export const GET: RequestHandler = async () => {
  return new Response(insert_constants(manifest));
};
