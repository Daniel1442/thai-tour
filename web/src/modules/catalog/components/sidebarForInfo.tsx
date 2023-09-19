import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

interface ComponentProps {
    active: string

}

const SidebarFilter: React.FC<ComponentProps> = ({active}) => {
    const router = useRouter();

    const redirectTo = (path: string) => {
        router.push(path)
    }

    return (
        <div className={'destinationSideBar background-white rounded p-3 pt-0'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'w-100'}>
                        <h3 className="form-label font-black">Mohlo by vás zajímat</h3>
                    </div>
                    <div className={'background-blue'}>
                        <div className="entry-content mt-2">
                            <div
                                className={`d-flex ${active === 'ABOUT_COMPANY' ? 'bg-primary' : 'background-blue'} cursor-pointer`}
                                style={{justifyContent: 'space-between', borderBottom: '1px solid white'}}>
                                <div>
                                    <FontAwesomeIcon icon={faAngleRight}
                                                     className={'ms-2 font-white me-3 pt-2  cursor-pointer'}/>
                                    <label onClick={() => redirectTo('/aboutCompany')}
                                           className="form-label font-white cursor-pointer">O společnosti</label>
                                </div>
                            </div>
                            <div
                                className={`d-flex ${active === 'INVOICE' ? 'bg-primary' : 'background-blue'} cursor-pointer`}
                                style={{justifyContent: 'space-between', borderBottom: '1px solid white'}}>
                                <div>
                                    <FontAwesomeIcon icon={faAngleRight}
                                                     className={'ms-2 font-white me-3 pt-2  cursor-pointer'}/>
                                    <label onClick={() => redirectTo('/invoice')}
                                           className="form-label font-white cursor-pointer">Fakturační údaje</label>
                                </div>
                            </div>
                            <div
                                className={`d-flex ${active === 'PAYMENT' ? 'bg-primary' : 'background-blue'} cursor-pointer`}
                                style={{justifyContent: 'space-between', borderBottom: '1px solid white'}}>
                                <div>
                                    <FontAwesomeIcon icon={faAngleRight}
                                                     className={'ms-2 font-white me-3 pt-2  cursor-pointer'}/>
                                    <label onClick={() => redirectTo('/paymentMethods')} className="form-label font-white cursor-pointer">Možnosti platby</label>
                                </div>
                            </div>
                            <div
                                className={`d-flex ${active === 'PORTFOLIO' ? 'bg-primary' : 'background-blue'} cursor-pointer`}
                                style={{justifyContent: 'space-between', borderBottom: '1px solid white'}}>
                                <div>
                                    <FontAwesomeIcon icon={faAngleRight}
                                                     className={'ms-2 font-white me-3 pt-2  cursor-pointer'}/>
                                    <label onClick={() => redirectTo('/portfolio')}  className="form-label font-white cursor-pointer">Portfolio služeb</label>
                                </div>
                            </div>
                            <div
                                className={`d-flex ${active === 'CONTACTS' ? 'bg-primary' : 'background-blue'} cursor-pointer`}
                                style={{justifyContent: 'space-between'}}>
                                <div>
                                    <FontAwesomeIcon icon={faAngleRight}
                                                     className={'ms-2 font-white me-3 pt-2  cursor-pointer'}/>
                                    <label onClick={() => redirectTo('/contacts')}  className="form-label font-white cursor-pointer">Kontakty</label>
                                </div>
                            </div>
                            <div
                                className={`d-flex ${active === 'REASONS' ? 'bg-primary' : 'background-blue'} cursor-pointer`}
                                style={{justifyContent: 'space-between'}}>
                                <div>
                                    <FontAwesomeIcon icon={faAngleRight}
                                                     className={'ms-2 font-white me-3 pt-2  cursor-pointer'}/>
                                    <label onClick={() => redirectTo('/whyThaiTour')}  className="form-label font-white cursor-pointer">Proč ThaiTour?</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SidebarFilter;
