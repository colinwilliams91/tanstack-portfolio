
export const TechTile = ({ styleClass, techDisplay }: { styleClass: string; techDisplay: string }) => {
    return (
        <span
            className={`glass w-48 sm:w-48 md:w-48 lg:w-48 ${styleClass} px-3 text-accent-content`}>
                {techDisplay}
            </span>
    );
};
