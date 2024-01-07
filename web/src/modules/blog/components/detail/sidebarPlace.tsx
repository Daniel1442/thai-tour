import {Card} from "react-bootstrap";
import React from "react";
import StarRatings from "react-star-ratings";

interface BlogPlaceProps {
    image: string;
    name: string;
    price: number;
    date: string;
    rating: number;
}

const SidebarPlace: React.FC<BlogPlaceProps> = ({image, date, price, rating, name}) => {


    return <div className={'col-12 mb-3 d-flex justify-content-center cursor-pointer'}>
        <Card className={'border-0'}>
            <Card.Body className={'background-blue font-white  d-flex justify-content-between py-2'}>
                <Card.Text className={'my-0'}>{name}</Card.Text>
                <Card.Text className={'my-0'}>
                    <b>{price} Kč</b>
                </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={image} className={'border-0'}/>
            <Card.Body className={'background-white font-black  d-flex justify-content-between py-2'}>
                <Card.Text className={'my-0'} style={{paddingTop: '3px'}}> {date}</Card.Text>
                <Card.Text>
                    <StarRatings
                        rating={rating}
                        starRatedColor="gold"
                        numberOfStars={rating}
                        name='rating'
                        starDimension="15px"
                        starSpacing="0px"
                    />
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
}

export default SidebarPlace;