import React from "react";

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