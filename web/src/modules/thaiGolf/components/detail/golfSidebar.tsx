import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import {GolfContent, GolfContext} from "../../../../context/golfContext";
import ReservationForm from "../../../destination/components/detail/reservationForm";

const customStyles = {
    content: {
        top: '35%',
        left: '50%',
        right: '70%',
        bottom: '10%',
        marginRight: '-50%',
        border: '1px solid #EDEDED',
        boxShadow: '0 0 50px #ccc',
        borderRadius: '4px',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999
    },
};

const GolfSidebar: React.FC = () => {
    const {
        golf,
    } = useContext(GolfContext) as GolfContent;

    const [modalIsOpen, setIsOpen] = React.useState(false);


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className={'destinationSideBar'}>
            <div className={'row'}>
                <div className={'col-12 mt-5'}>
                </div>
                <div className={'col-12 mt-5 '}>
                    <b className={'me-3'}>Lokalita:</b> <>{golf.location} (<a href={'#'}>Ukázat na mapě</a>)</>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={'me-3'}>Jamek: {golf.holes}</b>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={'me-3'}>Yardů: {golf.yard}</b>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={'me-3'}>Par: {golf.par}</b>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={'me-3'}>Driving range: {golf.drivingRange}</b>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={'me-3'}>Otevřeno: {golf.opened}</b>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={'me-3'}>Rok otevření: {golf.openingYear}</b>
                </div>
                <div className={'col-12 mt-3'}>
                    <b className={'me-3'}>Návrh hřiště: {golf.yardDesigner}</b>
                </div>


                <div className={'col-12 mt-5 mobilePaddingColumn'}>
                    <button
                        onClick={() => openModal()}
                        className={'btn background-yellow font-white w-100 p-3 text-center cursor-pointer mobilePaddingColumn'}>Nezávazná
                        poptávka ceny
                    </button>
                </div>
                <Modal
                    isOpen={modalIsOpen}

                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Reservation Modal"
                >
                    <div>
                        <div className={'d-flex justify-content-end'}>
                            <FontAwesomeIcon icon={faWindowClose}
                                             onClick={closeModal}
                                             style={{
                                                 color: '#000000',
                                                 backgroundColor: '#ffffff',
                                                 padding: "4px 0px 16px 0px"
                                             }}/>
                        </div>
                        <ReservationForm closeModal={closeModal}/>
                    </div>
                </Modal>
            </div>
        </div>
    )
}
export default GolfSidebar;