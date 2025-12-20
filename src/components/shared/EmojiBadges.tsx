import { EMOJI_BADGES } from "~/constants/icons/badges";

export function EmojiBadges() {
    return (
        <div className="flex justify-center">
            {EMOJI_BADGES.map((emoji, index) => (
                <div
                    key={index + emoji}
                    className="py-3 text-2xl md:text-3xl lg:text-2xl opacity-0 animate-fade-in hover:rotate-45 transition-transform"
                    style={{ animationDelay: `0.${index + 5}s`, animationFillMode: 'forwards' }}
                    >
                    {emoji}
                </div>
            ))}
        </div>
    );
};
