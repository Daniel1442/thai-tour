import React, {useEffect, useState} from 'react';
import Dropdown from "./dropdown";
import {useRouter} from "next/router";
import DropdownPlaces from "./dropdownPlaces";
import {faHeart, faSignIn, faSignOut} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DropdownAboutUs from "./dropdownAboutUs";
import Modal from "react-modal";
import LoginForm from "../../customer/components/form/loginForm";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {Tooltip as ReactTooltip} from "react-tooltip";
import RegistrationForm from "../../customer/components/form/registrationForm";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: '360px',
        height: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        border: '1px solid #EDEDED',
        boxShadow: '0 0 50px #ccc',
        borderRadius: '4px',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999
    },
};

const Navigation: React.FC = () => {
    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    const router = useRouter();


    const redirectToHomepage = () => {
        router.push('/')
    }
    const [toggle, setToggle] = useState(false)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [confirmModalIsOpen, setConfirmModalIsOpen] = React.useState(false);
    const [registry, setRegistryStore] = useLocalStorage("LOGIN_DATA", [])

    const [login, setLogin] = useState<boolean>(true);


    useEffect(() => {
        console.log(registry.length === 0)
        console.log(registry)
    }, [registry, router]);

    function openConfirmModal() {
        setConfirmModalIsOpen(true);
    }

    function closeConfirmModal() {
        setConfirmModalIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const logOut = () => {
        setRegistryStore([]);
        closeConfirmModal();
        window.location.reload();
    }

    return (

        <div className={'background-blue navigation desktop'}>
            <div className="container  px-0">
                <nav className="navbar navbar-expand-lg navbar-light" style={{height: '60px'}}
                     onClick={() => (setToggle(!toggle))}>
                    <div className="container-fluid  px-0">
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse mobileNavbar ${toggle ? 'show' : ''}`}
                             id="navbarCollapse d-flex" style={{justifyContent: 'space-between'}}>
                            <div className="navbar-nav">
                                <Dropdown name={'O thajsku'}/>
                                <DropdownPlaces name={'Ubytování'}/>
                                <a href="/airplaneTickets" className="nav-item nav-link font-white">Letenky</a>
                                <a href="/transfer" className="nav-item nav-link font-white">Transfer</a>
                                <a href="/tripCatalog" className="nav-item nav-link font-white">Výlety</a>
                                <a href="/thaiGolf" className="nav-item nav-link font-white">Golf</a>
                                <a href="/blog" className="nav-item nav-link font-white">Novinky</a>
                                <DropdownAboutUs name={'O nás'} link={'/aboutUs'}/>
                            </div>
                            <div className="navbar-text float-end row">
                                <div className={'col-2 p-0'}  data-tooltip-id={'favorite-place'}>
                                    {registry.length !== 0 &&
                                        <FontAwesomeIcon icon={faHeart}
                                                         onClick={() => {
                                                             router.push('/favoriteCatalog')
                                                         }}
                                                         className="cursor-pointer"
                                                         style={{
                                                             color: '#ffffff',
                                                             padding: "0px 16px 0px 0px"
                                                         }}/>
                                    }
                                </div>
                                <div className={'col-10'} data-tooltip-id={'log-in-out'}>

                                    {registry.length === 0 ?
                                        <>
                                            <b className={'font-white pe-3'}> </b>
                                            <FontAwesomeIcon icon={faSignIn}
                                                             className="cursor-pointer"

                                                             onClick={() => openModal()}
                                                             style={{
                                                                 color: '#ffffff',
                                                                 padding: "0px 27px 0px 0px"
                                                             }}/>
                                        </>
                                        : <>
                                            <b className={'font-white x'}>{registry.username}</b>
                                            <FontAwesomeIcon icon={faSignOut}
                                                             className="cursor-pointer"

                                                             onClick={() => setConfirmModalIsOpen(true)}
                                                             style={{
                                                                 color: '#ffffff',
                                                                 padding: "0px 0px 0px 16px"
                                                             }}/>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className={'container'}>
                    <h3 style={{fontWeight: 800}}>{login ? 'Příhlášení k ůčtu' : "Registrace účtu"}</h3>
                    {login ?
                        <LoginForm closeModal={closeModal}/>
                        : <RegistrationForm closeModal={closeModal}/>}
                    {login ?
                        <div className={'d-flex mt-3 justify-content-center'}>
                            <small>Ještě nemáte svůj ThaiTour účet?<br/> <a className={'ms-5'}
                                                                            onClick={() => setLogin(false)}>Nová
                                registrace</a></small>
                        </div>
                        :
                        <div className={'d-flex mt-3 justify-content-center'}>
                            <small>Máte již svůj ThaiTour ůčet?<br/> <a className={'ms-5'}
                                                                        onClick={() => setLogin(true)}>Přihlašte se</a></small>
                        </div>}
                </div>
            </Modal>
            <Modal
                isOpen={confirmModalIsOpen}
                onRequestClose={closeConfirmModal}
                style={customStyles}
            >
                <div className={'container'}>
                    <h5 className={'mb-3'} style={{fontWeight: 800}}>Opravdu si přejete odhlásit se?</h5>
                    <div className={'d-flex justify-content-between'}>
                        <button className={'btn btn-success'} onClick={() => logOut()}>Ano</button>
                        <button className={'btn btn-danger'} onClick={() => setConfirmModalIsOpen(false)}>Ne</button>
                    </div>
                </div>
            </Modal>
            <ReactTooltip
                id="favorite-place"
                place="top"
                variant="info"
                content="Oblíbená místa"
            />
            <ReactTooltip
                id="log-in-out"
                place="top"
                variant="info"
                content="Přihlášení / Odhlášení"
            />
        </div>
    )

}
export default Navigation;