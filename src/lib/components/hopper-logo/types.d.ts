export type Eyes =
	| undefined
	| {
			direction: "up" | "down" | "straight-on" | "right" | "left";
			color: string;
	  };

export type HopperParams = {
	transform?: string;
	outlineWidth?: number;
	typeOf3D: TypeOf3D;
	fillColor?: string;
	outlineColor?: string;
};
