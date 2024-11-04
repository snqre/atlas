import type {ErrorType} from "./error-type";
import {SourceLocation} from "./source-location";

export type Error = {
    sourceLocation?: SourceLocation;
    type: ErrorType;
    component: string;
    severity: "error" | "warning";
    message: string;
    formattedMessage?: string;
};

export const Error = ({
    sourceLocation, 
    type, 
    component, 
    severity, 
    message, 
    formattedMessage}: Error) => ({
        sourceLocation,
        type,
        component,
        severity,
        message,
        formattedMessage
    });