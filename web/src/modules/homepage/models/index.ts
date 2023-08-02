export interface PlaceRow {
    id: string;
    name: string
    image: string
    location: string
    type: string
    value: string
    address: string
    review: number
    isActive: boolean
    updatedAt: Date | null
    createdAt: Date | null
    updatedBy: string
    createdBy: string
}


export interface PlaceImageList {
    id: string;
    target: string
    priority: number
    isActive: boolean
}

export interface PlaceContent {
    id: string;
    type: string
    value: string
    isActive: boolean
}

export interface PlaceParameters {
    id: string;
    tooltip: string
    name: string
}

export interface PlaceDetail {

    id: string;
    name: string;
    image: string;
    location: string;
    type: string;
    address: string;
    value: string;
    review: number;
    isActive: boolean;
    updatedAt: Date;
    updatedBy: string;
    createdAt: Date;
    createdBy: string;
    placeImageListList: PlaceImageList[];
    placeContentsList: PlaceContent[];
    placeParameterList: PlaceParameters[];

}

export interface PlaceOption {
    readonly value: string;
    readonly label: string;
}

export const placeOptions: readonly PlaceOption[] = [
    {value: 'Bangkok a okolí', label: 'Bangkok a okolí'},
    {value: 'Pattaya a okolí', label: 'Pattaya a okolí'},
    {value: 'Koh Samui', label: 'Koh Samui'},
    {value: 'Phuket', label: 'Phuket'},
    {value: 'Phi Phi', label: 'Phi Phi'},
    {value: 'Koh Samet', label: 'Koh Samet'},
    {value: 'Krabi', label: 'Krabi'},
    {value: 'Hua Hin', label: 'Hua Hin'},
    {value: 'Koh Lanta', label: 'Koh Lanta'},
    {value: 'Koh Phangan', label: 'Koh Phangan'},
    {value: 'Koh Chang', label: 'Koh Chang'},
    {value: 'Koh Kood', label: 'Koh Kood'},
    {value: 'Khao Lak', label: 'Khao Lak'},
    {value: 'Koh Lipe', label: 'Koh Lipe'},
    {value: 'Koh Tao', label: 'Koh Tao'},
    {value: 'Koh Yao', label: 'Koh Yao'},
    {value: 'Chiang Mai', label: 'Chiang Mai'},
    {value: 'Chiang Rai', label: 'Chiang Rai'},
];

export interface PlaceFinderPayload {
    location: string | null;
    type: string | null;
}
