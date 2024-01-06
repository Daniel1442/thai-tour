import * as React from 'react';
import {createContext, useState} from 'react';
import {CityRow, PlaceParameters} from "../modules/homepage/models";
import {useRouter} from "next/router";
import {GolfDetail, GolfFinderPayload} from "../modules/thaiGolf/module";
import {cityList, filterGolf, getDetail, getFilterParameters} from "../modules/thaiGolf/action";


export type GolfContent = {
    golf: GolfDetail
    cities: CityRow[]
    fetchParameters: () => void
    parameters: PlaceParameters[]
    payload: GolfFinderPayload
    setPayload: (payload: any) => void
    fetchGolf: (id: string) => void
    filterGolfF: (payload: GolfFinderPayload) => void
    fetchCity: () => void
    golfList: GolfDetail[]
}
export const GolfContext = createContext<GolfContent | null>(null);


const GolfContextProvider: React.FC<React.ReactNode> = ({children}) => {

    const router = useRouter();

    const [payload, setPayload] = useState<GolfFinderPayload>({} as GolfFinderPayload)
    const [golf, setGolf] = useState<GolfDetail>({} as GolfDetail)
    const [golfList, setGolfList] = useState<GolfDetail[]>([]);
    const [parameters, setParameterList] =  useState<PlaceParameters[]>([]);
    const [cities, setCities] = useState<CityRow[]>([]);

    const fetchGolf = (id: string) => {
        getDetail(id as string).then((golf: any) => {
            setGolf(golf.result)
        }).catch((err: string) => {
            console.log(err)
        })
    }

    const fetchCity = () => {
        cityList().then((cities: any) => {
                setCities(cities.result);
            }
        ).catch((err: string) => {
            console.log(err)
        })
    }

    const fetchParameters = () => {
        getFilterParameters().then((params: any) => {
            setParameterList(params.result);
        }).catch((err: string) => {
            console.log(err)
        })
    }

    const filterGolfF = (payload: GolfFinderPayload) => {
        filterGolf(payload as GolfFinderPayload).then((place: any) => {
            setGolfList(place.result)
        }).catch((err: string) => {
            console.log(err)
        })
    }

    return <GolfContext.Provider value={{
        golf,
        cities,
        payload,
        fetchParameters,
        parameters,
        setPayload,
        fetchCity,
         fetchGolf,
        filterGolfF,
        golfList
    }}> {children}</GolfContext.Provider>
}

export default GolfContextProvider;