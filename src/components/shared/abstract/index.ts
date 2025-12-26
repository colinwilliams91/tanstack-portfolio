import { IconPathValue } from "~/constants/icons/svg-icons";

export interface SvgIconProps {
  pathVal: IconPathValue;
}

export interface ErrorHandleComponentProps {
  redirectLink: string;
  errorText: string;
  redirectText: string;
}

export interface SocialBadge {
  href: string;
  tooltip: string;
  iconName: string;
}
