import { useCallback } from 'react';

export function useVibrate() {
  const vibrate = useCallback((pattern: number | number[] = 100) => {
    // Feature detection
    if (!navigator.vibrate) {
      return false; // Not supported
    }

    try {
      navigator.vibrate(pattern);
      return true;
    } catch (error) {
      console.warn('Vibration haptic failed:', error);
      return false;
    }
  }, []);

  return vibrate;
};
