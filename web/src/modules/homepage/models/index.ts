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


export interface ImageList {
    thumbnail: string;
    original: string;
}

export interface PlaceContent {
    id: string;
    type: string
    value: string
    isActive: boolean
}

export interface Parameters {
    id: string;
    icon: string;
    showOnDetail: boolean;
    tooltip: string
    name: string
}
export interface RoomRow {
    id: string;
    name: string
    area: string
    bed: string
    capacity: number
    price: number
    roomParameters: Parameters[]
    roomImages: ImageList[]
}

export interface PlaceDetail {
    id: string;
    name: string;
    image: string;
    location: string;
    type: string;
    address: string;
    review: number;
    isActive: boolean;
    placeImageListList: ImageList[];
    placeContentsList: PlaceContent[];
    placeParameterList: Parameters[];
    rooms: RoomRow[];

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
    parameterValuesList: [];
}

export interface TripRow {
    id: string;
    image: string;
    name: string;
    location: string;
    capacity: number;
    price: number;
    length: string;
    food: string;
    tripLocation: string;
    tripType: string;
    guide: string;
    included: string;
    reviews: string;
    isActive: boolean;
}

export interface TripDetail {
    id: string;
    name: string;
    image: string;
    location: string;
    capacity: number;
    price: number;
    length: string;
    food: string;
    included: string;
    tripLocation: string;
    tripType: string;
    guide: string;
    reviews: string;
    isActive: boolean;
    tripImageListList: TripImageList[];
    tripContentsList: TripContent[];
}

interface TripImageList {
    original: string;
    thumbnail: string;
}

interface TripContent {
    isActive: boolean;
    type: string;
    value: string;
    id: string;
}

export interface PlaceParameters {
    id: string;
    name: string;
    parameterValueList: PlaceParameterValue[];
}

export interface PlaceParameterValue {
    id: string;
    name: string;
}

