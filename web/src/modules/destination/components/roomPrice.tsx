import React from 'react';
import Button from "react-bootstrap/Button";

export interface RoomPriceProps {
    price: number;
}

const RoomPrice: React.FC<RoomPriceProps> = ({price}) => {

    return (
        <div className={'col-lg-3'}>
            <Button className={'font-white background-blue'}>od {price} Kč za osobu</Button>
        </div>
    )
}
export default RoomPrice;
