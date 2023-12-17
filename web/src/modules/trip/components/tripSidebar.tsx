import React, {useContext, useState} from 'react';
import {TripContent, TripContext} from "../../../context/tripContext";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Tooltip as ReactTooltip} from "react-tooltip";

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
const TripSidebar: React.FC = () => {
    const {
        trip,
        fetchTrip
    } = useContext(TripContext) as TripContent;
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
                <div className={'col-12 mt-5 '} data-tooltip-id={'about-price'}>
                    <h3 className={'font-yellow'}>od {trip.price},- Kč/osoba <small><FontAwesomeIcon icon={faInfoCircle}
                                                                                                     style={{
                                                                                                         color: '#FFD700',
                                                                                                         width: '10px',
                                                                                                         height: '10px',
                                                                                                         padding: "0px 0px 20px 0px",
                                                                                                     }}/></small></h3>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={''}>Délka výletu:</b> <>{trip.length ? trip.length : 'Neuvedeno'}</>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={''}>Strava:</b> <>{trip.food ? trip.food : 'Neuvedeno'}</>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={''}>Kdy:</b> <>{trip.tripRepetitions ? trip.tripRepetitions : 'Neuvedeno'}</>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={''}>Typ výletu:</b> <>{trip.tripType ? trip.tripType : 'Neuvedeno'}</>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={''}>Lokalita:</b> <>{trip.tripLocation ? trip.tripLocation : 'Neuvedeno'}</>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={''}>Odjezd:</b> <>{trip.tripStart ? trip.tripStart : 'Neuvedeno'}</>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={''}>Průvodce:</b> <>{trip.guide ? trip.guide : 'Neuvedeno'}.</>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={''}>V ceně:</b> <>{trip.included ? trip.included : 'Neuvedeno'}</>
                </div>

                <div className={'col-12 mt-5 mobilePaddingColumn'}>
                    <button
                        className={'btn background-yellow font-white w-100 p-3 text-center cursor-pointer mobilePaddingColumn'}>Nezávazná
                        poptat výlet
                    </button>
                </div>

            </div>
            <ReactTooltip
                id="about-price"
                place="top"
                variant="warning"
                content="Cena je na vyžádání a odvíjí se dle termínu, počtu osob a aktuálního kurzu."
            />
        </div>

    )
}
export default TripSidebar;