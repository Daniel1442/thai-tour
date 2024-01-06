export interface GolfParameters {
    id: string;
    name: string;
    parameterValueList: GolfParameterValue[];
}

export interface GolfParameterValue {
    id: string;
    name: string;
}

export interface GolfFinderPayload {
    parameterValuesList: []
}


export interface GolfDetail {
    id: string;
    name: string;
    image: string;
    label: string;
    price: number;
    latitude: number;
    longitude: number;
    location: string;
    yard: string;
    opened: string;
    holes: string;
    par: string;
    drivingRange: string;
    openingYear: string;
    yardDesigner: string;
    contents: GolfContent;
    images: GolfImage;
    prices: GolfPrice;
}

export interface GolfContent {
    id: string;
    value: string;
    priority: number;
    type: string;
}

export interface GolfPrice {
    id: string;
    label: string;
    priority: number;
    price: number;
    tooltip: string;
}


export interface GolfImage {
    original: string;
    thumbnail: string;
}
