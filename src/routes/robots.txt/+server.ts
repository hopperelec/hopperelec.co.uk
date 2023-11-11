import type { RequestHandler } from "@sveltejs/kit";
import robots from "./robots.txt?raw";
import { insertInto } from "$lib/constants";

export const GET: RequestHandler = async () => {
  return new Response(insertInto(robots));
};
