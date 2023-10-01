import React, {useEffect} from "react";
import SidebarForInfo from "../modules/catalog/components/sidebarForInfo";

const PaymentMethods = () => {

    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    return <div className={'container pt-5'}>
        <div className={'row'}>
            <div className={'col-lg-9 col-sm-12'}>
                <h3 className={'font-black mb-5'}>Možnosti platby za služby CA ThaiTour</h3>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>1. Bankovním převodem</h5>
                <p>Jednoduchý, rychlý, bezpečný a bezplatný způsob jak uhradit zájezd, letenku či jinou doplňkovou službu z nabídky Invia. Uhraďte dovolenou převodem z účtu vaší banky do naší. Pro rychlejší převod si vyberete stejnou banku, ve které máte také zaveden osobní účet (v takovém případě je nám platba připsána v řádu minut). Převod mezi dvěma různými bankami může trvat až 2 pracovní dny.
                </p>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>2. Platbou v hotovosti na pobočce</h5>
                <p>Stavte se za námi osobně na pobočku a zaplaťte svou dovolenou v hotovosti. Vyberte si pobočku právě v místě svého bydliště nebo poblíž, máme již více než 80 poboček po celé ČR.
                </p>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>3. Složením hotovosti na účet CA ThaiTour v bance</h5>
                <p>Pokud je pro vás pohodlnější zaplatit dovolenou vložením hotovosti na účet naší banky, zde je přehled bankovních účtů, na které nám peníze můžete složit.</p>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>4. Online platební kartou</h5>
                <p>Rychlý způsob úhrady zájezdu v případě, kdy není možné provést platbu bankovním převodem.</p>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>5. Platební kartou na pobočce</h5>
                <p>Nenoste velkou hotovost po kapsách a zaplaťte pohodlně a prakticky přes elektronickou platební čtečku. Jen je třeba si pohlídat výši stanoveného limitu pro tyto platby.</p>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>6. Pomocí online benefitních programů Benefit Management, Benefity a. s., Edenred, Up Česká republika a Sodexo</h5>
                <p>Přispívá vám zaměstnavatel na dovolenou? Prostřednictvím kafeterií můžete využít tohoto benefitu k zaplacení zájezdu až do výše 20 tisíc Kč v rámci jedné objednávky. Akceptujeme Gallery Beta od Up Česká republika, e-Ticket od Edenred, ePass a Flexipass Card od Sodexo, Benefity, a.s. a Benefit Plus a benefit Gusto Karta. Tento typ platby obvykle není možné využít na nákup letenek, či jiných samostatných služeb (s výjimkou programu Benefity a.s., kterým můžete hradit i letenky). Tento způsob platby nelze kombinovat s ostatními slevovými programy.</p>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>7. Pomocí poukázek Edenred, Sodexo a Up Česká republika</h5>
                <p>Poukázky můžete použít k zaplacení části nebo celé dovolené – maximální částka, kterou lze uhradit poukázkami je 20 000 Kč v rámci jedné objednávky. Tímto způsobem nelze platit letenky (vyjma charterových letenek) ani dárkové certifikáty. Není možné kombinovat s ostatními slevovými programy. Invia si vyhrazuje právo platbu poukázkami odmítnout. V případě storna zájezdu vám celková částka, kterou jste zaplatili formou poukázek, nemůže být vrácena v hotovosti – dostanete poukázky nebo dárkový certifikát.</p>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>8. Typy akceptovaných poukázek:</h5>
                <p><b>Up Česká republika:</b>Šek dovolená, Unišek +, Cadhoc, Unišek FKSP</p>
                <p><b>Edenred – Ticket Benefits:</b>Ticket Multi, Ticket Holiday, Ticket Compliments</p>
                <p><b>Sodexo:</b>Flexi Pass, Holiday Pass, Fokus Pass, Dárkový Pass, Bonus Pass</p>
            </div>
            <div className={'col-lg-3 col-sm-12'}>
                <SidebarForInfo active={'PAYMENT'}/>
            </div>
        </div>
    </div>

}

export default PaymentMethods;
