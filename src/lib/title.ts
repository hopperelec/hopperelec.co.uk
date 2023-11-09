import { writable } from "svelte/store";
import { SITE_NAME } from "$lib/constants";

const { subscribe, set } = writable(SITE_NAME);
export const title = {
  subscribe,
  set: (value: string) => {
    set(`${SITE_NAME} | ${value}`);
  },
};
