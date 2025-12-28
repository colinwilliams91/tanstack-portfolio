/**
 * Connection type as reported by the Network Information API
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/type
 */
export type ConnectionType =
  | 'bluetooth'  // Bluetooth connection
  | 'cellular'   // Mobile network (2G, 3G, 4G, 5G)
  | 'ethernet'   // Wired ethernet connection
  | 'none'       // No network connection
  | 'wifi'       // WiFi connection
  | 'wimax'      // WiMAX (Worldwide Interoperability for Microwave Access) connection
  | 'other'      // Other or unknown connection type
  | 'unknown';   // Connection type cannot be determined

/**
 * Client Class which holds client-device network info and manages events.
 */
export interface NetworkInformationManager extends EventTarget {
  readonly downlink?: number;
  readonly downlinkMax?: number;
  readonly effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  readonly rtt?: number;
  readonly saveData?: boolean;
  readonly type?: ConnectionType;
  onchange?: ((this: NetworkInformationManager, ev: Event) => any) | null;
}

export interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformationManager;
  mozConnection?: NetworkInformationManager;
  webkitConnection?: NetworkInformationManager;
}

export interface NetworkState {
  online: boolean;
  downlink?: number;
  downlinkMax?: number;
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  rtt?: number;
  saveData?: boolean;
  type?: ConnectionType;
}