import React from 'react';
import {PlaceParameters} from "../../homepage/models";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import SidebarFilterParent from "./sidebarFilterParent";

export interface FilterParams {
    params: PlaceParameters[]
}

const SidebarFilter: React.FC<FilterParams> = ({params}) => {


    let width = typeof window !== 'undefined' && window.innerWidth;

    console.log(params)
    return (
        <div className={'destinationSideBar background-white rounded px-3 pb-3 pt-0 mobilePaddingColumn'}>
            <div className={'row'}>
                <div className={'col-12 mt-3'}>
                    <label className="form-label color-black">Vyhledejte destinaci</label>
                    <input type="text" className="form-control"/>
                    <FontAwesomeIcon icon={faSearch} className={'searchInput'}/>
                </div>
            </div>
            {params && params.map((parameter, index) => {
                return (
                    <SidebarFilterParent name={parameter.name} childrenParams={parameter.parameterValueList}/>
                )
            })}
        </div>
    )
}
export default SidebarFilter;
