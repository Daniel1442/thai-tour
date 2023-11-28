import * as React from 'react';
import {createContext, useState} from 'react';
import {TripDetail, TripRow} from "../modules/homepage/models";
import {filterTrip, getDetail} from "../modules/trip/action";


export type TripContent = {
    trip: TripDetail
    fetchTrip: (id: string) => void
    filterTripF: () => void
    tripList: TripRow[]
}
export const TripContext = createContext<TripContent | null>(null);


const TripContextProvider: React.FC<React.ReactNode> = ({children}) => {

    const [trip, setTrip] = useState<TripDetail>({} as TripDetail)
    const [tripList, setTripList] = useState<TripRow[]>([]);
    const fetchTrip = (id: string) => {
        getDetail(id as string).then((trip: any) => {
            setTrip(trip.result)
        }).catch((err: string) => {
            console.log(err)
        })
    }

    const filterTripF = () => {
        filterTrip().then((place: any) => {
            setTripList(place.result.content)
        }).catch((err: string) => {
            console.log(err)
        })
    }

    return <TripContext.Provider value={{
        trip,
        fetchTrip,
        filterTripF,
        tripList
    }}> {children}</TripContext.Provider>
}

export default TripContextProvider;