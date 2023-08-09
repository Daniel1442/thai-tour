import React, {useContext, useEffect, useRef, useState} from 'react';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";
import {PlaceFinderPayload} from "../../homepage/models";


interface DropdownProps {
    name: string
}

const DropdownPlaces: React.FC<DropdownProps> = ({name}) => {

    const [toggle, setToggle] = useState(false)

    const {
        filterPlaceF,
        payload,
        setPayload
    } = useContext(PlaceContext) as PlaceContent;
    const setFilter = (filterPayLoad: PlaceFinderPayload) => {
        setPayload({location: filterPayLoad.location as string, type: filterPayLoad.type} as PlaceFinderPayload);
        filterPlaceF({location: filterPayLoad.location as string, type: filterPayLoad.type} as PlaceFinderPayload);
    };
    const useOutsideAlerter = (ref: any) => {
        useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setToggle(false)
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    return (
        <div className={'dropdown'}>
            <a href="#" className="nav-item nav-link font-white dropdown-toggle" onClick={() => setToggle(!toggle)}
               data-bs-toggle="dropdown" aria-expanded="false">{name}</a>
            <ul className={`dropdown-menu background-blue ${toggle ? 'show' : ''}`} ref={wrapperRef}>
                <li><a className="dropdown-item font-white" href="/catalog"
                       onClick={() => setFilter({location: null, type: null})}>Zobrazit vše</a></li>
                <li><a className="dropdown-item font-white" href="/catalog" onClick={() => setFilter({
                    location: 'Bangkok a okolí',
                    type: payload?.type
                } as PlaceFinderPayload)}>Bangkok a okolí</a></li>
                <li><a className="dropdown-item font-white" href="/catalog" onClick={() => setFilter({
                    location: 'Pattaya a okolí',
                    type: payload?.type
                } as PlaceFinderPayload)}>Pattaya a okolí</a></li>
                <li><a className="dropdown-item font-white" href="/catalog"  onClick={() => setFilter({
                    location: 'Koh Samui',
                    type: payload?.type
                } as PlaceFinderPayload)}>Koh Samui</a></li>
                <li><a className="dropdown-item font-white" href="/catalog"  onClick={() => setFilter({
                    location: 'Phuket',
                    type: payload?.type
                } as PlaceFinderPayload)}>Phuket</a></li>
                <li><a className="dropdown-item font-white" href="/catalog" onClick={() => setFilter({
                    location: 'Phi Phi',
                    type: payload?.type
                } as PlaceFinderPayload)}>Phi Phi</a></li>
                <li><a className="dropdown-item font-white" href="/catalog" onClick={() => setFilter({
                    location: 'Koh Samet',
                    type: payload?.type
                } as PlaceFinderPayload)}>Koh Samet</a></li>
                <li><a className="dropdown-item font-white" href="/catalog"  onClick={() => setFilter({
                    location: 'Krabi',
                    type: payload?.type
                } as PlaceFinderPayload)}>Krabi</a></li>
                <li><a className="dropdown-item font-white" href="/catalog" onClick={() => setFilter({
                    location: 'Hua Hin',
                    type: payload?.type
                } as PlaceFinderPayload)}>Hua Hin</a></li>
                <li><a className="dropdown-item font-white" href="/catalog"  onClick={() => setFilter({
                    location: 'Koh Lanta',
                    type: payload?.type
                } as PlaceFinderPayload)}>Koh Lanta</a></li>
                <li><a className="dropdown-item font-white" href="/catalog" onClick={() => setFilter({
                    location: 'Koh Phangan',
                    type: payload?.type
                } as PlaceFinderPayload)}>Koh Phangan</a></li>
                <li><a className="dropdown-item font-white" href="/catalog" onClick={() => setFilter({
                    location: 'Koh Chang',
                    type: payload?.type
                } as PlaceFinderPayload)}>Koh Chang</a></li>
                <li><a className="dropdown-item font-white" href="/catalog"  onClick={() => setFilter({
                    location: 'Koh Kood',
                    type: payload?.type
                } as PlaceFinderPayload)}> Koh Kood</a></li>
                <li><a className="dropdown-item font-white" href="/catalog" onClick={() => setFilter({
                    location: 'Khao Lak',
                    type: payload?.type
                } as PlaceFinderPayload)}> Khao Lak</a></li>
                <li><a className="dropdown-item font-white" href="/catalog" onClick={() => setFilter({
                    location: 'Koh Lipe',
                    type: payload?.type
                } as PlaceFinderPayload)}>Koh Lipe</a></li>
                <li><a className="dropdown-item font-white" href="/catalog" onClick={() => setFilter({
                    location: 'Koh Tao',
                    type: payload?.type
                } as PlaceFinderPayload)}>Koh Tao</a></li>
                <li><a className="dropdown-item font-white" href="/catalog"onClick={() => setFilter({
                    location: 'Koh Yao',
                    type: payload?.type
                } as PlaceFinderPayload)}>Koh Yao</a></li>
                <li><a className="dropdown-item font-white" href="/catalog" onClick={() => setFilter({
                    location: 'Chiang Mai',
                    type: payload?.type
                } as PlaceFinderPayload)}>Chiang Mai</a></li>
                <li><a className="dropdown-item font-white" href="/catalog" onClick={() => setFilter({
                    location: 'Chiang Rai',
                    type: payload?.type
                } as PlaceFinderPayload)}> Chiang Rai</a></li>
            </ul>
        </div>
    )
}
export default DropdownPlaces;