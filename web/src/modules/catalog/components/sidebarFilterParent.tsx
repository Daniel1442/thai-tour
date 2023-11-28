import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faIcons} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {PlaceParameterValue} from "../../homepage/models";
import SidebarFilterChildren from "./sidebarFilterChildren";

interface ComponentProps {
    name: string
    childrenParams: PlaceParameterValue[]
}

const SidebarFilterParent: React.FC<ComponentProps> = ({name, childrenParams}) => {
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
               {show && childrenParams.map((childrenParam) => {
                   return <SidebarFilterChildren childrenParam={childrenParam}/>
               }) }
           </div>
       </>
    )
}
export default SidebarFilterParent;
