import React from 'react';
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRouter} from "next/router";
import {LazyLoadImage} from "react-lazy-load-image-component";


const Header: React.FC = () => {
    const router = useRouter();
    const redirectToHomepage = () => {
        router.push('/')
    }
    return (
        <div className={'header desktop'} style={{height: '105px', backgroundColor: '#013e7a'}}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-4 d-flex justify-content-start'}>
                        <LazyLoadImage 
                            onClick={() => redirectToHomepage()}
                            className={'desktop cursor-pointer'}
                            src={"http://www.thaitour.cz/wp-content/themes/twentyten/images/logo.jpg"}
                            alt="ThaiTour" height={'100px'}/>
                        <b className={'font-white'} style={{marginTop: '69px', marginLeft: '10px'}}>Dovolená na
                            výbornou</b>
                        {/*<ContactButton type={"phone"}href={'tel: +420 777 625 302'} contact={'Zavolejte na: +420 777 625 302'} key={'phoneBtn'}/>*/}
                        {/*<ContactButton type={'mail'} href={'mailto: info@thaitour.cz'} contact={'Napište na: info@thaitour.cz'} key={'emailBtn'}/>*/}
                    </div>
                    <div className={'col-8 d-flex justify-content-end font-white'}>
                        <div className={'row  d-flex justify-content-end'}>

                            <div className={'col-12 text-end mt-3'}>
                                <p>Po-Ne 09-22 hod</p>
                            </div>
                            <div className={'col-12 text-end'}>
                                <h3><FontAwesomeIcon icon={faPhone}
                                                     style={{
                                                         color: '#ffffff',
                                                         padding: "0px 16px 0px 0px"
                                                     }}/>777 666 234</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Header;