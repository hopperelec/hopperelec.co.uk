import { env } from "$env/dynamic/public";

export const SITE_NAME = "hopperelec";
export const SITE_DESCRIPTION =
  "Various information about the programmer hopperelec";
export const BASE_URL = env["PUBLIC_BASE_URL"] || "http://localhost:5173";
export const BRAND_COLOR = "#c41313";

export default { SITE_NAME, SITE_DESCRIPTION, BASE_URL, BRAND_COLOR };
