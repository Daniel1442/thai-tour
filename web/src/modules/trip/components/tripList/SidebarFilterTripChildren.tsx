import React, {useContext} from 'react';
import {useRouter} from "next/router";
import {PlaceParameterValue} from "../../../homepage/models";
import {TripContent, TripContext} from "../../../../context/tripContext";

interface ComponentProps {
    childrenParam: PlaceParameterValue
}

const SidebarFilterTripChildren: React.FC<ComponentProps> = ({childrenParam}) => {
    const router = useRouter();

    const {
        payload,
        setPayload
    } = useContext(TripContext) as TripContent;

    const removeValueFromPayload = (valueToRemove: string): void => {
        setPayload((prevPayload: any) => {
            const updatedList = prevPayload.parameterValuesList.filter((value: any) => value !== valueToRemove);
            return {
                ...prevPayload,
                parameterValuesList: updatedList,
            };
        });
    };

    const addValueFromPayload = (valueToAdd: string): void => {
        setPayload((prevPayload: any) => {
            let updatedList = [...prevPayload.parameterValuesList, valueToAdd];
            return {
                ...prevPayload,
                parameterValuesList: updatedList,
            };
        })
    };


    const filterClick = (e: any) => {
        if (e.target.checked) {
            addValueFromPayload(childrenParam.id as string);
        } else {
            removeValueFromPayload(childrenParam.id as string);
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
export default SidebarFilterTripChildren;
