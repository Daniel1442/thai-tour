import React from "react";
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";

interface ComponentProps {
    heading: string
    img: string
}

const PlaceTripCard: React.FC<ComponentProps> = ({heading, img}) => {
    return (
        <div className={'col-lg-3 col-sm-12'}>
            <Card style={{width: '18rem'}} className={'border-0 mb-5 cardShadow cursor-pointer'}>
                <Card.Img src={img} style={{borderRadius: '4px 4px 0px 0px'}}/>
                {/*<Card.Body>*/}
                    <button type="submit" className="btn background-yellow font-white" style={{borderRadius: '0px 0px 4px 4px'}}>{heading}</button>
                {/*</Card.Body>*/}
            </Card>
        </div>
    )
}
export default PlaceTripCard;