import React, {useContext} from 'react';
import ImageGallery from "react-image-gallery";
import {GolfContent, GolfContext} from "../../../../context/golfContext";

const InformationImageCard: React.FC = () => {
    const {
        golf
    } = useContext(GolfContext) as GolfContent;


    const images = [
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        }, {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        }, {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        }, {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        }, {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        }, {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        }
    ];


    return (
        <div className={'informationImageCard'}>
            <div className={'row my-3'}>
                <div className={'col-12'}>
                    <ImageGallery items={images } showNav={true} showThumbnails={true} infinite={true}
                                  showFullscreenButton={true} showPlayButton={false}/>
                </div>
            </div>

        </div>
    )
}
export default InformationImageCard;