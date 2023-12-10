import * as React from 'react';
import {createContext, useEffect, useState} from 'react';
import {filterPlace, getDetail, getFilterParameters} from '../modules/homepage/action';
import {PlaceDetail, PlaceFinderPayload, PlaceParameters} from "../modules/homepage/models";
import {useRouter} from "next/router";


export type PlaceContent = {
    place: PlaceDetail
    fetchPlace: (id: string) => void
    fetchParameters: () => void
    parameters: PlaceParameters[]
    filterPlaceF: (payload: PlaceFinderPayload) => void
    payload: PlaceFinderPayload
    setPayload: (payload: any) => void
    placeDescriptionType : string,
    setPlaceDescriptionType: (type: string) => void
    placeList: PlaceDetail[]
}
export const PlaceContext = createContext<PlaceContent | null>(null);


const PlaceContextProvider: React.FC<React.ReactNode> = ({children}) => {

    const router = useRouter();

    const [place, setPlace] = useState<PlaceDetail>({} as PlaceDetail)
    const [payload, setPayload] = useState<PlaceFinderPayload>({} as PlaceFinderPayload)
    const [placeList, setPlaceList] = useState<PlaceDetail[]>([]);
    const [parameters, setParameterList] =  useState<PlaceParameters[]>([]);
    const [placeDescriptionType, setPlaceDescriptionType] = useState<string>('ABOUT');
    const fetchPlace = (id: string) => {
        getDetail(id as string).then((place: any) => {
            setPlace(place.result)
        }).catch((err: string) => {
            console.log(err)
        })
    }

    useEffect(() => {
        setPayload({"parameterValuesList": []})
    }, [router]);

    const fetchParameters = () => {
        getFilterParameters().then((params: any) => {
          setParameterList(params.result);
        }).catch((err: string) => {
            console.log(err)
        })
    }

    const filterPlaceF = (payload: PlaceFinderPayload) => {
        filterPlace(payload as PlaceFinderPayload).then((place: any) => {
            console.log(place.result)
            setPlaceList(place.result)
        }).catch((err: string) => {
            console.log(err)
        })
    }

    return <PlaceContext.Provider value={{
        place,
        placeDescriptionType,
        fetchParameters,
        parameters,
        setPlaceDescriptionType,
        fetchPlace,
        filterPlaceF,
        payload,
        setPayload,
        placeList
    }}> {children}</PlaceContext.Provider>
}

export default PlaceContextProvider;