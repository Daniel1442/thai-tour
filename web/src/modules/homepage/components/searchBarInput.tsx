import React, {useContext} from 'react';

import Select from 'react-select';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";
import {placeOptions} from "../models/index";


export default function SearchBarInput() {
    const customStyles = {
        menuPortal: (provided: any) => ({ ...provided, zIndex: 9999 }),
        menu: (provided: any) => ({ ...provided, zIndex: 9999 })
    }
    const {
        setPayload
    } = useContext(PlaceContext) as PlaceContent;
    const handleChange = (selectedOption: any) => {
        setPayload({location: selectedOption.value as string, type: null});
    };
    // @ts-ignore
    return (
            <Select
                aria-labelledby="aria-label"
                inputId="aria-example-input"
                name="location"
                menuPortalTarget={typeof document !== "undefined" ? document.body : null}
                menuPosition={'fixed'}
                styles={customStyles}
                onChange={handleChange}
                placeholder={"Kam to bude"}
                options={placeOptions}
            />

    );
}
