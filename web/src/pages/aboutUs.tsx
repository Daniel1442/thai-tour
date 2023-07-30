import React, {useContext, useEffect, useState} from "react";
import Navigation from '../modules/common/components/navigation';
import SearchBar from "../modules/homepage/components/searchBar";
import Carousel from "../modules/homepage/components/carousel";
import SuggestionItem from "../modules/homepage/components/suggestionItem";
import SuggestionArticle from "../modules/homepage/components/suggestionArticle";
import Footer from "../modules/common/components/footer";
import InformationImageCard from "../modules/destination/components/informationImageCard";
import DestinationSideBar from "../modules/destination/components/destinationSidebar";
import AboutDestination from "../modules/destination/components/aboutDestination";
import ImportantInfo from "../modules/destination/components/importantInfo";
import Header from "../modules/common/components/header";
import {useRouter} from "next/router";
import {getDetail, getFavoritePlaces} from "../modules/homepage/action";
import {PlaceDetail, PlaceRow} from "../modules/homepage/models";
import {usePlaceContext} from "../hooks/usePlaceContext";
import {PlaceContent, PlaceContext} from "../context/placeContext";
import Loader from "../modules/common/components/loader";

const AboutUs = () => {
    let width = typeof window !== 'undefined' && window.innerWidth;
    const router = useRouter();
    const {id} = router.query;


    const {
        place,
        fetchPlace
    } = useContext(PlaceContext) as PlaceContent;


    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    useEffect(() => {
        fetchPlace(id as string)
    }, [id]);

    return <div className={'homepage'}>
        <Header/>
        <Navigation/>

        <div className={'container pt-5'}>
            <div className={'aboutDestination p-2 bg-white text-left'} style={{borderRadius: '4px'}}>
                <h1 className={'my-5'}>Thaitour.cz – Váš specialista na Thajsko a dovolenou v Thajsku</h1>
                <div className={'row m-3'}>
                    <div className={'col-lg-2 col-sm-12'}>
                        <img src={'http://www.thaitour.cz/wp-content/uploads/Mapa-hlavni-strana.jpg'}/>
                    </div>
                    <div className={'col-lg-8 col-sm-12 px-lg-5 d-flex justify-content-start'}>
                        <div className={'row'}>
                            <div className={"col-12 d-flex justify-content-start"}>
                                <p>Jsme cestovní agentura Thai Tour a specializujeme se na ubytování v
                                    Thajsku,
                                    především formou Thajsko na vlastní pěst a bez cestovky. Naše nabídka
                                    sčítá
                                    velké
                                    množství lokalit, stačí si vybrat jen tu pravou. Hotely v Thajsku patří
                                    mezi
                                    výjimečné a to stejné platí i pro vily, domy a apartmány v Thajsku,
                                    které
                                    Vám
                                    zajistí dokonalý prožitek z Vaší dovolené.</p>
                            </div>
                            <div className={"col-12 d-flex justify-content-start"}>
                                <h5>Dovolená Thajsko</h5>
                            </div>
                            <div className={"col-12 d-flex justify-content-start"}>
                                <p>Dovolená v Thajsku s Thai Tour je ideální volbou už jen z toho důvodu, že
                                    je
                                    pro nás
                                    tato oblast druhým domovem, proto se dokážeme zaručit za poskytované
                                    služby
                                    našim
                                    klientům a pomoci tak při řešení jakýchkoli problémů. Navštivte Thajsko
                                    a
                                    zažijte
                                    luxusní dovolenou v zemi božských pláží, posvátných chrámů, tropických
                                    vegetací a
                                    exotických chutí. Nabízíme úžasné poznání a jedinečné ubytování v mnoha
                                    oblastech
                                    Thajska. Ať už se jedná o thajské hotely, vily, domy či apartmány, máme
                                    maximální
                                    zájem na tom, aby byl náš klient spokojený, a proto děláme vše, co je v
                                    našich
                                    silách. Našim hlavním cílem je vyhovět každému klientovi dle jeho
                                    individuálních
                                    potřeb, představ a přání. K tomu je vedeno i naše jednání a celkový
                                    přístup
                                    ke
                                    klientovi. Jako jedni z mála nabízíme několik různých možností ubytování
                                    v
                                    různých
                                    lokalitách Thajska. Nevíte kam do Thajska či Vás láká exotická dovolená
                                    v
                                    Thajsku?
                                    Obraťte se na nás! Cesta do Thajska s agenturou Thai Tour je jednoduchá
                                    a
                                    naše
                                    nabídka Vás jistě mile překvapí.</p>
                            </div>
                        </div>
                    </div>
                    <div className={'col-2'}>
                        {/*<img src={img.images.exchange}/>*/}
                    </div>
                </div>
                <div className={'row m-3'}>
                    <div className={'col-12'}>
                        <div className={"mt-3 col-12 d-flex justify-content-start"}><h5>Ubytování
                            Thajsko</h5>
                        </div>
                        <div className={"col-12 d-flex justify-content-start"}>
                            <p>Skoro všechny námi nabízené objekty jsme osobně navštívili, a proto Vám
                                dokážeme
                                poradit,
                                který by nejlépe vyhovoval právě Vaší dovolené v Thajsku, ať už cestujete
                                sami,
                                s
                                rodinou či jako skupina. Všechny nabízené objekty a ubytování pro Vás
                                pečlivě
                                vybíráme a
                                spolupracujeme přímo s Thajskými majiteli, a to je důvod, proč se dokážeme
                                zaručit za
                                kvalitní ubytovací služby. Dopřejte si luxusní ubytování a dovolenou v
                                Thajsku,
                                koupání
                                u průzračného thajského moře, objevte kouzelný svět oceánu a okuste
                                vyhlášené
                                lahůdky v
                                thajských restauracích, které jsou dokonalou směsí sladké, slané, ale i
                                kyselé
                                chuti.
                                Vychutnejte si Thajsko všemi svými smysly! Vydejte se na různé poznávací
                                zájezdy
                                a
                                objevte to nejlepší z toho, co tato exotická země může nabídnout. Dovolená v
                                Thajsku
                                jako splněný sen.</p>
                        </div>

                        <div className={"col-12 d-flex justify-content-start"}>
                            <a className={'btn btn-small btn-primary'} href={'/catalog'}>On-line katalog</a>
                        </div>
                    </div>
                    <div>
                        <div className={'importantInfo pt-3'} style={{borderRadius: ' 4px'}}>
                            <div className={'row'}>
                                <div className={'col-12'}>
                                    <div style={{padding: ' 0', border: 0}}>
                                        <div className={'row'}
                                             style={{
                                                 padding: ' 1rem 0',
                                                 margin: 0,
                                                 backgroundColor: '#e9f3fb',
                                                 borderRadius: '4px'
                                             }}>
                                            <div className={'mt-3 col-12 d-flex justify-content-start'}>
                                                <h5>Hlavní důvody, proč zvolit cestování na vlastní pěst s
                                                    Thai
                                                    Tour a ne zájezd:</h5>
                                            </div>
                                            <div
                                                className={'col-lg-12 col-sm-12 d-flex justify-content-start'}>
                                                <div className=' entry-content'>
                                                    <p>&#x2714; Nevíte kam do Thajska? Pomůžeme Vám vybrat
                                                        správnou lokalitu a vhodné ubytování.</p>
                                                    <p>&#x2714; ZS Thai Tour se exotická dovolená v Thajsku
                                                        koná
                                                        po celý rok.</p>
                                                    <p>&#x2714; Žádné pevné termíny – s námi bude Vaše cesta
                                                        do
                                                        Thajska kdykoliv a na jak dlouho chcete.</p>
                                                    <p>&#x2714; Neplatíte žádné provize a sami si určíte,
                                                        kolik
                                                        zaplatíte – levná dovolená v Thajsku není pouhým
                                                        snem, s
                                                        Thai Tour se sen o Thajsku stává realitou.</p>
                                                    <p>&#x2714; Jsme specialisté na Thajsko, a proto Vám se
                                                        vším
                                                        poradíme a pomůžeme.
                                                    </p>
                                                    <p>&#x2714; Máte zájem o ubytování ve vile, hotelu či
                                                        apartmánu aj., co právě v nabídce nemáme? Ozvěte se
                                                        nám
                                                        a my Vám ubytování ve Vámi vybrané lokalitě Thajska
                                                        zajistíme za nejlepší možné ceny.
                                                    </p>
                                                    <p>&#x2714; Za vyřízení Vaší dovolené v Thajsku, si
                                                        neúčtujeme žádné poplatky.
                                                    </p>
                                                    <p>&#x2714; Thai Tour nabízí na jednom místě širokou
                                                        nabídku
                                                        ubytování do celého Thajska.
                                                    </p>
                                                    <p>&#x2714; Náš přístup ke klientovi je profesionální,
                                                        spolehlivý a individuální.
                                                    </p>
                                                    <p>&#x2714; Svůj čas věnujeme našim klientům.
                                                    </p>
                                                    <p>&#x2714; S námi se Vám cesta do Thajska na vlastní
                                                        pěst
                                                        vyplatí! Jet do Thajska bez cestovky nebyla nikdy
                                                        předtím tak jednoduchá možnost jako je nyní s Thai
                                                        Tour.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-12'}>
                        <div className={"mt-3 col-12 d-flex justify-content-start"}><h5>Kam do Thajska</h5>
                        </div>
                        <div className={"col-12 d-flex justify-content-start"}>
                            <p>Thajsko nabízí nepřeberné množství exotiky i možností, že by byla škoda toho
                                nevyužít naplno. A nejen, že jsme pro Vaši cestu do Thajska připravili popis
                                lokalit na ulehčení rozhodování kam do Thajska, ale i několik zajímavých
                                tipů a
                                aktivit, jako je jízda na slonech, windsurfing, delfíní show, golf, zábavní
                                a
                                nákupní centra a mnoho dalších..</p>
                        </div>

                        <div className={"col-12 d-flex justify-content-start"}>
                            <a className={'btn btn-small btn-primary'} href={'/thaiRecommendation'}>Popis
                                lokalit</a>
                        </div>
                    </div>
                    <div className={'col-12'}>
                        <div className={"mt-3 col-12 d-flex justify-content-start"}><h5>Kompletní zájezdy do
                            Thajska a po celém světě</h5></div>
                        <div className={"col-12 d-flex justify-content-start"}>
                            <p>Nabízíme i kompletní balíček ubytování a letenek. Díky naší dceřiné
                                společnosti
                                Devana.cz jsme Vám schopni nabídnout kompletní balíčky zájezdů do Thajska,
                                ale i
                                do celého světa. I zde je samozřejmostí, že Vám s Vaším zájezdem do Thajska
                                či
                                kdekoli po světě pomůžeme.</p>
                        </div>

                        <div className={"col-12 d-flex justify-content-start"}>
                            <a href={'#'} className={'btn btn-small btn-primary'}>Zájezdy</a>
                        </div>
                    </div>
                    <div>
                        <div className={'importantInfo pt-3'} style={{borderRadius: ' 4px'}}>
                            <div className={'row'}>
                                <div className={'col-12'}>
                                    <div style={{padding: ' 0', border: 0}}>
                                        <div className={'row'}
                                             style={{
                                                 padding: ' 1rem 0',
                                                 margin: 0,
                                                 backgroundColor: '#e9f3fb',
                                                 borderRadius: '4px'
                                             }}>
                                            <div className={'mt-3 col-12 d-flex justify-content-start'}>
                                                <h5>Hlavní důvody, proč zvolit zájezd s Devanou a ne
                                                    cestování
                                                    na vlastní pěst:</h5>
                                            </div>
                                            <div
                                                className={'col-lg-12 col-sm-12 d-flex justify-content-start'}>
                                                <div className=' entry-content'>
                                                    <p>&#x2714; Naše dceřiné stránky Devana.cz nabízí
                                                        kompletní
                                                        balíčky zájezdů do Thajska, ale i do celého světa.
                                                        Devana nabízí širokou nabídku zájezdů do Thajska na
                                                        jednom místě za ty nejlepší ceny!
                                                    </p>
                                                    <p>&#x2714; Devana za Vás vše zařídí a zorganizuje! Vy
                                                        si v
                                                        klidu svého domova jen vyberete ten nejvhodnější
                                                        zájezd
                                                        do Thajska či kamkoliv do světa v požadovaném
                                                        termínu.
                                                    </p>
                                                    <p>&#x2714; Nemusíte hledat zvlášť letenky do Thajska
                                                        ani
                                                        ubytování v Thajsku, Devana Vám nabídne kompletní
                                                        zájezd
                                                        do Thajska, ale i do celého světa kdykoliv během
                                                        roku. S
                                                        Devanou se zájezd do Thajska za skvělou cenu stává
                                                        realitou.
                                                    </p>
                                                    <p>&#x2714; Vše je předem dané a nepotká Vás žádné
                                                        překvapení. Vždy předem víte, co Vás čeká – levný
                                                        zájezd
                                                        do Thajska, ale i do celého světa není pouhým snem,
                                                        s
                                                        Devanou je to realita.
                                                    </p>
                                                    <p>&#x2714; Na místě Vás vždy uvítá delegát, který Vám
                                                        bude
                                                        k dispozici po celou dobu Vaší dovolené včetně
                                                        nonstop
                                                        asistence od pořádající cestovní kanceláře.
                                                    </p>
                                                    <p>&#x2714; Na Devana.cz nabízíme wellness zájezdy,
                                                        eurovíkendy, zájezdy s dětmi, zájezdy pro seniory,
                                                        tuzemsko i exotiku. Lastminute a firstminute nabídky
                                                        samozřejmě nesmí chybět. Na Devana.cz naleznete vše
                                                        pro
                                                        Vaši dovolenou.
                                                    </p>
                                                    <p>&#x2714; Kompletní zájezd do Thajska i do celého
                                                        světa u
                                                        nás máte s garancí nejlepší ceny včetně všech slev a
                                                        výhod. Ceny zájezdů garantujeme stejné jako od
                                                        pořádající CK.
                                                    </p>
                                                    <p>&#x2714; Kompletní zájezd do Thajska i do celého
                                                        světa u
                                                        nás máte s garancí nejlepší ceny včetně všech slev a
                                                        výhod. Ceny zájezdů garantujeme stejné jako od
                                                        pořádající CK.
                                                    </p>
                                                    <p>&#x2714; S Devanou se zájezd do Thajska i do celého
                                                        světa
                                                        vyplatí!
                                                    </p>
                                                    <p>&#x2714; Přejete si zájezd s all inclusive, polopenzí
                                                        či
                                                        bez stravy? Přejete si zájezd s vlastní dopravu nebo
                                                        letecky? S Devanou to není problém.
                                                    </p>
                                                    <p>&#x2714; Máte rádi aktivní dovolenou? Jste sportovně
                                                        založení? V naší nabídce naleznete i sportovní
                                                        zájezdy,
                                                        ať už se jedná o lyžařské, cyklistické či golfové
                                                        zájezdy.
                                                    </p>
                                                    <p>&#x2714; Jste zvědaví a rádi poznáváte novou kulturu
                                                        a
                                                        místa? Vyberte si z našich poznávacích zájezdů a
                                                        poznejte novou zemi a nové lidi.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-12'}>
                        <div className={"mt-3 col-12 d-flex justify-content-start"}><h5>Výlety v
                            Thajsku</h5>
                        </div>
                        <div className={"col-12 d-flex justify-content-start"}>
                            <p>Jedete do Thajska a přemýšlíte co navštívit, abyste si svou dovolenou v
                                Thajsku
                                maximálně užili? Máme pro Vás k dispozici širokou nabídku výletů v Thajsku.
                                Exotické Thajsko je naprostý ráj odpočinku a nabízí nepřeberné množství
                                památek,
                                zábavy, dobrodružství, nákupů či skvělého jídla. Objevte nezapomenutelné
                                Thajsko
                                díky široké škále výletů v Thajsku, které jsme pro Vás shromáždili a na
                                které
                                budete rádi vzpomínat celý život! Zažijte na vlastní kůži pravé zvuky
                                džungle,
                                šplouchání kánoe, plavby po kanálech plných obchodníků, návštěvu krápníkové
                                jeskyně, fascinující šnorchlování a potápění, jízdu na slonech, pozorování
                                divokých zvířat, ohromující chrámy a historické památky, taneční a kulturní
                                show, divoký noční život a mnoho dalšího. Rezervujte si již dnes skvělý
                                výlet v
                                Thajsku a zpestřete si tak Vaši dovolenou a zažijte neopakovatelné chvilky
                                ve
                                Vašem životě!</p>
                        </div>
\
                        <div className={"col-12 d-flex justify-content-start"}>
                            <a href={'/thaiTours'} className={'btn btn-small btn-primary'}>Výlety v
                                Thajsku</a>
                        </div>
                    </div>
                    <div className={'col-12'}>
                        <div className={"mt-3 col-12 d-flex justify-content-start"}><h5>Golf v Thajsku</h5>
                        </div>
                        <div className={"col-12 d-flex justify-content-start"}>
                            <p>Hrajete golf? Pak si nesmíte nechat ujít golf v Thajsku! Thajsko nabízí ty
                                nejlepší golfová hřiště na mezinárodní úrovni a za skvělé ceny. Hrajte na
                                golfových hřištích, kde hráli ti nejlepší světoví golfisté a kde se konaly
                                známé
                                světové turnaje. V Thajsku navíc můžete hrát golf po celý rok, protože to
                                dovoluje tropické podnebí této země. Můžete se těšit na špičkové služby,
                                milý
                                personál, kvalitní a udržovaná golfová hřiště a hlavně na nezapomenutelnou
                                golfovou hru, kterou zažijete, jen pokud budete hrát golf v Thajsku. Pokud s
                                golfem teprve začínáte i pro Vás je golf v Thajsku skvělé místo, kde začít.
                                Je
                                zde k dispozici mnoho golfových škol a skvělé podmínky pro Vaše začátky.
                                Dovolená s golfem v Thajsku je opravdový ráj.</p>
                        </div>

                        <div className={"col-12 d-flex justify-content-start"}>
                            <a href={'/thaiGolf'} className={'btn btn-small btn-primary'}>Golf v Thajsku</a>
                        </div>
                    </div>
                    <div className={'col-12 mt-3'}>
                        <div className={"col-12 d-flex justify-content-start"}>
                            <p>Služby v naší nabídce nabízíme po celý rok. Svoji činnost provozujeme
                                převážně
                                on-line. Na těchto stránkách naleznete veškeré potřebné informace o
                                službách,
                                které nabízíme, včetně fotografií, cen a užitečných rad a informací o
                                Thajsku.
                                Vaše vysněná exotická dovolená v Thajsku může být zařízena z pohodlí Vašeho
                                domova. V případě dotazů, nás neváhejte kontaktovat na: info@thaitour.cz,
                                nebo
                                využijte náš kontaktní formulář.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer href={''} contact={''}/>
    </div>
}

export default AboutUs;
