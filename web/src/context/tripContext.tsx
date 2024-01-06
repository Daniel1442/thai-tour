import * as React from 'react';
import {createContext, useState} from 'react';
import {CityRow, GolfDetail, PlaceParameters, TripFinderPayload} from "../modules/homepage/models";
import {cityList, filterTrip, getDetail, getFilterParameters} from "../modules/trip/action";
import {useRouter} from "next/router";


export type TripContent = {
    trip: GolfDetail
    cities: CityRow[]
    fetchParameters: () => void
    parameters: PlaceParameters[]
    payload: TripFinderPayload
    setPayload: (payload: any) => void
    fetchTrip: (id: string) => void
    filterTripF: (payload: TripFinderPayload) => void
    fetchCity: () => void
    tripList: GolfDetail[]
}
export const TripContext = createContext<TripContent | null>(null);


const TripContextProvider: React.FC<React.ReactNode> = ({children}) => {

    const router = useRouter();

    const [payload, setPayload] = useState<TripFinderPayload>({} as TripFinderPayload)
    const [trip, setTrip] = useState<GolfDetail>({} as GolfDetail)
    const [tripList, setTripList] = useState<GolfDetail[]>([]);
    const [parameters, setParameterList] =  useState<PlaceParameters[]>([]);
    const [cities, setCities] = useState<CityRow[]>([]);

    const fetchTrip = (id: string) => {
        getDetail(id as string).then((trip: any) => {
            setTrip(trip.result)
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

    const filterTripF = (payload: TripFinderPayload) => {
        filterTrip(payload as TripFinderPayload).then((place: any) => {
            setTripList(place.result)
        }).catch((err: string) => {
            console.log(err)
        })
    }

    return <TripContext.Provider value={{
        trip,
        cities,
        payload,
        fetchParameters,
        parameters,
        setPayload,
        fetchCity,
        fetchTrip,
        filterTripF,
        tripList
    }}> {children}</TripContext.Provider>
}

export default TripContextProvider;