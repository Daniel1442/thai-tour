import React, {useContext, useEffect, useRef, useState} from 'react';
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
        <div className={'destinationSideBar background-white rounded p-3'}>
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
                        <FontAwesomeIcon icon={faAngleDown} className={'ms-2 mt-1'} style={{float: 'right'}} onClick={() => setShowType(!showType )}/>
                    </div>
                    {showType &&
                        <div className="entry-content mt-2">
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   type: 'HOTEL',
                                   location: payload?.location
                               } as PlaceFinderPayload)}>&#129170; Hotely & Resorty</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   type: 'APARTMENTS',
                                   location: payload?.location
                               } as PlaceFinderPayload)}>&#129170; Apartmány</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   type: 'VILLA',
                                   location: payload?.location
                               } as PlaceFinderPayload)}>&#129170; Vily</p>
                            <p className={'font-black  cursor-pointer mb-0'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   type: 'HOUSE',
                                   location: payload?.location
                               } as PlaceFinderPayload)}>&#129170; Domy</p>
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
                        <FontAwesomeIcon icon={faAngleDown} className={'ms-2 mt-1'} style={{float: 'right'}} onClick={() => setShowLocation(!showLocation)}/>
                    </div>
                    {showLocation &&
                        <div className="entry-content mt-2">
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({location: null, type: null})}>&#129170; Zobrazit
                                vše</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Bangkok a okolí',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Bangkok a
                                okolí</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Pattaya a okolí',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Pattaya a
                                okolí</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Koh Samui',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Koh Samui</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Phuket',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Phuket</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Phi Phi',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Phi Phi</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Koh Samet',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Koh Samet</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Krabi',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Krabi</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Hua Hin',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Hua Hin</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Koh Lanta',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Koh Lanta</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Koh Phangan',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Koh Phangan</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Koh Chang',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Koh Chang</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Koh Kood',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Koh Kood</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Khao Lak',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Khao Lak</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Koh Lipe',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Koh Lipe</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Koh Tao',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Koh Tao</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Koh Yao',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Koh Yao</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Chiang Mai',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Chiang Mai</p>
                            <p className={'font-black  cursor-pointer'} style={{fontSize: '14px'}}
                               onClick={() => setFilter({
                                   location: 'Chiang Rai',
                                   type: payload?.type
                               } as PlaceFinderPayload)}>&#129170; Chiang Rai</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default SidebarFilter;
