import * as React from 'react';
import {filterPlace, getDetail} from '../modules/homepage/action';
import {PlaceDetail, PlaceFinderPayload, PlaceRow} from "../modules/homepage/models";
import {createContext, useEffect, useState} from "react";


export type PlaceContent = {
    place: PlaceDetail
    fetchPlace: (id: string) => void
    filterPlaceF: (payload: PlaceFinderPayload) => void
    payload: PlaceFinderPayload | undefined
    setPayload: (payload: PlaceFinderPayload) => void
    placeList: PlaceRow[]
}
export const PlaceContext = createContext<PlaceContent | null>(null);


const PlaceContextProvider: React.FC<React.ReactNode> = ({ children }) => {

    const [place, setPlace] = useState<PlaceDetail>({} as PlaceDetail)
    const [payload, setPayload] = useState<PlaceFinderPayload>()
    const [placeList, setPlaceList] = useState<PlaceRow[]>([]);
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

    const filterPlaceF = (payload: PlaceFinderPayload) => {
        console.log(payload)
        filterPlace(payload as PlaceFinderPayload).then((place: any) => {
            setPlaceList(place.result.content)
        }).catch((err: string) => {
            console.log(err)
        })
    }

    return <PlaceContext.Provider value={{place,fetchPlace,filterPlaceF,payload, setPayload,placeList}}> {children}</PlaceContext.Provider>
}

 export  default PlaceContextProvider;