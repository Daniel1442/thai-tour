import React, {useContext, useRef, useState} from 'react';
import StarRatings from 'react-star-ratings';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun, faWater} from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-modal';
import StarsRating from "react-star-rate";

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
const DestinationSideBar: React.FC = () => {
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
        <div className={'destinationSideBar '}>
            <div className={'row'}>
                <div className={'col-12 my-3'}>
                    <div className={'bg-white rounded p-5 border'}>
                        <div className={'row'}>
                            <div className={'d-flex justify-content-center'}>
                                <h2>Hodnocení</h2>
                            </div>
                        </div>
                        <div className={'row mt-3'}>
                            <div className={'d-flex justify-content-center'}>
                                <StarRatings
                                    rating={place &&place.review}
                                    starRatedColor="gold"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension="40px"
                                    starSpacing="5px"
                                />
                            </div>
                        </div>
                        <div className={'row mt-3'}>
                            <p className={'text-muted d-flex justify-content-center'}>{place &&place.review * 5} hodnocení</p>
                        </div>
                        <div className={'row mt-3'}>
                            <div className={'d-flex justify-content-center'}>
                                <button className={'btn'} style={{backgroundColor: '#FFD700', color: "#fff"}} onClick={openModal}   >Přidat hodnocení
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'col-12 my-3'}>
                    <div className={'bg-white rounded p-5 border'}>
                        <div className={'row'}>
                            <div className={'d-flex justify-content-center'}>
                                <h2>Zjistit cenu ubytování</h2>
                            </div>
                        </div>
                        <div className={'row mt-3'}>
                            <div className={'d-flex justify-content-center'}>
                                <button className={'btn'} style={{backgroundColor: '#FFD700', color: "#fff"}} onClick={openModalForm}>Zažádat o
                                    cenu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'col-12 my-3'}>
                    <div className={'bg-white rounded p-5 border'}>
                        <div className={'row'}>

                            <h3 className={'d-flex justify-content-center'}>Aktuální počasí</h3>
                        </div>
                        <div className={'row mt-3'}>
                            <h3 className={'d-flex justify-content-center'}>
                                21 °C <FontAwesomeIcon icon={faWater}
                                                       style={{
                                                           color: '#00FFFF',
                                                           padding: "4px 16px 0px 8px"
                                                       }}/>
                                31 °C <FontAwesomeIcon icon={faSun}
                                                       style={{
                                                           color: '#FFD700',
                                                           padding: "4px 0px 0px 8px"
                                                       }}/></h3>
                        </div>
                    </div>
                </div>

                <div className={'col-12 mt-3'}>
                    <div className={'mapButton d-flex justify-content-center border rounded p-5'}>
                        <button className={'btn btn-light'} style={{backgroundColor: '#ffffff'}}>Zobrazit na mapě
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className={'container'}>
                    <b>Přidat hodnocení</b>
                    <h3 className={'mt-2'}>{place && place.name}</h3>
                    <div className={'row mt-3'}>
                        <div className={'col-12'}>
                            <form className={'bg-white p-3 rounded-corners'}>
                                <div className="mb-3">
                                    <label className="form-label mb-0">Hodnocení</label>
                                    <br/>
                                    <StarsRating
                                        value={value}
                                        onChange={(value) => {
                                            setValue(value as number);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1" className={'mb-2'}>Komentář</label>
                                    <textarea className="form-control h-50"></textarea>
                                </div>

                                <button type="submit" className="btn background-yellow font-white mt-5">Uložit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal
                isOpen={modalIsOpenForm}
                onRequestClose={closeModalForm}
                style={customStyles}
            >
                <div className={'container'}>
                    <b>Zažádat o cenu ubytování</b>
                    <h3 className={'mt-2'}>{place && place.name}</h3>
                    <div className={'row mt-3'}>
                        <div className={'col-12'}>
                            <form className={'bg-white p-3 rounded-corners'}>
                                <div className="mb-3">
                                    <label className="form-label">Jméno a přijmení</label>
                                    <input type="text" className="form-control"
                                           placeholder="Jan Novák"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Lokalita</label>
                                    <input type="text" className="form-control"
                                           placeholder="Bangok"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="text" className="form-control" placeholder="jan.novak@emial.cz"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Od</label>
                                    <input type="date" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Do</label>
                                    <input type="date" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Doplnkové informace</label>
                                    <textarea className="form-control"></textarea>
                                </div>

                                <button type="submit" className="btn background-yellow font-white mt-5">Odeslat</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default DestinationSideBar;