import * as React from 'react';
import {createContext, useEffect, useState} from 'react';
import {filterPlace, getDetail, getFilterParameters} from '../modules/homepage/action';
import {PlaceDetail, PlaceFinderPayload, PlaceParameters} from "../modules/homepage/models";


export type PlaceContent = {
    place: PlaceDetail
    fetchPlace: (id: string) => void
    fetchParameters: () => void
    parameters: PlaceParameters[]
    filterPlaceF: (payload: PlaceFinderPayload) => void
    payload: PlaceFinderPayload | undefined
    setPayload: (payload: PlaceFinderPayload) => void
    placeDescriptionType : string,
    setPlaceDescriptionType: (type: string) => void
    placeList: PlaceDetail[]
}
export const PlaceContext = createContext<PlaceContent | null>(null);


const PlaceContextProvider: React.FC<React.ReactNode> = ({children}) => {

    const [place, setPlace] = useState<PlaceDetail>({} as PlaceDetail)
    const [payload, setPayload] = useState<PlaceFinderPayload>({"parameterValuesList": []})
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
        console.log(payload)
    }, [payload]);

    const fetchParameters = () => {
        getFilterParameters().then((params: any) => {
          setParameterList(params.result);
        }).catch((err: string) => {
            console.log(err)
        })
    }

    const filterPlaceF = (payload: PlaceFinderPayload) => {
        filterPlace(payload as PlaceFinderPayload).then((place: any) => {
            setPlaceList(place.result.content)
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