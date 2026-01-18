
/**
 * BatteryManager interface representing the Battery Status API.
 * Client Class which holds client-device battery info and manages events.
 * Note: The Battery Status API is experimental and may not be available in all browsers.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API
 */
export interface BatteryManager extends EventTarget {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  onchargingchange: ((this: BatteryManager, ev: Event) => any) | null;
  onchargingtimechange: ((this: BatteryManager, ev: Event) => any) | null;
  ondischargingtimechange: ((this: BatteryManager, ev: Event) => any) | null;
  onlevelchange: ((this: BatteryManager, ev: Event) => any) | null;
}

/**
 * Extended Navigator interface with Battery Status API support.
 * Note: The Battery Status API is experimental and may not be available in all browsers.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API
 */
export interface NavigatorWithBattery extends Navigator {
  getBattery?: () => Promise<BatteryManager>;
}

/**
 * React Interface for transient battery state information.
 */
export interface BatteryState {
  supported: boolean;
  loading: boolean;
  level: number | null;
  charging: boolean | null;
  chargingTime: number | null;
  dischargingTime: number | null;
}
