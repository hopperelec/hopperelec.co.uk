import type { RequestHandler } from "@sveltejs/kit";
import robots from "./robots.txt?raw";
import insert_constants from "$lib/insert_constants";

export const GET: RequestHandler = async () => {
  return new Response(insert_constants(robots));
};
