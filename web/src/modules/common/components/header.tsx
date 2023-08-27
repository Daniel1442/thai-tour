import React from 'react';
import ContactButton from "./contactButton";

const Header: React.FC = () => {

    return (
        <div className={'header desktop'} style={{height: '40px', backgroundColor: '#fff'}}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-12 d-flex justify-content-end'}>
                        <ContactButton type={"phone"}href={'tel: +420 777 625 302'} contact={'Zavolejte na: +420 777 625 302'} key={'phoneBtn'}/>
                        <ContactButton type={'mail'} href={'mailto: info@thaitour.cz'} contact={'Napište na: info@thaitour.cz'} key={'emailBtn'}/>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Header;