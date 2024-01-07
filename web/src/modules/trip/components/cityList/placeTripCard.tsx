import React from "react";
import {Card} from "react-bootstrap";
import {useRouter} from "next/router";
import {TripRow} from "../../../homepage/models";

interface ComponentProps {
  trip: TripRow
}

const   PlaceTripCard: React.FC<ComponentProps> = ({trip}) => {

    const router = useRouter();

    const redirectToDetail = () => {
        router.push(`/trip?id=${trip.id}`);
    }

    return (
        <div className={'col-lg-3 col-sm-12'} onClick={() =>redirectToDetail()}>
            <Card style={{width: '18rem'}} className={'border-0 mb-5 cardShadow cursor-pointer'}>
                <Card.Img src={trip.image} style={{borderRadius: '4px 4px 0px 0px'}}/>
                {/*<Card.Body>*/}
                    <button type="submit" className="btn background-yellow font-white" style={{borderRadius: '0px 0px 0px 0px'}}>{trip.name}</button>
                <b className={'text-center font-red'}>od {trip.price} Kč</b>
                {/*</Card.Body>*/}
            </Card>
        </div>
    )
}
export default PlaceTripCard;