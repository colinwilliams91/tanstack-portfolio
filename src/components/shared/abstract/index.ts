import { IconPathValue } from "~/constants/svg-icons";

export interface SvgIconProps {
  pathVal: IconPathValue;
}

export interface ErrorHandleComponentProps {
  redirectLink: string;
  errorText: string;
  redirectText: string;
}
