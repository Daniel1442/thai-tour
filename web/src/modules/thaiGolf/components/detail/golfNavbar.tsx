import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {GolfContent, GolfContext} from "../../../../context/golfContext";


const GolfNavbar: React.FC = () => {
    const {
        setGolfDescriptionType,
        golfDescriptionType,
    } = useContext(GolfContext) as GolfContent;

    return (
        <Navbar className={'background-blue'}>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => setGolfDescriptionType('ABOUT')}
                              className={`font-white ${golfDescriptionType === 'ABOUT' ? 'active' : ''}`} href="#features">Popis
                        hotelu</Nav.Link>
                    <Nav.Link onClick={() => setGolfDescriptionType('PRICE')} href="#home"
                              className={`font-white ${golfDescriptionType === 'PRICE' ? 'active' : ''}`}>Ceny
                        pokoje</Nav.Link>
                    <Nav.Link onClick={() => setGolfDescriptionType('MAP')}
                              className={`font-white ${golfDescriptionType === 'MAP' ? 'active' : ''}`} href="#map">Oblast
                        a mapa</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default GolfNavbar;