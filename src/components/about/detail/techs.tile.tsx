
export const TechTile = ({ styleClass, techDisplay }: { styleClass: string; techDisplay: string }) => {
    return (
        <span className={`tech-base tech-tile ${styleClass}`}>
            {techDisplay}
        </span>
    );
};
