import {EMPTY} from "../models/enums";

export const getWindowDimensions = (): { width: number, height: number } => {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

export const isValidIpAddress = (value: any) => {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value);

}


export const defaultBoolValue = (value: string) => {
    if (value) {
        if (value === 'none') {
            return null;
        }
        return value;
    }
    return 'true'
}

export const defaultValue = ({value}:any) => {
    if (!value) {
        return EMPTY
    }
    return value
}