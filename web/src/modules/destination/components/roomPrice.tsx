import React from 'react';

export interface RoomPriceProps {
    price: number;
}

const RoomPrice: React.FC<RoomPriceProps> = ({price}) => {

    return (
        <div className={'col-lg-3 room-price'}>
            <button className={'btn font-white background-yellow'}>od {price} Kč za osobu</button>
        </div>
    )
}
export default RoomPrice;
