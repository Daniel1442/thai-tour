import React from "react";
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";

interface ComponentProps {
    heading: string
    paragraph: string
}

const PlaceTripInfo: React.FC<ComponentProps> = ({heading, paragraph}) => {
    return (
        <div>
            <h5>
                {heading}
            </h5>
            <p>
                {paragraph}
            </p>
        </div>
    )
}
export default PlaceTripInfo;