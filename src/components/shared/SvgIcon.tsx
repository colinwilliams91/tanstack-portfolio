import { ICON_PATHS } from "~/constants/svg-icons";

export const SvgIcon = () => {
    return (
        <>
            <svg
                className={`swap-on h-7 w-7 fill-current`}
                xmlns={ICON_PATHS.W3}
                viewBox="0 0 24 24">
                <path d={ICON_PATHS.MOON} />
            </svg>

            <svg
                className={`swap-off h-7 w-7 fill-current`}
                xmlns={ICON_PATHS.W3}
                viewBox="0 0 24 24">
                <path d={ICON_PATHS.SUN} />
            </svg>
        </>
    );
};
