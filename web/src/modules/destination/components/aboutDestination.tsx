import React, {useEffect, useRef, useState} from 'react';
import DestinationParameter from "./destinationParameter";
import DestinationAbout from "./destinationAbout";

const AboutDestination: React.FC = () => {
    return (
        <div className={'aboutDestination py-3 bg-white'} style={{borderRadius: '4px'}}>
            <div className={'row mt-3 mx-lg-3 row-about'}>
                <div className={'col-12 d-flex justify-content-start'}>
                    <h1>O destinaci</h1>
                </div>

                <DestinationParameter/>
                {/*<DestinationAbout/>*/}

                <div className={"mt-3 col-12 d-flex justify-content-start"}>
                    <h5>Popis</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p>Twin Lotus Resort & Spa – Kho Lanta se nachází na 12ti akrech upravené tropické zahrady a
                        leží
                        přímo u 3 km dlouhé bílé písčité pláži v části Klong Dao Koh Lanta. Twin Lotus Resort & Spa
                        –
                        Kho Lanta se nachází na ostrově Koh Lanta, přímo na soukromé pláži Klong Dao. Koh Lantase
                        nachází na západním pobřeží Andamanského moře, mezi Krabi a Phi Phi. Resort se nachází v
                        srdci
                        Klong Dao Beach, jedné z nejkrásnějších pláží na západním pobřeží ostrova. Na letiště Krabi
                        se
                        dostanete za 1,5 hodiny jízdy. V roce 2013 areál prošel kompletní rekonstrukcí s přidáním
                        zbrusu
                        nových pokojů typu Deluxe s výhledem do zahrady a výhledem na moře a nových vil u pláže.
                        Resort
                        má recepci pod širým nebem, spa & wellness centrum, fitness centrum, konferenční prostory,
                        dvě
                        restaurace, dva bazény a plážový bar. Nový Twin Lotus Resort nyní nabízí celkem 81 pokojů a
                        vil
                        a širokou škálu zařízení, služeb a aktivit pro své hosty. Snaží se zajistit klidné a tiché
                        prostředí, proto prosím vezměte na vědomí, že resort uvítá rád všechny hosty ve věku starší
                        18
                        let. Resort nabízí moderní ubytování s klimatizací a bezplatným Wi-Fi. Můžete si dopřát
                        relaxační masáže nebo jen odpočívat u bazénu. Resort je také jen 10 minut jízdy od Sala Dan
                        Pier. Twin Lotus Resort & Spa má vkusně zařízené pokoje s interiéry v tmavých tónech. Každý
                        pokoj je vybavený kabelovou TV s plochou obrazovkou, minibarem a bezpečnostní schránkou. K
                        dispozici je také rychlovarná konvice a fén. K pokoji patří soukromá koupelna se sprchou. Na
                        místě můžete podniknout nespočet výletů do okolí a zažít tak dobrodružství, poznat thajskou
                        kulturu, ochutnat nové pokrmy, vyzkoušet vodní sporty, podívat se do džungle a mnoho
                        dalšího. Na
                        místě je k dispozici veřejné parkoviště zdarma. Restaurace Far Sight nabízí širokou škálu
                        thajské a západní kuchyně. Twin Lotus Resort & Spa na ostrově Koh Lanta je to pravé místo
                        pro
                        vaši vysněno dovolenou v Thajsku.</p>
                </div>
                <div className={"mt-3 col-12 d-flex justify-content-start"}>
                    <h5>Poloha</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p>
                        Twin Lotus Resort & Spa - Kho Lanta se nachází na ostrově Koh Lanta, přímo na soukromé pláži
                        Klong Dao. Koh Lanta se nachází na západním pobřeží Andamanského moře, mezi Krabi a Phi Phi.
                        Resort se nachází v srdci Klong Dao Beach, jedné z nejkrásnějších pláží na západním pobřeží
                        ostrova. Na letiště Krabi se dostanete za 1,5 hodiny jízdy.</p>
                </div>
                <div className={"mt-3 col-12 d-flex justify-content-start"}>
                    <h5>Vybavení objektu</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p>
                        Recepce 24 hodin denně, Wi-Fi zdarma, soukromá pláž, klimatizace, bazén 2x, zahrada,
                        restaurace,
                        bar, fitness centrum, masáže, wellness centrum, konferenční prostory okružní jízdy, pokojová
                        služba, turistické informace, úschova zavazadel, rodinné pokoje, prostor pro kuřáky,
                        parkování.</p>
                </div>
                <div className={"mt-3 col-12 d-flex justify-content-start"}>
                    <h5>Pláž</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p>
                        Twin Lotus Resort & Spa - Kho Lanta se nachází jen minutu chůze od překrásné pláže Klong
                        Dao.
                        Pláž je čistá, klidná a nabízí božské koupání. Klong Dao Beach je jedna z nejkrásnějších
                        pláží
                        na západním pobřeží ostrova.
                    </p>
                </div>
                <div className={"mt-3 col-12 d-flex justify-content-start"}>
                    <h5>Pokoje</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p>
                        Twin Lotus Resort & Spa nabízí ubytování celkem v 81 vkusně zařízených vilách typu Superior,
                        Deluxe a Zahradní. Vily mají buď výhled do božské tropické zahrady, nebo na pláž a moře, se
                        západy slunce. Velikost vil je 38 – 60 m2 a jejich kapacita je 2 osoby + 1 přistýlka.
                        Všechny
                        vily nabízí prostorné rozvržení s vnitřními i venkovními prostory, a jsou navrženy s
                        použitím
                        přírodních tmavších tónů v souladu s životním prostředím. Každá vila je vybavena:
                    </p>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <div className="entry-content">
                        <p>&#9642; Kabelová TV s plochou obrazovkou</p>
                        <p>&#9642; Minibar</p>
                        <p>&#9642; Trezor</p>
                        <p>&#9642; Rychlovarná konvice</p>
                        <p>&#9642; Fén</p>
                        <p>&#9642; Koupelna/WC se sprchou</p>
                        <p>&#9642; Wi-Fi zdarma!</p>
                        <p>&#9642; Zdarma denně čerstvé ovoce na pokoji!</p>
                        <p>&#9642; Telefon</p>
                        <p>&#9642; Klimatizace</p>
                        <p>&#9642; Ventilátor</p>
                        <p>&#9642; Toaletní potřeby zdarma</p>
                        <p>&#9642; Přezůvky</p>
                        <p>&#9642; Služba probuzení</p>
                    </div>
                </div>
                <div className={"mt-3 col-12 d-flex justify-content-start"}>
                    <h5>Příjezd</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p>
                        od 15:00 hod.
                        Při příjezdu: welcome drink.
                    </p>
                </div>
                <div className={"mt-3 col-12 d-flex justify-content-start"}>
                    <h5>Odjezd</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p>
                        do 12:00 hod.
                    </p>
                </div>
                <div className={"mt-3 col-12 d-flex justify-content-start"}>
                    <h5>Stravování</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p>
                        Snídaně jsou automaticky zahrnuty v ceně ubytování formou bufetu. Možnost dokoupení obědů či
                        večeří na místě přímo v resortu. V nabídce je pravá thajská kuchyně, ale i mezinárodní
                        pokrmy.
                    </p>
                </div>
                <div className={"mt-3 col-12 d-flex justify-content-start"}>
                    <h5>Pro děti</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p>
                        V resortu lze ubytovat osoby pouze starší 18 let!
                    </p>
                </div>
                <div className={"mt-3 col-12 d-flex justify-content-start"}>
                    <h5>Sportovní nabídka</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p>
                        Fitness centrum, potápění a šnorchlování, vodní sporty, plachtění, cyklistika, turistika,
                        rybaření apod.
                    </p>
                </div>
                <div className={"mt-3 col-12 d-flex justify-content-start"}>
                    <h5>Zábava</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p>
                        Během svého pobytu v Twin Lotus Resort & Spa - Kho Lanta se můžete těšit na spoustu aktivit,
                        jak
                        sportovních, relaxačních nebo dobrodružných. Vyzkoušejte např. tradiční thajské masáže a
                        Spa. Na
                        okružních jízdách poznáte okolí hotelu, ale i širší okolí ostrova Koh Lanta. Své tělo si
                        můžete
                        procvičit v místním fitness centru. K dispozici je venkovní bazén, kde můžete plavat nebo
                        jen
                        lenošit na lehátku.
                    </p>
                </div>
                <div className={"mt-3 col-12 d-flex justify-content-start"}>
                    <h5>Welness</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p>
                        Twin Lotus Resort & Spa - Kho Lanta svým hostům nabízí služby Spa spolu s nabídkou
                        lázeňských
                        procedur a thajských masáží.
                    </p>
                </div>
                <div className={"mt-3 col-12 d-flex justify-content-start"}>
                    <h5>Internet</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p>
                        Internetové připojení je dostupné v celém hotelu zdarma.
                    </p>
                </div>
                <div className={"mt-3 col-12 d-flex justify-content-start"}>
                    <h5>Transfer z letiště</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p>
                        Nelepší počáteční místo je Bangkok – Thajsko (letenky do Bangkoku), do kterého musíte
                        přiletět z
                        Evropy a odtud se dostávat dále na ostrov Koh Lanta. Letenky do Bangkoku naleznete v sekci
                        "Letenky". Ostrov Koh Lanta leží zhruba 100 km pod Krabi. Na Koh Lantu se lze dostat buď
                        trajektem, cestujete-li autem či autobusem nebo pak lodí, která jede buď z přístavu Phuketu
                        (3
                        hod.) nebo z přístavu v Krabi (2 hod.). Obě tyto místa mají ale i svá mezinárodní letiště na
                        která je možno doletět z Bangkoku. Veškerá přeprava je k dispozici denně.
                    </p>
                </div>
                <div className={"mt-3 col-12 d-flex justify-content-start"}>
                    <h5>Parkovaní</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p>
                        Veřejné parkování je možné zdarma v areálu hotelu (rezervace není nutná).
                    </p>
                </div>
                <div className={"mt-3 col-12 d-flex justify-content-start"}>
                    <h5>Platební karty</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p>
                        VISA, MC, AMEX
                    </p>
                </div>
            </div>
        </div>
    )
}
export default AboutDestination;
