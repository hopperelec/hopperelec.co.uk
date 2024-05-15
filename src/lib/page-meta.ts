import { SITE_NAME } from "$lib/constants";
import { writable } from "svelte/store";

const { subscribe, set } = writable(SITE_NAME);
export const title = {
	subscribe,
	set: (value: string) => {
		set(`${SITE_NAME} | ${value}`);
	},
};
export const description = writable(SITE_NAME);
