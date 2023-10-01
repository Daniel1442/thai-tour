import React from 'react';
import {Alert} from "react-bootstrap";
import RoomCard from "./roomCard";
import RoomLimit from "./roomLimit";
import RoomPrice from "./roomPrice";

const DestinationRoom: React.FC = () => {
    return (
        <>
            <div className={'row mt-5 mb-3  '}>
                <div className={'col-lg-12 text-left mb'}>
                    <h3 className={'font-blue'}>Typ pokojů</h3>
                    <Alert variant={'success'}>
                        <Alert.Heading>Tip: Zajistěte si flexibilitu</Alert.Heading>
                        <p>
                            Tento termín je ještě daleko - rezervujte s možností bezplatného storna. Pokud se Vaše plány
                            změní, svou rezervaci můžete zdarma zrušit
                        </p>
                    </Alert>
                </div>

            </div>
            <div className={'row'}>
                <div className={'col-lg-12 col-sm-12 text-left'}>
                    <h5 className={'font-black'}>Dostupné pokoje</h5>
                </div>
                <div className={'col-5'}>
                    <h5 className={'font-black'}>Typ ubytování</h5>
                </div>
                <div className={'col-2'}>
                    <h5 className={'font-black'}>Kapacita</h5>
                </div>
                <div className={'col-3 ms-3'}>
                    <h5 className={'font-black'}>Cena</h5>
                </div>
                {
                    <>
                        <RoomCard/>
                        <RoomLimit/>
                        <RoomPrice/>
                    </>
                }
            </div>
        </>
    )
}
export default DestinationRoom;
