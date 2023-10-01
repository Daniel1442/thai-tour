import React, {useContext, useState} from 'react';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBowlFood,
    faGlassCheers,
    faSnowflake,
    faSwimmingPool,
    faTree,
    faUmbrellaBeach,
    faWeightHanging,
    faWifi
} from "@fortawesome/free-solid-svg-icons";

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

    function closeModalForm() {
        setIsOpenForm(false);
    }

    const [value, setValue] = useState<number>(0);

    return (
        <div className={'destinationSideBar'}>
            <div className={'row'}>
                <div className={'col-12 mt-5 '}>
                    <b className={'me-3'}>Lokalita:</b> <>Thajsko (<a href={'#'}>Ukázat na mapě</a>)</>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={'me-3'}>Strava:</b> <>Snídaně</>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={'me-3'}>Max. Kapacita:</b>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={'me-3'}>Lokalita:</b> již od <b>od 1500,- Kč</b> /noc
                </div>
                <div className={'col-12 mt-5'}>
                    <FontAwesomeIcon icon={faWifi}
                                     style={{
                                         color: '#00FFFF',
                                         padding: "4px 0px 0px 0px"
                                     }}/> Internet/wifi
                    <FontAwesomeIcon icon={faUmbrellaBeach}
                                     style={{
                                         color: '#00FFFF',
                                         marginLeft: '16px',
                                         padding: "4px 0px 0px 0px"
                                     }}/> Pláž
                </div>
                <div className={'col-12 mt-3'}>
                    <FontAwesomeIcon icon={faSwimmingPool}
                                     style={{
                                         color: '#00FFFF',
                                         padding: "4px 0px 0px 0px",
                                     }}/> Venkovní bazén
                    <FontAwesomeIcon icon={faTree}
                                     style={{
                                         color: '#00FFFF',
                                         marginLeft: '16px',
                                         padding: "4px 0px 0px 0px"
                                     }}/> Zahrada
                </div>
                <div className={'col-12 mt-3'}>
                    <FontAwesomeIcon icon={faSnowflake}
                                     style={{
                                         color: '#00FFFF',
                                         padding: "4px 0px 0px 0px"
                                     }}/> Klimatizace
                    <FontAwesomeIcon icon={faGlassCheers}
                                     style={{
                                         color: '#00FFFF', marginLeft: '16px',
                                         padding: "4px 0px 0px 0px"
                                     }}/> Bar
                </div>
                <div className={'col-12 mt-3'}>
                    <FontAwesomeIcon icon={faBowlFood}
                                     style={{
                                         color: '#00FFFF',
                                         padding: "4px 0px 0px 0px"
                                     }}/> Restaurace
                    <FontAwesomeIcon icon={faWeightHanging}
                                     style={{
                                         color: '#00FFFF', marginLeft: '16px',
                                         padding: "4px 0px 0px 0px"
                                     }}/> Fitness
                </div>
                <div className={'col-12 mt-3'}>
                    <FontAwesomeIcon icon={faSwimmingPool}
                                     style={{
                                         color: '#00FFFF',
                                         padding: "4px 0px 0px 0px",
                                     }}/> Venkovní bazén
                    <FontAwesomeIcon icon={faTree}
                                     style={{
                                         color: '#00FFFF',
                                         marginLeft: '16px',
                                         padding: "4px 0px 0px 0px"
                                     }}/> Zahrada
                </div>
                <div className={'col-12 mt-5 mobilePaddingColumn'}>
                    <button className={'btn background-yellow font-white w-100 p-3 text-center cursor-pointer mobilePaddingColumn'}>Nezávazná poptávka ceny </button>
                </div>

            </div>
        </div>
    )
}
export default DestinationSidebarNew;