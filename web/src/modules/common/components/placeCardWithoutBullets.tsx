import React from "react";

interface ComponentProps {
    heading: string
    text: string
}

const PlaceCardWithoutBullets: React.FC<ComponentProps> = ({heading, text}) => {
    return (
        <div className={'row m-3'}>
            <div className={'col-12'}>
                <div className={"mt-3 col-12 d-flex justify-content-start"}><h5>{heading}</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p>{text}</p></div>
            </div>
        </div>
    )
}
export default PlaceCardWithoutBullets