import React, {useEffect} from "react";
import SidebarForInfo from "../modules/catalog/components/sidebarForInfo";

const Invoice = () => {

    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    return <div className={'container pt-5'}>
        <div className={'row'}>
            <div className={'col-lg-9 col-sm-12'}>
                <h3 className={'font-black'}>Fakturační údaje</h3>
                <p>Tento server provozuje cestovní kancelář ThiaTour.cz, a.s.</p>
                <p className={'mb-0'} style={{fontWeight: '800'}}>Sídlo společnosti</p>
                <p className={'mb-0'}>Pod Slovany 2041/5, Praha 2</p>
                <p className={'mt-0'}>120 00, Česká republika</p>

                <p className={'mb-0'}>Po - Pá <b>09:00-17:30</b></p>
                <p className={'mt-0'}>tel. +420 226 0006 222 <a href={'/mainContacts'}>(kompletní kontakty)</a></p>

                <p className={'mb-0'}>fax: 226 000 717, 226 000 438</p>
                <p className={'mt-0'}>email: <a href={'mailto:finance@thaitour.cz'}>finance@thaitour.cz</a></p>

                <p className={'mb-0'}><b>IČO:</b> 26 70 29 24</p>
                <p className={'mt-0'}><b>DIČ:</b> CZ 26702924</p>

                <div className={'mt-5'}>
                    <h4 className={'font-blue'}>Přehled bankovních účtů</h4>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Název bankovního účtu</th>
                            <th scope="col">Číslo bankovního účtu</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Air Bank a.s.</td>
                            <td>1326035013/3030</td>
                        </tr>
                        <tr>
                            <td>Air Bank a.s. (EUR)</td>
                            <td>326035021/3030</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={'col-lg-3 col-sm-12'}>
                <SidebarForInfo active={'INVOICE'}/>
            </div>
        </div>
    </div>

}

export default Invoice;
