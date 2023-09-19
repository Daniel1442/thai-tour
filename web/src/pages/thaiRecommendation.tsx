import React, {useEffect} from "react";
import SidebarForInfo from "../modules/catalog/components/sidebarForInfo";

const ThaiRecommendation = () => {

    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    return <div className={'container pt-5'}>
        <div className={'row'}>
            <div className={'col-lg-9 col-sm-12'}>
                <h3 className={'font-black mb-5'}>10 důvodů, proč nakupovat dovolenou na Invia</h3>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>1. Garance nejnižší ceny</h5>
                <p>Garantujeme vám, že u nás stejný zájezd zakoupíte za stejnou cenu jako v cestovní kanceláři, včetně všech poskytovaných slev.</p>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>2. Největší nabídka zájezdů</h5>
                <p>Pouze u nás si můžete vybrat zájezdy od více než 300 cestovních kanceláří z České republiky, Slovenska, Polska a německy mluvících zemí. Všechny cestovní kanceláře jsou pojištěné a prověřené dlouhodobou spoluprací.</p>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>3. 98 % spokojených zákazníků</h5>
                <p>Od roku 2002 našich služeb využily již více než 3 miliony klientů a s úsměvem na rtech a dobrou náladou přivítáme i vás.</p>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>4. Zázemí stabilní a neustále se rozvíjející společnosti</h5>
                <p>Za cestovní agenturou Invia již mnoho let stojí silné a důvěryhodné investiční skupiny. Kromě České republiky působíme také na Slovensku, v Maďarsku, v Polsku (zde pod značkou Travelplanet) a v dalších evropských zemích.</p>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>5. Osobní přístup</h5>
                <p>Na každou turistickou oblast je specializován jeden z našich prodejních týmů. Navíc máte možnost se nás na podrobnosti kdykoliv zeptat na telefonu 226 000 600.</p>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>6. Kvalitní informace o vybrané destinaci</h5>
                <p>Na každou turistickou oblast je specializován jeden z našich prodejních týmů. Navíc máte možnost se nás na podrobnosti kdykoliv zeptat na telefonu 226 000 600.</p>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>7. Nákup z pohodlí domova</h5>
                <p>Nabídku zájezdů si můžete prohlížet 24 hodin denně, 7 dní v týdnu, kdekoliv vás napadne. Doma, v práci, kdekoliv.</p>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>8. Úspora času</h5>
                <p>Nemusíte chodit do cestovních kanceláří, abyste si vybrali. Všechny vybrané zájezdy si můžete vzájemně porovnat a nakonec i koupit na jediném místě a během zlomku původního času.</p>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>9. Široká síť poboček</h5>
                <p>Pro klienty, kteří mají z nakupování přes internet stále obavy, je k dispozici optimalizovaná síť poboček po celé České republice.</p>
                <h5 className={'font-blue'} style={{fontWeight: '800'}}>10. Thai Tour Care </h5>
                <p>Poskytujeme kompletní servis v češtině (případně slovenštině) pro zájezdy německých, rakouských a polských CK s odletem z Prahy nebo ze zahraničí (včetně možnosti sjednání cestovního pojištění, parkování i ubytování u letiště a horké linky v případě nesnází na dovolené).</p>
            </div>
            <div className={'col-lg-3 col-sm-12'}>
                <SidebarForInfo active={'REASONS'}/>
            </div>
        </div>
    </div>
}

export default ThaiRecommendation;
