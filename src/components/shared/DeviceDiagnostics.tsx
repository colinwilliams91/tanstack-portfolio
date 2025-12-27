import { useState, useEffect, useRef } from "react";
import { useBattery } from "~/hooks/useBattery";
import { useNetworkState } from "~/hooks/useNetworkState";
import { Icon } from "./Icon";
import { DOM_EVENTS } from "~/constants/events/dom-events";

export function DeviceDiagnostics() {
  const battery = useBattery();
  const network = useNetworkState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  // Close modal when clicking outside (mobile only)
  useEffect(() => {
    if (!isModalOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        mobileButtonRef.current &&
        !mobileButtonRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('.diagnostics-modal')
      ) {
        setIsModalOpen(false);
      }
    }

    document.addEventListener(DOM_EVENTS.MOUSE_DOWN, handleClickOutside);
    return () => document.removeEventListener(DOM_EVENTS.MOUSE_DOWN, handleClickOutside);
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Format battery level to percentage
  const batteryPercentage = battery.level !== null ? Math.round(battery.level * 100) : null;

  // Get effective connection type display name
  const getConnectionTypeName = () => {
    if (!network.online) return "Offline";
    if (network.type) {
      return network.type.charAt(0).toUpperCase() + network.type.slice(1);
    }
    if (network.effectiveType) {
      return network.effectiveType.toUpperCase();
    }
    return "Online";
  };

  // Render the diagnostics content
  const DiagnosticsContent = () => (
    <div className="stats stats-vertical shadow-lg">
      {/* Battery Stat */}
      {battery.supported && !battery.loading && (
        <div className="stat">
          <div className="stat-figure text-primary">
            <Icon
              name={battery.charging ? "battery-charging" : "battery"}
              className="w-8 h-8 fill-current"
              aria-hidden="true"
            />
          </div>
          <div className="stat-title">Battery</div>
          <div className="stat-value text-primary flex items-center gap-3">
            {batteryPercentage !== null && (
              <>
                <div
                  className="radial-progress text-sm"
                  style={{ "--value": batteryPercentage, "--size": "3rem" } as React.CSSProperties}
                  role="progressbar"
                  aria-valuenow={batteryPercentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Battery level ${batteryPercentage}%`}
                >
                  {batteryPercentage}%
                </div>
              </>
            )}
          </div>
          <div className="stat-desc">
            {battery.charging ? "Charging" : "Not charging"}
          </div>
        </div>
      )}

      {/* Network Stat */}
      <div className="stat">
        <div className="stat-figure text-secondary">
          <Icon
            name={network.online ? "wifi" : "signal"}
            className="w-8 h-8 fill-current"
            aria-hidden="true"
          />
        </div>
        <div className="stat-title">Network</div>
        <div className="stat-value text-secondary text-2xl">
          {getConnectionTypeName()}
        </div>
        <div className="stat-desc">
          {network.effectiveType && network.online
            ? `Speed: ${network.effectiveType}`
            : network.online
            ? "Connected"
            : "Disconnected"}
        </div>
      </div>

      {/* Additional Network Details */}
      {network.online && network.downlink !== undefined && (
        <div className="stat">
          <div className="stat-figure text-accent">
            <Icon
              name="signal"
              className="w-8 h-8 fill-current"
              aria-hidden="true"
            />
          </div>
          <div className="stat-title">Bandwidth</div>
          <div className="stat-value text-accent text-2xl">
            {network.downlink.toFixed(1)} Mbps
          </div>
          <div className="stat-desc">
            {network.rtt !== undefined ? `Latency: ${network.rtt}ms` : "Download speed"}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop View - Always visible glass card in bottom left */}
      <div className="hidden md:block fixed bottom-4 left-4 z-40">
        <div className="glass bg-base-100/60 backdrop-blur-md rounded-box p-4 shadow-xl">
          <DiagnosticsContent />
        </div>
      </div>

      {/* Mobile View - FAB button */}
      <button
        ref={mobileButtonRef}
        className="md:hidden fixed bottom-4 right-4 z-40 btn btn-circle btn-primary btn-lg shadow-xl"
        onClick={handleOpenModal}
        aria-label="Open device diagnostics"
      >
        <Icon name="signal" className="w-6 h-6 fill-current" />
      </button>

      {/* Mobile Modal - Similar to SearchBar modal */}
      {isModalOpen && (
        <div className="md:hidden fixed inset-2 shadow-2xl z-50 bg-base-100/60 rounded-box backdrop-blur-sm flex flex-col diagnostics-modal">
          {/* Modal Header */}
          <div className="flex items-center gap-4 p-4 border-b border-base-300">
            <button
              className="btn btn-ghost btn-circle"
              onClick={handleCloseModal}
              aria-label="Close device diagnostics"
            >
              <Icon
                name="close"
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
              />
            </button>
            <h2 className="text-lg font-semibold">Device Diagnostics</h2>
          </div>

          {/* Modal Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <DiagnosticsContent />
          </div>
        </div>
      )}
    </>
  );
}
