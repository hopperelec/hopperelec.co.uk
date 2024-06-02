export type TYPE_OF_3D = "none" | "stroke" | "gaps";
export type EYES =
	| undefined
	| {
			direction: "up" | "down" | "straight-on" | "right" | "left";
			color: string;
	  };
export type PADDING =
	| undefined
	| {
			top?: number;
			right?: number;
			bottom?: number;
			left?: number;
	  };
type HOPPER_PARAMS = {
	transform?: string;
	outlineWidth?: number;
	typeOf3D: TYPE_OF_3D;
	fillColor?: string;
	outlineColor?: string;
};
