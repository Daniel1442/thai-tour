import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

interface ComponentProps {
    heading: string
}

const MobileFooterDropdown: React.FC<ComponentProps> = ({heading}) => {
    const [toggle, setToggle] = useState<boolean>(false)
    return (
        <div className={'row'}>
            <div className={'col-12 d-flex justify-content-between mt-3'}>
                <h3>{heading}</h3><FontAwesomeIcon icon={faAngleDown}
                                                   className={`arrowWrapper ${toggle ? 'arrowRotateOpen' : ''}`}
                                                   onClick={() => setToggle(!toggle)}
                                                   style={{
                                                       color: '#000000',
                                                       padding: "8px 0px 0px 0px"
                                                   }}/>

            </div>
            <div className={'col-12 d-flex justify-content-between'}>
                {toggle ?
                    <ul className={'list-unstyled'}>
                        <li>text bude zde</li>
                        <li>text bude zde</li>
                        <li>text bude zde</li>
                        <li>text bude zde</li>
                        <li>text bude zde</li>
                        <li>text bude zde</li>
                    </ul> : ''
                }
            </div>
        </div>
    )
}
export default MobileFooterDropdown