import { SvgIconProps } from "./abstract";

export const SvgIcon = ({ pathVal }: SvgIconProps) => (
    <label className="swap swap-rotate">
        <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
            d={pathVal} />
        </svg>
    </label>
);
