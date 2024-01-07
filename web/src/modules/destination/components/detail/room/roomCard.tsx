import React from 'react';
import ImageGallery from "react-image-gallery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faIcons} from "@fortawesome/free-solid-svg-icons";
import {ImageList, Parameters} from "../../../../homepage/models";
import Loader from "../../../../common/components/loader";

interface RoomCardProps {
    name: string;
    listOfRoomParams: Parameters[]
    listOfRoomImages: ImageList[]
}

const RoomCard: React.FC<RoomCardProps> = ({name,listOfRoomParams,listOfRoomImages}) => {

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
        <div className={'col-lg-5 col-sm-12 mb-3'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <b>{name}</b>
                </div>
                <div className={'col-12'}>
                    <ImageGallery items={listOfRoomImages.length > 0 ? listOfRoomImages : images} showNav={true} showThumbnails={true} infinite={true}
                                  showFullscreenButton={false} showPlayButton={false} lazyLoad={true} onImageLoad={() => {
                        return <Loader text={'Načítání...'}/>
                    }}/>
                </div>
                <div className={'col-12 mt-2'}>
                    {listOfRoomParams && listOfRoomParams.length > 0 && listOfRoomParams.map((parameter, index) => {
                        return (
                            <>
                                <FontAwesomeIcon icon={faIcons}
                                                 style={{
                                                     color: '#00FFFF',
                                                     padding: "4px 0px 0px 0px"
                                                 }}/> {parameter.name}
                                {index % 2 !== 0 && <br className={'mobile'}/>}
                            </>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}
export default RoomCard;
