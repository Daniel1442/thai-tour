--parameters
INSERT INTO thai_tour.parameter (id, name, tooltip, created_at, created_by, updated_at, updated_by) VALUES ('6d6d2055-0874-4c62-b0a6-a73dedfca039', 'Internet/wifi', 'Internet/wifi', '2023-06-29 07:59:01.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.parameter (id, name, tooltip, created_at, created_by, updated_at, updated_by) VALUES ('50f8d7ad-4d31-4169-9937-1a7c3a74eb45', 'Pláž', 'Pláž', '2023-06-29 07:59:22.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.parameter (id, name, tooltip, created_at, created_by, updated_at, updated_by) VALUES ('7ab47da7-dc55-4f55-8257-f4226e8dd891', 'Venkovní bazén', 'Venkovní bazén', '2023-06-29 07:59:21.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.parameter (id, name, tooltip, created_at, created_by, updated_at, updated_by) VALUES ('117b4b7d-7ad9-4370-8ea8-9332c9794195', 'Zahrada', 'Zahrada', '2023-06-29 07:59:32.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.parameter (id, name, tooltip, created_at, created_by, updated_at, updated_by) VALUES ('197bb431-70a3-4e39-a7d0-fd7ab979a81d', 'Klimatizace', 'Klimatizace', '2023-06-29 07:59:30.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.parameter (id, name, tooltip, created_at, created_by, updated_at, updated_by) VALUES ('426927b1-2b4b-4c8c-a64d-df12cc75c62c', 'Restaurace', 'Restaurace', '2023-06-29 08:00:34.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.parameter (id, name, tooltip, created_at, created_by, updated_at, updated_by) VALUES ('e542b1e3-0aa1-434e-84df-cc6d137fa8f2', 'Bar', 'Bar', '2023-06-29 08:00:36.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.parameter (id, name, tooltip, created_at, created_by, updated_at, updated_by) VALUES ('93193f0a-9b01-4637-be02-c208fa4be01d', 'Fitness', 'Fitness', '2023-06-29 08:00:38.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.parameter (id, name, tooltip, created_at, created_by, updated_at, updated_by) VALUES ('e75fb5da-83ba-4a7a-b0ab-9d910fe26e28', 'Parkoviště', 'Parkoviště', '2023-06-29 08:00:39.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.parameter (id, name, tooltip, created_at, created_by, updated_at, updated_by) VALUES ('b0f06c77-cccf-4681-9529-d542754fa754', 'Potápění a šnorchlování', 'Potápění a šnorchlování', '2023-06-29 08:00:41.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.parameter (id, name, tooltip, created_at, created_by, updated_at, updated_by) VALUES ('8fceac1b-1ca9-4d51-9f2a-6aa33a932d62', 'Vodní sporty', 'Vodní sporty', '2023-06-29 08:00:44.000000', 'ADMIN', null, null);

--places
INSERT INTO thai_tour.place (id, name, image, accommodation_type, address, location, review, is_favorite, is_active, created_at, created_by, updated_at, updated_by, value) VALUES ('03510c7b-e570-4d24-9f95-51243543e024', 'Test place 2', 'patha/to/nic', 'APARTMENTS', null, 'Phuket', 5, false, true, '2023-06-25 23:32:43.000000', 'ADMIN', null, null, null);
INSERT INTO thai_tour.place (id, name, image, accommodation_type, address, location, review, is_favorite, is_active, created_at, created_by, updated_at, updated_by, value) VALUES ('bc5a8d11-bf32-4cb9-8134-9be2f3c45b72', 'Test place', 'http://www.thaitour.cz/wp-content/gallery/railay-great-view-resort/exterior_046.jpg', 'HOTEL', '13/1 soi 2, Chiangmai-Lamphun Rd, T.Wat Gate, A. Muang, Wat Ket, 50000 Chiang Mai, Thajsko', 'Bangkok a okolí', 5, true, true, '2023-06-24 20:15:11.000000', 'ADMIN', '2023-06-24 20:15:20.000000', 'ADMIN', 'Rimping Village Hotel se nachází přímo ve městě Chiang Mai, jen 2 km od centra města. Mezinárodní letiště je od hotelu vzdálené 7 km.');
INSERT INTO thai_tour.place (id, name, image, accommodation_type, address, location, review, is_favorite, is_active, created_at, created_by, updated_at, updated_by, value) VALUES ('e98a99f8-7011-429c-ad66-38906495b136', 'Test place 4', 'patha/to/nic', 'APARTMENTS', null, 'Phuket', 2, false, true, '2023-07-11 00:38:03.000000', 'ADMIN', null, null, null);
INSERT INTO thai_tour.place (id, name, image, accommodation_type, address, location, review, is_favorite, is_active, created_at, created_by, updated_at, updated_by, value) VALUES ('8e803aeb-9a75-4543-a3ab-d8870897f9e0', 'Test place 5', 'patha/to/nic', 'APARTMENTS', null, 'Bangkok a okolí', 4, false, true, '2023-07-11 00:39:10.000000', 'ADMIN', null, null, null);
INSERT INTO thai_tour.place (id, name, image, accommodation_type, address, location, review, is_favorite, is_active, created_at, created_by, updated_at, updated_by, value) VALUES ('db63d00d-fe7b-421e-b7a5-f4b81a3573e3', 'Test place 3', 'patha/to/nic', 'HOTEL', null, 'Phuket', 5, false, true, '2023-07-11 00:37:29.000000', 'ADMIN', null, null, null);
INSERT INTO thai_tour.place (id, name, image, accommodation_type, address, location, review, is_favorite, is_active, created_at, created_by, updated_at, updated_by, value) VALUES ('fad6a4c0-abf1-460c-8675-b957deb1da09', 'Test place 6', 'patha/to/nic', 'HOTEL', null, 'Bangkok a okolí', 4, false, true, '2023-07-11 00:39:08.000000', 'ADMIN', null, null, null);

--place content
INSERT INTO thai_tour.place_content (id, place_id, content_type, value, is_active, created_at, created_by, updated_at, updated_by) VALUES ('f62be58e-e5b8-47a1-91f4-272379f3e3c0', 'bc5a8d11-bf32-4cb9-8134-9be2f3c45b72', 'LONG_DESCRIPTION', ' <div className={"mt-3 col-12 d-flex justify-content-start"}>
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
            </div>', true, '2023-06-29 07:53:19.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.place_content (id, place_id, content_type, value, is_active, created_at, created_by, updated_at, updated_by) VALUES ('6a263148-3f8e-426b-87df-4dc3345c03c7', 'bc5a8d11-bf32-4cb9-8134-9be2f3c45b72', 'IMPORTANT_INFO', '"    <div className={''importantInfo pt-3''} style={{borderRadius: ''4px''}}>            <div className={''row''}>                <div className={''col-12''}>                    <div className=''alert alert-warning'' role=''alert'' style={{padding: ''0'', border: 0}}>                        <h4 className=''alert-heading'' style={{padding: ''16px''}}>Důležité informace!</h4>                        <hr style={{margin: ''1rem 0 0 0''}}/>                        <div className={''row''} style={{padding: ''1rem 0'', margin: 0, backgroundColor: ''#fff''}}>                            <div className={''mt-3 col-12 d-flex justify-content-start''}>                                <h5>Důležité & Akce</h5>                            </div>                            <div className={''col-lg-8 col-sm-12 d-flex justify-content-start''}>                                <div className=''entry-content''>                                    <p>&#9642; V resortu nelze ubytovat děti pod 18 let!</p>                                    <p>&#9642; Zdarma denně čerstvé ovoce na pokoji!</p>                                    <p>&#9642; Sleva 5% v případě rezervace provedené min. 60 dní předem v termínu 11.1. – 31.4.!</p>                                    <p>&#9642; V termínu 20.12. – 15.1. je vyžadován pobyt min. 5 nocí!</p>                                    <p>&#9642; Slevy a akce nelze kombinovat! Nelze použít na přistýlku!</p>                                    <p>&#9642; Na Vánoce a Nový rok jsou klienti povinni zakoupit v hotelu Gala večeři s doprovodným programem. Při pobytu v těchto termínech bude večeře automaticky napočítána k ceně pobytu!</p>                                </div>                            </div>                            <div className={''mt-3 col-12 d-flex justify-content-start''}>                                <h5>Platební podmínky</h5>                            </div>                            <div className={'' col-lg-8 col-sm-12 d-flex justify-content-start''}>                                <p>                                    Ceny uvedené v ceníku jsou ceny základní a platné, eventuálně může dojít i k jejich případnému snížení. To závisí na požadovaném termínu a obsazenosti resortu. Máte-li zájem o tento resort, vyplňte prosím nezavázanou rezervaci a my Vám zpět zašleme cenovou nabídku k potvrzení závazné rezervace.                                    Poplatky za doplňkové služby dle nabídky hotelu se nezapočítávají do celkové ceny a je třeba je zaplatit zvlášť při pobytu.                                    Platba: Twin Lotus Resort & Spa – Kho Lanta vyžaduje od klientů zálohu za ubytování předem ve výši 20% z celkové ceny, a to při potvrzení závazné rezervace. Doplatek ceny za ubytování je vyžadován min. 30 dní před odjezdem.                                </p>                            </div>                            <div className={''mt-3 col-12 d-flex justify-content-start''}>                                <h5>Storno podmínky</h5>                            </div>                            <div className={'' col-lg-8 col-sm-12 d-flex justify-content-start''}>                                <p>                                    Při zrušení rezervace méně jak 21 dní před příjezdem v termínu 1.11. – 19.12. a 16.1. – 30.4., bude klientovi účtován stornopoplatek 50% celkové ceny a při zrušení rezervace méně jak 21 dní před příjezdem v termínu 20.12. – 15.1., bude klientovi účtován stornopoplatek 100% celkové ceny (podmínky hotelu). Mimo výše uvedeného se ostatní storno podmínky řídí dle všeobecných obchodních podmínek Thai Tour cestovní agentura.                                </p>                            </div>                        </div>                    </div>                </div>            </div', true, '2023-06-29 07:57:42.000000', 'ADMIN', null, null);


--place parameter
INSERT INTO thai_tour.place_parameter (id, place_id, parameter_id, created_at, created_by, updated_at, updated_by) VALUES ('1d34e1df-87e3-405d-955d-c6086e534b76', 'bc5a8d11-bf32-4cb9-8134-9be2f3c45b72', '6d6d2055-0874-4c62-b0a6-a73dedfca039', '2023-06-29 07:59:01.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.place_parameter (id, place_id, parameter_id, created_at, created_by, updated_at, updated_by) VALUES ('8966af53-5905-4ae8-8d87-9ce067be0d76', 'bc5a8d11-bf32-4cb9-8134-9be2f3c45b72', '50f8d7ad-4d31-4169-9937-1a7c3a74eb45', '2023-06-29 07:59:01.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.place_parameter (id, place_id, parameter_id, created_at, created_by, updated_at, updated_by) VALUES ('7d3f045c-acb2-4425-be07-5fba0f5a0e53', 'bc5a8d11-bf32-4cb9-8134-9be2f3c45b72', '7ab47da7-dc55-4f55-8257-f4226e8dd891', '2023-06-29 07:59:01.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.place_parameter (id, place_id, parameter_id, created_at, created_by, updated_at, updated_by) VALUES ('1471c5ee-f0c6-415a-b64c-0f737a74c413', 'bc5a8d11-bf32-4cb9-8134-9be2f3c45b72', '117b4b7d-7ad9-4370-8ea8-9332c9794195', '2023-06-29 07:59:01.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.place_parameter (id, place_id, parameter_id, created_at, created_by, updated_at, updated_by) VALUES ('eda7811b-0345-4f97-b832-673cb9ab6103', 'bc5a8d11-bf32-4cb9-8134-9be2f3c45b72', '197bb431-70a3-4e39-a7d0-fd7ab979a81d', '2023-06-29 07:59:01.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.place_parameter (id, place_id, parameter_id, created_at, created_by, updated_at, updated_by) VALUES ('974bce43-03b0-4d47-ad6a-47c169e3f76e', 'bc5a8d11-bf32-4cb9-8134-9be2f3c45b72', '426927b1-2b4b-4c8c-a64d-df12cc75c62c', '2023-06-29 07:59:01.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.place_parameter (id, place_id, parameter_id, created_at, created_by, updated_at, updated_by) VALUES ('bc9b15c0-d790-4968-980b-3cf6536d6f57', 'bc5a8d11-bf32-4cb9-8134-9be2f3c45b72', 'e542b1e3-0aa1-434e-84df-cc6d137fa8f2', '2023-06-29 07:59:01.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.place_parameter (id, place_id, parameter_id, created_at, created_by, updated_at, updated_by) VALUES ('82b888f9-9bfd-472c-9e19-8dfdbdc2b499', 'bc5a8d11-bf32-4cb9-8134-9be2f3c45b72', '93193f0a-9b01-4637-be02-c208fa4be01d', '2023-06-29 07:59:01.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.place_parameter (id, place_id, parameter_id, created_at, created_by, updated_at, updated_by) VALUES ('665553a3-b650-41d4-870c-3de7814c0f4d', 'bc5a8d11-bf32-4cb9-8134-9be2f3c45b72', 'e75fb5da-83ba-4a7a-b0ab-9d910fe26e28', '2023-06-29 07:59:01.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.place_parameter (id, place_id, parameter_id, created_at, created_by, updated_at, updated_by) VALUES ('49df89aa-ab14-4881-820b-b68f09c9af52', 'bc5a8d11-bf32-4cb9-8134-9be2f3c45b72', 'b0f06c77-cccf-4681-9529-d542754fa754', '2023-06-29 07:59:01.000000', 'ADMIN', null, null);
INSERT INTO thai_tour.place_parameter (id, place_id, parameter_id, created_at, created_by, updated_at, updated_by) VALUES ('08467953-7d13-4c61-b281-37d06401f813', 'bc5a8d11-bf32-4cb9-8134-9be2f3c45b72', '8fceac1b-1ca9-4d51-9f2a-6aa33a932d62', '2023-06-29 07:59:01.000000', 'ADMIN', null, null);
