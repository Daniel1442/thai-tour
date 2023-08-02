import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";


interface ContactProps {
    type: string;
    href: string;
    contact: string;
}

const ContactButton: React.FC<ContactProps> = ({type, href, contact}) => {

    return (
        <div className={'m-top-2__item contactButton cursor-pointer'}>
            <div className={'m-top-2__inner'}>
                <span>
                    <a href={href} className={'btn btn--link btn--sm m-top-2__link'}>
                        <span className={'btn__inner'}>
                            <span className={'item-icon'}>
                                {type === 'phone' ?
                                    <FontAwesomeIcon icon={faPhone} className={'me-2'}/>
                                    : <FontAwesomeIcon icon={faEnvelope} className={'me-2'}/>
                                }
                            </span>
                            <span className={'item-icon__text'}>
                            {contact}
                            </span>
                        </span>
                    </a>
                </span>
            </div>
        </div>
    )
}
export default ContactButton;