
export const TechTile = ({ styleClass, techDisplay }: { styleClass: string; techDisplay: string }) => {
    return <span className={`glass w-46 sm:w-47 md:w-52 lg:w-52 rounded-field ${styleClass} px-3`}>{techDisplay}</span>
};
