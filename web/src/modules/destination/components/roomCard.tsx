import React from 'react';
import ImageGallery from "react-image-gallery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBathtub, faBed, faHouse, faSnowflake, faTv, faUmbrellaBeach, faWifi} from "@fortawesome/free-solid-svg-icons";

const RoomCard: React.FC = () => {
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
        <div className={'col-lg-5 col-sm-12'}>
            <div className={'row'}>
                <div className={'col-12'}>
                   <b>Apartmá Sunset</b>
                </div>
                <div className={'col-12'}>
                    <ImageGallery items={images} showNav={true} showThumbnails={true} infinite={true}
                                  showFullscreenButton={false} showPlayButton={false}/>
                </div>
                <div className={'col-12'}>

                    <FontAwesomeIcon icon={faWifi}
                                     style={{
                                         color: '#00FFFF',
                                         padding: "4px 0px 0px 0px"
                                     }}/> Internet/wifi
                    <FontAwesomeIcon icon={faUmbrellaBeach}
                                     style={{
                                         color: '#00FFFF',
                                         marginLeft: '16px',
                                         padding: "4px 0px 0px 0px"
                                     }}/> Pláž
                    <br className={'mobile'}/>
                    <FontAwesomeIcon icon={faBed}
                                     style={{
                                         color: '#00FFFF',
                                         padding: "4px 0px 0px 0px"
                                     }}/> 1 velká manželská postel
                    <br  className={'mobile'}/>
                    <FontAwesomeIcon icon={faTv}
                                     style={{
                                         color: '#00FFFF',
                                         padding: "4px 0px 0px 0px"
                                     }}/> TV
                    <FontAwesomeIcon icon={faSnowflake}
                                     style={{
                                         color: '#00FFFF',
                                         marginLeft: '16px',
                                         padding: "4px 0px 0px 0px"
                                     }}/> Klimatizace
                    <br  className={'mobile'}   />
                    <FontAwesomeIcon icon={faBathtub}
                                     style={{
                                         color: '#00FFFF',
                                         padding: "4px 0px 0px 0px"
                                     }}/> Vířivá vana
                    <FontAwesomeIcon icon={faHouse}
                                     style={{
                                         color: '#00FFFF',
                                         marginLeft: '16px',
                                         padding: "4px 0px 0px 0px"
                                     }}/> 44m2
                </div>
            </div>
        </div>
    )
}
export default RoomCard;
