export const TechTile = ({ styleClass, techDisplay }: { styleClass: string; techDisplay: string }) => {
    const bgColor = `bg-${styleClass}/20`;
    return <span className={`glass w-40 sm:w-36 md:w-52 rounded-field ${bgColor} px-3`}>{techDisplay}</span>
};
