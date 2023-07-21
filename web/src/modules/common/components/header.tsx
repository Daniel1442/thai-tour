import React, {useRef, useState} from 'react';
import ContactButton from "./contactButton";

const Header: React.FC = () => {

    return (
        <div className={'header'} style={{height: '40px', backgroundColor: '#F5F4F7'}}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-12 d-flex justify-content-end'}>
                        <ContactButton href={'tel: +420 777 625 302'} contact={'Zavolejte na: +420 777 625 302'} key={'phoneBtn'}/>
                        <ContactButton href={'mailto: info@thaitour.cz'} contact={'Napište na: info@thaitour.cz'} key={'emailBtn'}/>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Header;