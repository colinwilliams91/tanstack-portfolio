import { TechTile } from "./techs.tile";
import { TEXT_ROTATE_DURATIONS } from "~/constants/themes";

export const TechsList = ({ techs, duration, styleClass }: { techs: readonly string[][], duration: number, styleClass: string }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {techs.map((arr, groupIndex) => {
                const rotationDuration = TEXT_ROTATE_DURATIONS[duration + groupIndex] || TEXT_ROTATE_DURATIONS[0];
                const className = `text-rotate ${rotationDuration} rounded-field`;
                return (
                <span key={arr[0] + groupIndex} className={className}>
                    <span>
                        {arr.map((t, i) => {
                            return <TechTile key={i + t} styleClass={styleClass} techDisplay={t} />
                        })}
                    </span>
                </span>)
            })}
        </div>
    );
};
