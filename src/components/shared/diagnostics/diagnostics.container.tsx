import { useState, useEffect, useRef } from "react";
import { useBattery } from "~/hooks/useBattery";
import { useNetworkState } from "~/hooks/useNetworkState";
import { Icon } from "../Icon";
import { DOM_EVENTS } from "~/constants/events/dom-events";
import { DiagnosticsPresenter } from "./diagnostics.presenter";
import { useVibrate } from "~/hooks/useVibrate";

export function DeviceDiagnosticsContainer() {
  const battery = useBattery();
  const network = useNetworkState();
  const vibrate = useVibrate();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close card when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener(DOM_EVENTS.MOUSE_DOWN, handleClickOutside);
    return () => document.removeEventListener(DOM_EVENTS.MOUSE_DOWN, handleClickOutside);
  }, [isOpen]);

  const toggleCard = () => {
    setIsOpen(!isOpen);
    vibrate();
  };

  return (
    <div ref={containerRef} className="fixed bottom-4 right-4 z-40">
      {/* Diagnostics Card - Shows when open, positioned above button */}
      {isOpen && (
        <div className="absolute bottom-20 right-5.5 sm:right-0 glass bg-base-300/30 backdrop-blur-sm rounded-box shadow-xl
            max-h-[80vh] overflow-y-auto w-80 max-w-[calc(100vw-2rem)] sm:w-76">
          {/* Card Header */}
          <div className="flex items-center justify-between p-4 shadow">
            <h2 className="text-lg font-semibold">Device Diagnostics</h2>
            <button
              className="btn btn-ghost btn-circle btn-sm"
              onClick={toggleCard}
              aria-label="Close device diagnostics"
            >
              <Icon
                name="close"
                className="h-5 w-5"
                stroke="currentColor"
                fill="none"
              />
            </button>
          </div>

          {/* Card Content */}
          <div className="py-4 px-7">
            <DiagnosticsPresenter battery={battery} network={network} />
          </div>
        </div>
      )}

      {/* FAB Button - Always visible */}
      <button
        className="glass ring btn btn-circle btn-primary btn-lg shadow-xl transition-colors duration-250 active:scale-95
        hover:bg-secondary/10 active:ring-offset-neutral-400/10 active:ring-offset-1 active:translate-y-0.5"
        onClick={toggleCard}
        aria-label={isOpen ? "Close device diagnostics" : "Open device diagnostics"}
        aria-expanded={isOpen}
      >
        <Icon name="device" className="w-7 h-7 fill-current" />
      </button>
    </div>
  );
}
