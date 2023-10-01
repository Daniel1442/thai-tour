import React, {useContext, useState} from 'react';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";

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
                    <h3 className={'font-yellow'}>od 1500,- Kč/osoba </h3>
                </div>
                <div className={'col-12 '}>
                    <b className={''}>Délka výletu:</b> <>8 hod.</>
                </div>
                <div className={'col-12 '}>
                    <b className={''}>Strava:</b> <>oběd</>
                </div>
                <div className={'col-12 '}>
                    <b className={''}>Kdy:</b> <>denně</>
                </div>
                <div className={'col-12 '}>
                    <b className={''}>Typ výletu:</b> <>soukromý/skupinový</>
                </div>
                <div className={'col-12 '}>
                    <b className={''}>Lokalita:</b> <>Bangkok</>
                </div>
                <div className={'col-12 '}>
                    <b className={''}>ODjezd:</b> <>8:00 hod.</>
                </div>
                <div className={'col-12 '}>
                    <b className={''}>Průvodce:</b> <>Ang., Něm., Rus.</>
                </div>
                <div className={'col-12 '}>
                    <b className={''}>V ceně:</b> <>transfer, vstupy</>
                </div>

                <div className={'col-12 mt-5 mobilePaddingColumn'}>
                    <button
                        className={'btn background-yellow font-white w-100 p-3 text-center cursor-pointer mobilePaddingColumn'}>Nezávazná
                        poptat výlet
                    </button>
                </div>

            </div>
        </div>
    )
}
export default TripSidebar;