import { CertBadgeProps } from "./abstract";

export const CertBadge = (
    { animationDelay = "0.0s", imgUrl, href }: CertBadgeProps
) => {
    return (
        <div className="opacity-0 animate-fade-in"
            style={{ animationDelay: animationDelay, animationFillMode: 'forwards' }}>
            <a href={href} target="_blank" rel="noopener noreferrer">
                <img
                src={imgUrl}
                alt="AWS Badge"
                className="w-20 md:w-24"
                />
            </a>
        </div>
    );
};