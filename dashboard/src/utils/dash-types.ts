/**
 * not a .d.ts file because of enum ts bug
 */
export interface EngineData {
	rpm: string;
	speed: string;
	gear: string;
}

export interface LapData {
	currentLap: string;
	lapDelta: string;
}

export interface CarData {
	engineData: EngineData;
	lapData?: LapData;
}

export interface CarError {
	status: number;
	msg: string;
	fatal: boolean;
}

export interface PortOpenEvent {
	message?: string;
}

export interface Slot {
	text: JQuery<HTMLElement>;
	// optional because center element doesn't have a label
	label?: JQuery<HTMLElement>;
}

export interface ErrorEmitter {
	container: JQuery<HTMLElement>;
	message: JQuery<HTMLElement>;
}

export enum DashColors {
	GREEN = "#06e514",
	YELLOW = "#ecff51",
	RED = "#fc036f",
}