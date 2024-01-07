import React, {useContext} from 'react';
import {PlaceContent, PlaceContext} from "../../../../context/placeContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const DestinationNavbar: React.FC = () => {
    const {
        setPlaceDescriptionType,
        placeDescriptionType,
    } = useContext(PlaceContext) as PlaceContent;

    return (
        <Navbar className={'background-blue'}>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => setPlaceDescriptionType('ABOUT')}
                              className={`font-white ${placeDescriptionType === 'ABOUT' ? 'active' : ''}`} href="#features">Popis
                        hotelu</Nav.Link>
                    <Nav.Link onClick={() => setPlaceDescriptionType('ROOMS')} href="#home"
                              className={`font-white ${placeDescriptionType === 'ROOMS' ? 'active' : ''}`}>Typ
                        pokoje</Nav.Link>
                    <Nav.Link onClick={() => setPlaceDescriptionType('MAP')}
                              className={`font-white ${placeDescriptionType === 'MAP' ? 'active' : ''}`} href="#map">Oblast
                        a mapa</Nav.Link>
                    <Nav.Link onClick={() => setPlaceDescriptionType('REVIEW')}
                              className={`font-white ${placeDescriptionType === 'REVIEW' ? 'active' : ''}`} href="#x">Recenze
                        hotelu</Nav.Link>
                    <Nav.Link onClick={() => setPlaceDescriptionType('WEATHER')}
                              className={`font-white ${placeDescriptionType === 'WEATHER    ' ? 'active' : ''}`}
                              href="#z">Počasí</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default DestinationNavbar;