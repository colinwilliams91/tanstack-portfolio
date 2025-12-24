import { TechTile } from "./techs.tile";
import { TEXT_ROTATE_DURATIONS } from "~/constants/themes";

export const TechsList = ({ techs, duration, styleClass }: { techs: readonly string[][], duration: number, styleClass: string }) => {
    const rotationDuration = TEXT_ROTATE_DURATIONS[duration] || TEXT_ROTATE_DURATIONS[0];
    const className = `text-rotate ${rotationDuration}`;

    return (
        <div className="flex flex-wrap gap-2">
            {techs.map((arr, groupIndex) => (
                <span key={groupIndex} className={className}>
                    <span>
                        {arr.map((t, i) => {
                            const opacity = (i * 10) + 10;
                            const style = `${styleClass}/${opacity}`;
                            return <TechTile key={i + t} styleClass={styleClass} techDisplay={t} />
                        })}
                    </span>
                </span>
            ))}
        </div>
    );
};
