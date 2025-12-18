import { Link } from "@tanstack/react-router";
import { ErrorHandleComponentProps } from "../abstract";


export const ErrorHandleComponent = ({ redirectLink, errorText, redirectText }: ErrorHandleComponentProps) => {
    return (
        <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">{errorText}</h2>
            <Link to={redirectLink} className="btn btn-primary">
                {redirectText}
            </Link>
        </div>
    );
};