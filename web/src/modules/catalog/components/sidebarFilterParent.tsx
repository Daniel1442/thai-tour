import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faIcons} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {PlaceParameterValue} from "../../homepage/models";
import SidebarFilterChildren from "./sidebarFilterChildren";
import SidebarFilterTripChildren from "../../trip/components/SidebarFilterTripChildren";
import SidebarFilterGolfChildren from "../../thaiGolf/components/sidebarFilterGolfChildren";

interface ComponentProps {
    name: string
    childrenParams: PlaceParameterValue[]
    type: string
}

const SidebarFilterParent: React.FC<ComponentProps> = ({name, childrenParams, type}) => {
    const router = useRouter();

    const [show, setShow] = useState<boolean>(false)

    return (
        <>
            <hr className={'my-4'}/>
            <div className={'col-12'}>
                <div className={'w-100'}>
                    <label className="form-label color-black">{name}</label>
                    <FontAwesomeIcon icon={faIcons} className={'ms-2'}/>
                    <FontAwesomeIcon icon={faAngleDown} className={'ms-2 mt-1'} style={{float: 'right'}}
                                     onClick={() => setShow(!show)}/>
                </div>
                {type === 'TRIP' && show && childrenParams.map((childrenParam) => {
                    return <SidebarFilterTripChildren childrenParam={childrenParam}/>
                })}
                {type === 'GOLF' && show && childrenParams.map((childrenParam) => {
                    return <SidebarFilterGolfChildren childrenParam={childrenParam}/>
                })}
                {type === 'PLACE' && show && childrenParams.map((childrenParam) => {
                    return <SidebarFilterChildren childrenParam={childrenParam}/>
                })}
            </div>
        </>
    )
}
export default SidebarFilterParent;
