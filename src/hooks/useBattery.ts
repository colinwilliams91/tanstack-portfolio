import { useState, useEffect } from 'react';
import { type BatteryManager, type BatteryState, type NavigatorWithBattery } from '~/types/battery';

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
