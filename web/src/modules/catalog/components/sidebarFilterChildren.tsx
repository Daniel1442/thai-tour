import React, {useContext} from 'react';
import {useRouter} from "next/router";
import {PlaceFinderPayload, PlaceParameterValue} from "../../homepage/models";
import {PlaceContent, PlaceContext} from "../../../context/placeContext";

interface ComponentProps {
    childrenParam: PlaceParameterValue
}

const SidebarFilterChildren: React.FC<ComponentProps> = ({childrenParam}) => {
    const router = useRouter();

    const {
        payload,
        setPayload
    } = useContext(PlaceContext) as PlaceContent;

    const filterClick = (e: any) => {
        if (e.target.checked) {
            console.log(payload)
            // @ts-ignore
            payload?.parameterValuesList.push(childrenParam.id as string);
            setPayload(payload as PlaceFinderPayload);
            console.log(payload)
        } else {
            // @ts-ignore
            payload?.parameterValuesList.splice(payload?.parameterValuesList.indexOf(childrenParam.id), 1)
            setPayload(payload as PlaceFinderPayload);
        }

    }

    return (
        <>
            <div className="entry-content mt-2">
                <div className="form-check  d-flex" style={{justifyContent: 'space-between'}}>
                    <div>
                        <input className="form-check-input" type="checkbox" onChange={(e) => filterClick(e)}/>
                        <label className="form-check-label">
                            {childrenParam.name}
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SidebarFilterChildren;
