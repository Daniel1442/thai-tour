import React, {useRef, useState} from 'react';


interface ContactProps {
    href: string;
    contact: string
}

const ContactButton: React.FC<ContactProps> = ({href, contact}) => {

    return (
        <div className={'m-top-2__item contactButton'}>
            <div className={'m-top-2__inner'}>
                <span>
                    <a href={href} className={'btn btn--link btn--sm m-top-2__link'}>
                        <span className={'btn__inner'}>
                            <span className={'item-icon'}>

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