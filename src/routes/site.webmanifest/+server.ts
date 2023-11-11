import type { RequestHandler } from "@sveltejs/kit";
import manifest from "./site.webmanifest?raw";
import { insertInto } from "$lib/constants";

export const GET: RequestHandler = async () => {
  return new Response(insertInto(manifest));
};
