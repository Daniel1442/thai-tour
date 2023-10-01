import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPerson} from "@fortawesome/free-solid-svg-icons";

const RoomLimit: React.FC = () => {

    return (
        <div className={'col-lg-2'}>
            <FontAwesomeIcon icon={faPerson}
                             style={{
                                 color: '#000',
                                 marginRight: '16px',
                                 padding: "4px 0px 0px 0px"
                             }}/>
            <FontAwesomeIcon icon={faPerson}
                             style={{
                                 color: '#000',
                                 padding: "4px 0px 0px 0px"
                             }}/>
        </div>
    )
}
export default RoomLimit;
