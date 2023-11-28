import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPerson} from "@fortawesome/free-solid-svg-icons";

interface RoomLimitProps {
    limit: number;
}

const RoomLimit: React.FC<RoomLimitProps> = ({limit}) => {

    return (
        <div className={'col-lg-2'}>
            {[...Array(limit)].map((e, i) => {
                return <FontAwesomeIcon icon={faPerson}
                                        style={{
                                            color: '#000',
                                            marginRight: '16px',
                                            padding: "4px 0px 0px 0px"
                                        }}/>
            })}
        </div>
    )
}
export default RoomLimit;
