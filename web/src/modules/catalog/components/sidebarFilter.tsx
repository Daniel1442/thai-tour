import React, {useContext, useEffect, useState} from 'react';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";
import {PlaceFinderPayload} from "../../homepage/models";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faBurger,
    faCity,
    faClock,
    faHotel,
    faMoneyBill1Wave,
    faRankingStar,
    faSearch,
    faStar,
    faTelevision
} from "@fortawesome/free-solid-svg-icons";


const SidebarFilter: React.FC = () => {

    const {
        filterPlaceF,
        payload,
        setPayload
    } = useContext(PlaceContext) as PlaceContent;
    const setFilter = (filterPayLoad: PlaceFinderPayload) => {
        setPayload({location: filterPayLoad.location as string, type: filterPayLoad.type} as PlaceFinderPayload);
        filterPlaceF({location: filterPayLoad.location as string, type: filterPayLoad.type} as PlaceFinderPayload);
    };

    const [showPrice, setShowPrice] = useState<boolean>(true);
    const [showStars, setShowStars] = useState<boolean>(false);
    const [showPopular, setShowPopular] = useState<boolean>(false);
    const [showType, setShowType] = useState<boolean>(false);
    const [showReview, setShowReview] = useState<boolean>(false);
    const [showEquipment, setShowEquipment] = useState<boolean>(false);
    const [showRoom, setShowRoom] = useState<boolean>(false);
    const [showFood, setShowFood] = useState<boolean>(false);
    // const [showLocation, setShowLocation] = useState<boolean>(true);

    let width = typeof window !== 'undefined' && window.innerWidth;

    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
        if (width < 768) {
            setShowType(false)
            setShowStars(false)
            setShowPopular(false)
            setShowReview(false)
            setShowEquipment(false)
            setShowRoom(false)
            setShowFood(false)
            // setShowLocation(false)
        }
    }, [width]);
    return (
        <div className={'destinationSideBar background-white rounded p-3 mobilePaddingColumn'}>
            <div className={'row'}>
                <div className={'col-12 mt-3'}>
                    <label className="form-label color-black">Vyhledejte destinaci</label>
                    <input type="text" className="form-control"/>
                    <FontAwesomeIcon icon={faSearch} className={'searchInput'}/>
                </div>
            </div>
            <hr className={'my-4'}/>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'w-100'}>

                        <label className="form-label color-black">Cena</label>
                        <FontAwesomeIcon icon={faMoneyBill1Wave} className={'ms-2'}/>
                        <FontAwesomeIcon icon={faAngleDown} className={'ms-2 mt-1'} style={{float: 'right'}}
                                         onClick={() => setShowPrice(!showPrice)}/>
                    </div>
                    {showPrice       &&
                        <div className="entry-content mt-2">
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        0 Kč - 1300 Kč za noc
                                    </label>
                                </div>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        1300 Kč – 2500 Kč za noc
                                    </label>
                                </div>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        2500 Kč – 3800 Kč za noc
                                    </label>
                                </div>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        3800 Kč – 5000 Kč za noc
                                    </label>
                                </div>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        5000 Kč + za noc
                                    </label>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <hr className={'my-4'}/>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'w-100'}>

                        <label className="form-label color-black">Hvězdičky</label>
                        <FontAwesomeIcon icon={faStar} className={'ms-2'}/>
                        <FontAwesomeIcon icon={faAngleDown} className={'ms-2 mt-1'} style={{float: 'right'}}
                                         onClick={() => setShowStars(!showStars)}/>
                    </div>
                    {showStars &&
                        <div className="entry-content mt-2">
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        1*
                                    </label>
                                </div>
                                <small>21</small>

                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        2*
                                    </label>
                                </div>
                                <small>21</small>

                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        3*
                                    </label>
                                </div>
                                <small>21</small>

                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        4*
                                    </label>
                                </div>
                                <small>21</small>

                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        5*
                                    </label>
                                </div>
                                <small>21</small>

                            </div>
                        </div>
                    }
                </div>
            </div>
            <hr className={'my-4'}/>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'w-100'}>

                        <label className="form-label color-black">Populární</label>
                        <FontAwesomeIcon icon={faClock} className={'ms-2'}/>
                        <FontAwesomeIcon icon={faAngleDown} className={'ms-2 mt-1'} style={{float: 'right'}}
                                         onClick={() => setShowPopular(!showPopular)}/>
                    </div>
                    {showPopular &&
                        <div className="entry-content mt-2">
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Snídaně v ceně
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        U pláže
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Bazén
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Wi-Fi zdarma
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Bungalov
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Vhodné pro děti
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Klidná lokalita
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Parkoviště
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Sportovní aktivity
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Nákupy
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Domy
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Od 18 let
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <hr className={'my-4'}/>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'w-100'}>

                        <label className="form-label color-black">Typ ubytování</label>
                        <FontAwesomeIcon icon={faCity} className={'ms-2'}/>
                        <FontAwesomeIcon icon={faAngleDown} className={'ms-2 mt-1'} style={{float: 'right'}}
                                         onClick={() => setShowType(!showType)}/>
                    </div>
                    {showType &&
                        <div className="entry-content mt-2">
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Hotely & Resorty
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Apartmány
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Vily
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Domy
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <hr className={'my-4'}/>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'w-100'}>

                        <label className="form-label color-black">Hodnocení</label>
                        <FontAwesomeIcon icon={faRankingStar} className={'ms-2'}/>
                        <FontAwesomeIcon icon={faAngleDown} className={'ms-2 mt-1'} style={{float: 'right'}}
                                         onClick={() => setShowReview(!showReview)}/>
                    </div>
                    {showReview &&
                        <div className="entry-content mt-2">
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Velmi dobré 8 a více
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Dobré 7 a více
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Dostačující
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <hr className={'my-4'}/>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'w-100'}>

                        <label className="form-label color-black">Zařízení hotelu</label>
                        <FontAwesomeIcon icon={faHotel} className={'ms-2'}/>
                        <FontAwesomeIcon icon={faAngleDown} className={'ms-2 mt-1'} style={{float: 'right'}}
                                         onClick={() => setShowEquipment(!showEquipment)}/>
                    </div>
                    {showEquipment &&
                        <div className="entry-content mt-2">
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Wi-Fi zdarma
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Parkoviště
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Fitness centrum
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Bazén
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Wellness & Spa
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Rodinný pokoj
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Bezbariérové
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Restaurace
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Bar
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Pokojová služba
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <hr className={'my-4'}/>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'w-100'}>

                        <label className="form-label color-black">Vybavení pokoje</label>
                        <FontAwesomeIcon icon={faTelevision} className={'ms-2'}/>
                        <FontAwesomeIcon icon={faAngleDown} className={'ms-2 mt-1'} style={{float: 'right'}}
                                         onClick={() => setShowRoom(!showRoom)}/>
                    </div>
                    {showRoom &&
                        <div className="entry-content mt-2">
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        TV
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Klimatizace
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Balkón/Terasa
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Výhled na moře
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Trezor
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Vana
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Kávový a čajový servis
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Kuchyň
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <hr className={'my-4'}/>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'w-100'}>

                        <label className="form-label color-black">Stravování</label>
                        <FontAwesomeIcon icon={faBurger} className={'ms-2'}/>
                        <FontAwesomeIcon icon={faAngleDown} className={'ms-2 mt-1'} style={{float: 'right'}}
                                         onClick={() => setShowFood(!showRoom)}/>
                    </div>
                    {showRoom &&
                        <div className="entry-content mt-2">
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Snídaně v ceně
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Polopenze
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Plná penze
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        All inclusive
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Vlastní stravování
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <hr/>
            {/*<div className={'row'}>*/}
            {/*    <div className={'col-12'}>*/}
            {/*        <div className={'w-100'}>*/}
            {/*            <label className="form-label color-black">Lokalita</label>*/}
            {/*            <FontAwesomeIcon icon={faGlobe} className={'ms-2'}/>*/}
            {/*            <FontAwesomeIcon icon={faAngleDown} className={'ms-2 mt-1'} style={{float: 'right'}}*/}
            {/*                             onClick={() => setShowLocation(!showLocation)}/>*/}
            {/*        </div>*/}
            {/*        {showLocation &&*/}
            {/*            <div className="entry-content mt-2">*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Bangkok a okolí*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Pattaya a okolí*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Koh Samui*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Phuket*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Phi Phi*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Koh Samet*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Krabi*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Hua Hin*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Koh Lanta*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Koh Phangan*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Koh Chang*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Koh Kood*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Khao Lak*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Koh Lipe*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Koh Tao*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Koh Yao*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Chiang Mai*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            {/*                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>*/}
            {/*                    <div>*/}
            {/*                        <input className="form-check-input" type="checkbox"/>*/}
            {/*                        <label className="form-check-label">*/}
            {/*                            Chiang Rai*/}
            {/*                        </label>*/}
            {/*                    </div>*/}
            {/*                    <small>21</small>*/}
            {/*                </div>*/}
            
            
            {/*            </div>*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
export default SidebarFilter;
