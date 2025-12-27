import { useState, useEffect } from 'react';

interface BatteryManager extends EventTarget {
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
interface NavigatorWithBattery extends Navigator {
  getBattery?: () => Promise<BatteryManager>;
}

interface BatteryState {
  supported: boolean;
  loading: boolean;
  level: number | null;
  charging: boolean | null;
  chargingTime: number | null;
  dischargingTime: number | null;
}

export function useBattery(): BatteryState {
  const [state, setState] = useState<BatteryState>({
    supported: false,
    loading: true,
    level: null,
    charging: null,
    chargingTime: null,
    dischargingTime: null,
  });

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      setState({
        supported: false,
        loading: false,
        level: null,
        charging: null,
        chargingTime: null,
        dischargingTime: null,
      });
      return;
    }

    const nav = navigator as NavigatorWithBattery;

    if (!nav.getBattery) {
      setState({
        supported: false,
        loading: false,
        level: null,
        charging: null,
        chargingTime: null,
        dischargingTime: null,
      });
      return;
    }

    let battery: BatteryManager | null = null;

    const handleChange = () => {
      if (!battery) return;
      setState({
        supported: true,
        loading: false,
        level: battery.level,
        charging: battery.charging,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime,
      });
    };

    nav.getBattery().then((b) => {
      battery = b;
      handleChange();

      battery.addEventListener('levelchange', handleChange);
      battery.addEventListener('chargingchange', handleChange);
      battery.addEventListener('chargingtimechange', handleChange);
      battery.addEventListener('dischargingtimechange', handleChange);
    });

    return () => {
      if (battery) {
        battery.removeEventListener('levelchange', handleChange);
        battery.removeEventListener('chargingchange', handleChange);
        battery.removeEventListener('chargingtimechange', handleChange);
        battery.removeEventListener('dischargingtimechange', handleChange);
      }
    };
  }, []);

  return state;
}
