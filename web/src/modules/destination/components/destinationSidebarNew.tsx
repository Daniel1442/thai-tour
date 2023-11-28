import React, {useContext, useState} from 'react';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faIcons} from "@fortawesome/free-solid-svg-icons";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        border: '1px solid #EDEDED',
        boxShadow: '0 0 50px #ccc',
        borderRadius: '4px',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999
    },
};

const customStylesFomr = {
    content: {
        top: '50%',
        left: '30%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-30%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999
    },
};
const DestinationSidebarNew: React.FC = () => {
    const {
        place,
        fetchPlace
    } = useContext(PlaceContext) as PlaceContent;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [modalIsOpenForm, setIsOpenForm] = React.useState(false);

    function openModalForm() {
        setIsOpenForm(true);
    }

    const findMaxCapacity = () => {
        let maxCapacity = 0;

        place && place.rooms && place.rooms.length > 0 ? place.rooms.forEach((room, index) => {
            if (maxCapacity < room.capacity) {
                maxCapacity = room.capacity;
            }
        }) : null;

        return maxCapacity
    }

    const findLowestPrice = () => {
        let lowestPrice = Number.MAX_SAFE_INTEGER;
        place && place.rooms && place.rooms.length > 0 ? place.rooms.forEach((room, index) => {
            if (lowestPrice > room.price) {
                lowestPrice = room.price;
            }
        }) : null;

        return lowestPrice
    }

    function closeModalForm() {
        setIsOpenForm(false);
    }

    const [value, setValue] = useState<number>(0);

    return (
        <div className={'destinationSideBar'}>
            <div className={'row'}>
                <div className={'col-12 mt-5 '}>
                    <b className={'me-3'}>Lokalita:</b> <>{place.location} (<a href={'#'}>Ukázat na mapě</a>)</>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={'me-3'}>Max. Kapacita: {findMaxCapacity() ? findMaxCapacity() : 'Neuvedena'}</b>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={'me-3'}>Lokalita:</b> již
                    od <b>od {findLowestPrice() ? findLowestPrice() : 'Neuvedena'}</b> /noc
                </div>
                <>
                    {place && place.placeParameterList && place.placeParameterList.length > 0 && place.placeParameterList.map((parameter, index) => {
                        if (parameter.showOnDetail) {

                            if (index % 2 !== 0) {
                                return (
                                    <div className={'col-12 mt-5'}>
                                        <FontAwesomeIcon icon={faIcons}
                                                         style={{
                                                             color: '#00FFFF',
                                                             padding: "4px 0px 0px 0px",
                                                         }}/> {place.placeParameterList[index - 1].name}
                                        <FontAwesomeIcon icon={faIcons}
                                                         style={{
                                                             color: '#00FFFF',
                                                             marginLeft: '16px',
                                                             padding: "4px 0px 0px 0px"
                                                         }}/> {place.placeParameterList[index].name}
                                    </div>
                                )
                            } else return;
                        } else return;
                    })
                    }
                </>
                <div className={'col-12 mt-5 mobilePaddingColumn'}>
                    <button
                        className={'btn background-yellow font-white w-100 p-3 text-center cursor-pointer mobilePaddingColumn'}>Nezávazná
                        poptávka ceny
                    </button>
                </div>

            </div>
        </div>
    )
}
export default DestinationSidebarNew;