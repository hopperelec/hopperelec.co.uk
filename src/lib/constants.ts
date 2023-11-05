import { dev } from "$app/environment";

export const SITE_NAME = "hopperelec";
export const SITE_DESCRIPTION =
  "Various information about the programmer hopperelec";
export const BASE_URL = dev
  ? "http://localhost:5173"
  : "https://www.hopperelec.co.uk";
export const BRAND_COLOR = "#c41313";

export default { SITE_NAME, SITE_DESCRIPTION, BASE_URL, BRAND_COLOR };
