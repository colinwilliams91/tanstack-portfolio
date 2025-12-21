import { TechTile } from "./techs.tile";

export const TechsList = ({ techs, duration, style }: { techs: readonly string[], duration: number, style: string }) => {
    return (
        <span className={`text-rotate duration-${duration}`}>
            <span>
                {
                    techs.map((tech, index) => <TechTile key={index} styleClass={style} techDisplay={tech} />)
                }
            </span>
        </span>
    )
};
