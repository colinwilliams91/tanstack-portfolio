import { useNetworkState } from "~/hooks/useNetworkState";
import { BatteryState } from "~/types/battery";

export interface CertBadgeProps {
  animationDelay?: string;
  imgUrl: string;
  href: string;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  className?: string;
}

export interface ErrorHandleComponentProps {
  redirectLink: string;
  errorText: string;
  redirectText: string;
}

export interface SocialBadge {
  href: string;
  tooltip: string;
  iconName: IconName;
}

/**
 * Props for the DiagnosticsContent component holding diagnostics client state.
 * @see BatteryState
 * @see useNetworkState
 */
export interface DiagnosticsContentProps {
  battery: BatteryState;
  network: ReturnType<typeof useNetworkState>;
}

export type IconName =
  | "search"
  | "home"
  | "blogs"
  | "moon"
  | "sun"
  | "github"
  | "linkedin"
  | "resume"
  | "email"
  | "close"
  | "menu"
  | "target"
  | "device"
  | "error"
  | "warning"
  | "battery"
  | "battery-charging"
  | "battery-one"
  | "battery-two"
  | "battery-three"
  | "battery-full"
  | "wifi"
  | "signal"
  | "about"
  | "projects";
