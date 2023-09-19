import React, {useContext, useEffect, useState} from 'react';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";
import {PlaceFinderPayload} from "../../homepage/models";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faCity, faGlobe, faSearch} from "@fortawesome/free-solid-svg-icons";


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

    const [showType, setShowType] = useState<boolean>(true);
    const [showLocation, setShowLocation] = useState<boolean>(true);

    let width = typeof window !== 'undefined' && window.innerWidth;

    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
        if (width < 768) {
            setShowType(false)
            setShowLocation(false)
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
            <hr/>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'w-100'}>
                        <label className="form-label color-black">Lokalita</label>
                        <FontAwesomeIcon icon={faGlobe} className={'ms-2'}/>
                        <FontAwesomeIcon icon={faAngleDown} className={'ms-2 mt-1'} style={{float: 'right'}}
                                         onClick={() => setShowLocation(!showLocation)}/>
                    </div>
                    {showLocation &&
                        <div className="entry-content mt-2">
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Bangkok a okolí
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Pattaya a okolí
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Koh Samui
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Phuket
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Phi Phi
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Koh Samet
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Krabi
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Hua Hin
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Koh Lanta
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Koh Phangan
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Koh Chang
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Koh Kood
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Khao Lak
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Koh Lipe
                                    </label>
                                </div>
                                <small>21</small>
                            </div> <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                            <div>
                                <input className="form-check-input" type="checkbox"/>
                                <label className="form-check-label">
                                    Koh Tao
                                </label>
                            </div>
                            <small>21</small>
                        </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Koh Yao
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Chiang Mai
                                    </label>
                                </div>
                                <small>21</small>
                            </div>
                            <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                                <div>
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">
                                        Chiang Rai
                                    </label>
                                </div>
                                <small>21</small>
                            </div>



                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default SidebarFilter;
