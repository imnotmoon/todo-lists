import numbro from "numbro";
import {ReactNode} from "react";

export const format = (value?: number | string, options?: numbro.Format & { placeholder? : string }) => {
    const isEmpty = isNaN(Number(value)) || value === null;

    if(isEmpty && options?.placeholder) {
        return options.placeholder;
    }
    return numbro(value).format(options);
};

export const padZero = (value: number, pad: number) => {
    if(pad <= format(value).length) return `${value}`;
    return '0'.repeat(pad - format(value).length) + `${value}`;
}