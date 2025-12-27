import { useState, useEffect } from 'react';

/**
 * Connection type as reported by the Network Information API
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/type
 */
type ConnectionType = 
  | 'bluetooth'  // Bluetooth connection
  | 'cellular'   // Mobile network (2G, 3G, 4G, 5G)
  | 'ethernet'   // Wired ethernet connection
  | 'none'       // No network connection
  | 'wifi'       // WiFi connection
  | 'wimax'      // WiMAX (Worldwide Interoperability for Microwave Access) connection
  | 'other'      // Other or unknown connection type
  | 'unknown';   // Connection type cannot be determined

interface NetworkInformation extends EventTarget {
  readonly downlink?: number;
  readonly downlinkMax?: number;
  readonly effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  readonly rtt?: number;
  readonly saveData?: boolean;
  readonly type?: ConnectionType;
  onchange?: ((this: NetworkInformation, ev: Event) => any) | null;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
  mozConnection?: NetworkInformation;
  webkitConnection?: NetworkInformation;
}

interface NetworkState {
  online: boolean;
  downlink?: number;
  downlinkMax?: number;
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  rtt?: number;
  saveData?: boolean;
  type?: ConnectionType;
}

export function useNetworkState(): NetworkState {
  const [state, setState] = useState<NetworkState>(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      return { online: true };
    }

    const nav = navigator as NavigatorWithConnection;
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection;

    return {
      online: navigator.onLine,
      downlink: connection?.downlink,
      downlinkMax: connection?.downlinkMax,
      effectiveType: connection?.effectiveType,
      rtt: connection?.rtt,
      saveData: connection?.saveData,
      type: connection?.type,
    };
  });

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      return;
    }

    const nav = navigator as NavigatorWithConnection;
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection;

    const handleOnline = () => {
      setState((prev) => ({
        ...prev,
        online: true,
      }));
    };

    const handleOffline = () => {
      setState((prev) => ({
        ...prev,
        online: false,
      }));
    };

    const handleConnectionChange = () => {
      if (connection) {
        setState({
          online: navigator.onLine,
          downlink: connection.downlink,
          downlinkMax: connection.downlinkMax,
          effectiveType: connection.effectiveType,
          rtt: connection.rtt,
          saveData: connection.saveData,
          type: connection.type,
        });
      }
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if (connection) {
      connection.addEventListener('change', handleConnectionChange);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);

      if (connection) {
        connection.removeEventListener('change', handleConnectionChange);
      }
    };
  }, []);

  return state;
}
