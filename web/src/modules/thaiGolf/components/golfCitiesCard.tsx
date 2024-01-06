import React, {useContext} from "react";
import {Card} from "react-bootstrap";
import {useRouter} from "next/router";
import {CityRow} from "../../homepage/models";
import {GolfContent, GolfContext} from "../../../context/golfContext";

interface ComponentProps {
    city: CityRow
}

const GolfCitiesCard: React.FC<ComponentProps> = ({city}) => {
    const {
        payload,
        setPayload
    } = useContext(GolfContext) as GolfContent;
    const router = useRouter();

    const redirectToDetail = () => {
        if (city.id) {
            setPayload({"parameterValuesList": [city.id]})
        } else {
            setPayload({"parameterValuesList": []})
        }
        router.push(`/golfList`);
    }

    return (
        <div className={'col-lg-3 col-sm-12'} onClick={() => redirectToDetail()}>
            <Card style={{width: '18rem'}} className={'border-0 mb-5 cardShadow cursor-pointer'}>
                <Card.Img src={city.icon} style={{borderRadius: '4px 4px 0px 0px'}}/>
                {/*<Card.Body>*/}
                <button type="submit" className="btn background-yellow font-white"
                        style={{borderRadius: '0px 0px 0px 0px'}}>{city.name}</button>
                {/*</Card.Body>*/}
            </Card>
        </div>
    )
}
export default GolfCitiesCard;