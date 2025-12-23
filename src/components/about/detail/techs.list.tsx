import { TechTile } from "./techs.tile";
import { TEXT_ROTATE_DURATIONS } from "~/constants/themes";

export const TechsList = ({ techs, duration, styleClass }: { techs: readonly string[], duration: number, styleClass: string }) => {

    const rotationDuration = TEXT_ROTATE_DURATIONS[duration] || TEXT_ROTATE_DURATIONS[0];
    const className = `text-rotate ${rotationDuration}`;
    return (
        <span className={className}>
            <span>
                {
                    techs.map((tech, index) => <TechTile key={index} styleClass={styleClass} techDisplay={tech} />)
                }
            </span>
        </span>
    )
};
