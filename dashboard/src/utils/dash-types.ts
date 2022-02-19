/**
 * not a .d.ts file because of enum ts bug
 */
export interface EngineData {
	rpm: string;
	speed: string;
	gear: string;
    throttlePosition: string;
    batteryVoltage: string;
    coolantTemp: string;
}

export interface LapData {
    currentLap: string;
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
    GREY = "#101010",
    ORANGE = "#ff8200"
}

//Events
// car event should be changed to the approiate bitmap once CAN is implemented
export enum IPCEvents {
    // for regular CAN events
    CAR_DATA = "car-data",
    // for irregular CAN events
    CAR_ERROR = "car-error",
    // one time event call for finished DOM load
    DASH_ON = "dash-on",
}

// Entry Points
export const MAIN_ENTRY = "http://localhost:3000/main_window";
export const DIGITAL_ENTRY = "http://localhost:3000/digital";

// errors
export const PORT_ALREADY_OPEN_ERR = "Port is already open";

export const MAX_RPM = 12500;


// Gauge Classes
/**
 * BaseGauge is the interface that all gauges will implement
 * contains the HTML id, the actual DOM html element, and a function
 * to set the value of that gauge
 */
export interface BaseGauge {
    id: string;
    element: JQuery<HTMLElement>;
    setValue(value: string) : void;
}