import { getSwapClassFromSvgPath } from "~/handlers/utils";
import { SvgIconProps } from "./abstract";

export const SvgIcon = ({ pathVal }: SvgIconProps) => {
    const swapModifier = getSwapClassFromSvgPath(pathVal);

    return (
        <svg
            className={`swap-${swapModifier} h-6 w-6 fill-current`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d={pathVal} />
        </svg>
    );
};
