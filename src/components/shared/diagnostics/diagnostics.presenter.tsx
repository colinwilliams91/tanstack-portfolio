import { getBatteryLevelIcon, getBatteryPercentage, getConnectionTypeName } from "~/handlers/utils";
import { DiagnosticsContentProps } from "../abstract";
import { Icon } from "../Icon";

// Radial progress indicator size and styling constants
const RADIAL_PROGRESS_SIZE = "3rem";

export const DiagnosticsPresenter = ({ battery, network }: DiagnosticsContentProps) => {
    const batteryPercentage = getBatteryPercentage(battery.level);
    const batteryIconName = getBatteryLevelIcon(batteryPercentage ?? 0);
    const networkConnectionType = getConnectionTypeName(network);
    return (
        <div className="stats stats-vertical shadow-lg inline-block backdrop-blur-lg">
        {/* Battery Stat */}
        {battery.supported && !battery.loading && (
            <div className="stat">
            <div className="stat-figure text-primary">
                <Icon
                name={batteryIconName}
                className="w-8 h-8 fill-current"
                aria-hidden="true"
                />
            </div>
            <div className="stat-title">Battery</div>
            <div className="stat-value text-primary">
                {batteryPercentage !== null && (
                <div
                    className="radial-progress text-sm"
                    style={{ "--value": batteryPercentage, "--size": RADIAL_PROGRESS_SIZE } as React.CSSProperties}
                    role="progressbar"
                    aria-valuenow={batteryPercentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Battery level ${batteryPercentage}%`}
                >
                    {batteryPercentage}%
                </div>
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
            <div className="stat-title">
                Network&nbsp;
                <div className="inline-grid *:[grid-area:1/1]">
                    <div className={`status ${network.online ? "status-success" : "status-error"} animate-ping`}></div>
                    <div className={`status ${network.online ? "status-success" : "status-error"}`}></div>
                </div>
            </div>
            <div className="stat-value text-secondary text-2xl">
                {networkConnectionType}
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
            <div className="stat-figure text-accent theme-abyss:text-accent-content/70">
                <Icon
                name="signal"
                className="w-8 h-8 fill-current"
                aria-hidden="true"
                />
            </div>
            <div className="stat-title">
                Bandwidth&nbsp;
                <div className="inline-grid *:[grid-area:1/1]">
                    <div className="status status-success animate-ping"></div>
                    <div className="status status-success"></div>
                </div>
            </div>
            <div className="stat-value text-accent theme-abyss:text-accent-content/70 text-2xl">
                {network.downlink.toFixed(1)} Mbps
            </div>
            <div className="stat-desc">
                {network.rtt !== undefined ? `Latency: ${network.rtt}ms` : "Download speed"}
            </div>
            </div>
        )}
        </div>
    )
};
