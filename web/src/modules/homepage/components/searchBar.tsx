import React, {useContext, useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {PlaceContent, PlaceContext} from "../../../context/placeContext";
import {useRouter} from "next/router";
import {PlaceFinderPayload} from "../models";
import SearchBarInput from "./searchBarInput";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDay, faGlobe} from "@fortawesome/free-solid-svg-icons";
import FormDatePicker from "../../common/components/formDatePicker";
import {initDate} from "../../common/helper/dateHelper";



const SearchBar: React.FC = () => {
    const {
        filterPlaceF,
        payload
    } = useContext(PlaceContext) as PlaceContent;
    const router = useRouter();

    const filter = () => {
        filterPlaceF(payload as PlaceFinderPayload)
        router.push('/catalog')
    }
    return (
        <div className={'searchBar mt-5'}>
            <div className={'f-main-search f-main-search--hp has-person-picker'}>
                <div className="f-main-search__content-wrapper">
                    <div className={'container searchContent'}>
                        <div className={'row infoRow'}>
                            <div className={'col-12 info'}>
                                <label className={'searchLbl font-white'}>Vybírat můžete z 30 destinací</label>
                            </div>
                        </div>
                        <div className={'row inputRow'} style={{marginLeft: '15px'}}>
                            <div className={'col-lg-3 col-sm-12 inputCol'}>
                                <div className={'position-relative '}>
                                    <SearchBarInput/>

                                    <FontAwesomeIcon icon={faGlobe}
                                                     style={{position: "absolute", top: "10px", right: "10px", color: '#212529'}}/>
                                </div>
                            </div>

                            <div className={'col-lg-3 col-sm-12 inputCol'}>
                                <div className={'position-relative cursor-disabled '}>
                                    <input className="form-control cursor-disabled" type="date" placeholder="Od kdy" disabled={true}
                                           aria-label="default input example"/>
                                <FontAwesomeIcon icon={faCalendarDay}
                                                 style={{position: "absolute", top: "10px", right: "10px", color: '#212529'}}/>
                                </div>
                            </div>


                            <div className={'col-lg-3 col-sm-12 inputCol'}>
                                <div className={'position-relative cursor-disabled'}>

                                    <input className="form-control cursor-disabled" type="date" placeholder="Kdo kdy" disabled={true}
                                           aria-label="default input example"/>
                                    <FontAwesomeIcon icon={faCalendarDay}
                                                     style={{position: "absolute", top: "10px", right: "10px", color: '#212529'}}/>
                                </div>

                            </div>

                            <div className={'col-lg-3 col-sm-12 colButton'}>
                                <button  className="btn font-white background-black mb-3" onClick={()=>filter()}
                                       >Vyhledat
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default SearchBar;