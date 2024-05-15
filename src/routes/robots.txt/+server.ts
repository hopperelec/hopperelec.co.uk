import { insertInto } from "$lib/constants";
import type { RequestHandler } from "@sveltejs/kit";
import robots from "./robots.txt?raw";

export const GET: RequestHandler = async () => {
	return new Response(insertInto(robots));
};
