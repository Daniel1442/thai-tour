import React, {useContext, useEffect, useState} from "react";
import Navigation from '../modules/common/components/navigation';
import Footer from "../modules/common/components/footer";
import Header from "../modules/common/components/header";
import PlaceCardInfo from "../modules/common/components/placeCardInfo";

const LocalPlaceDescription = () => {
    return <div className={'homepage'}>
        <Header/>
        <Navigation/>

        <div className={'container pt-5'}>
            <div className={'aboutDestination p-2 bg-white text-left'} style={{borderRadius: '4px'}}>
                <h1 className={'my-5'}>Thajsko – Popis lokalit</h1>
                <div className={'row m-3'}>
                    <div className={'col-12 px-lg-5 d-flex justify-content-start'}>
                        <div className={'row'}>
                            <div className={"col-12 d-flex justify-content-start"}>
                                <p>Thajsko je země plná úsměvů a zároveň je to jedna z nejoblíbenějších destinací, kde
                                    Vás exotická dovolená mile překvapí. Vydejte se do Thajska se specialistou, vydejte
                                    se s Thai Tour. Exotická dovolená v Thajsku, kde se sny stávají skutečností.</p>
                            </div>
                        </div>
                    </div>
                    <div className={'col-12 px-lg-5 d-flex justify-content-start'}>
                        <div className={'row'}>
                            <div className={"col-12 d-flex justify-content-start"}>
                                <img className={'w-100 h-100'}
                                     src={'http://www.thaitour.cz/wp-content/uploads/P%C5%99ehled-nov%C3%BD.jpg'}/>
                            </div>
                        </div>
                    </div>
                </div>

                <PlaceCardInfo heading={'Thajsko – Bangkok'}
                               text={'Thajsko Bangkok, hlavní město Thajska, je právem považováno za letovisko, kam turisti nejčastěji směřují svou dovolenou v Thajsku. Ubytování v Bangkoku je totiž jako výlet do nebes, neboť Bangkok je často označováno za město andělů a je to místo kontrastů a proměn. Tato destinace nabízí nespočet možností turistických atrakcí, historických památek a chrámů, mnoho obchodů, restaurací a barů. Na jedné straně vás uchvátí svými historickými památkami, na druhé straně supermoderní architekturou. Staré královské město je historickým srdcem Bangkoku s nádhernými originálními historickými stavbami, chrámy a paláci (Wat Phra Kaew, Wat Pho, Wat Mahathat, Wat Arun, atd.). Čínská čtvrť s úzkými uličkami plná nejrůznějších krámků je nejrušnější a nejbarevnější částí Bangkoku.'}
                               points={['Nabídka – ubytování Bangkok', 'Výlety Bangkok',
                                   'Golf Bangkok',
                                   'Počasí Bangkok',
                                   'Co navštívit v Bangkoku']}/>
                <PlaceCardInfo heading={'Thajsko – Pattaya'}
                               text={'Thajsko Pattaya, je destinace ležící nedaleko města hlavního města Thajska (Bangkok), cca 1,5 hod. cesty autem. Jedná se o jedno z největších Thajských plážových letovisek u Bangkoku, na břehu Siamského zálivu. Do hříšné Thajské Pattayi míří mnoho turistů z celého světa. Pattaya se dá právem považovat za živé město, naleznete zde obrovské množství Thajských atrakcí, obchodů, restaurací, barů apod. včetně slavného kabaretu Alcazar či proslulé Walking Street. Ubytování v Pattayi je synonymum pro skvělý přístup ke všemu, co byste během své návštěvy v Thajsku měli vidět, ať jde o Thajské památky města Bangkok, turistické atrakce, botanickou zahradu, koupání na ostrovech či relaxaci a užívání slunce na dlouhých písčitých plážích.'}
                               points={['Nabídka – ubytování Pattaya', 'Výlety Pattaya',
                                   'Golf Pattaya',
                                   'Počasí Pattaya',
                                   'Co navštívit v Pattaya']}/>
                <PlaceCardInfo heading={'Thajsko – Phuket'}
                               text={'Thajsko Phuket, je letovisko, které Vás bude jen hýčkat. Živý Phuket je největší thajský ostrov a nabízí pobřeží, které je jednou velkou kolonádou jako z pohádky. Thajské hotely zde střídají bary a po západu slunce se zde potkává skoro celý svět. Phuket je místo, kam míří drtivá většina turistů celého světa, protože v tomto nejluxusnějším thajském středisku Phuket, klidně i několik nocí nezamhouříte oči a budete se bavit až do rána. Thajské azurové moře, bělostný písek a nespočet pláží je pro Phuket charakteristické. Dokonalá obnovená infrastruktura a nespočet atrakcí uspokojí i nejnáročnější klienty. Startují zde potápěčské výpravy a výlety k ostrovům v zálivu Phang Nga a souostroví Phi Phi. Do thajského Phuketu se může vydat opravdu každý, jak milovníci rušného nočního života velkých plážových letovisek, tak i vyznavači samoty, kteří se ubytují na malých vzdálených plážích bez civilizace. Pro ubytování na Phuketu je k dispozici výběr z luxusních hotelů a resortů, ale i prostých bungalovů. Mezi nekrásnější oblasti Pkuketu patří pláže Surin, Maikhao či Bontago, kde je krásný měkký písek a pozvolný vstup do moře. Jedná se také o klidné oblasti, kde neleží hlava na hlavě a budete si zde moci dopřát své soukromý. Mezi další hezké a oblíbené oblasti Phuketu patří pláže Kata a Karon, zde ale čekejte již více turistů. Ostrov Phuket má veliké mezinárodní letiště a vynikající letecké spojení s celým světem.'}
                               points={['Nabídka – ubytování Phuket', 'Výlety Phuket',
                                   'Golf Phuket',
                                   'Počasí Phuket',
                                   'Co navštívit v Phuket']}/>
                <PlaceCardInfo heading={'Thajsko – Phi Phi'}
                               text={'Thajsko Phi Phi je malebné souostroví a mezi turisti také velice oblíbená a žádaná destinace k pobytu. Je to místo, kde vás budou místní Thajci hýčkat a rozmazlovat. Thajské letovisko Phi Phi patří ke špičce na pyramidě luxusu. Tento „tajný“ ostrov je doslova zapomenutý ráj na zemi, je zde dech beroucí úchvatná příroda, modré průzračné moře, úžasné pláže, korálové útesy, skaliska z vápence a divoká džungle. Na ostrově Phi Phi se natáčel známý film „Pláž“ s Leonardem di Capriem. Ubytování Phi Phi znamená pobyt v nejkrásnějším koutu Thajska. Ostrov Phi Phi nabízí vše nezbytné pro nezávislé cestovatele, tak i pro náročné klienty, kteří vyžadují dokonalý hotelový servis.'}
                               points={['Nabídka – ubytování Phi Phi', 'Výlety Phi Phi',
                                   'Golf Phi Phi',
                                   'Počasí Phi Phi',
                                   'Co navštívit v Phi Phi']}/>
                <PlaceCardInfo heading={'Thajsko – Koh Samui'}
                               text={'Thajsko Koh Samui, znamená nádherný ostrov, který stoupá stále výš a výš na žebříčku popularity, dříve byla tato destinace zaslíbená „baťůžkářům“, ale nyní zde nacházejí uspokojení i klienti nároční na dokonalé služby a servis hotelů. Jde o třetí největší ostrov Thajska. Koh Samui je jeden z nejkrásnějších ostrovů v Thajsku a je velmi snadno dostupný díky mezinárodnímu letišti a řadě lodních linek. Pokud využijete ubytování na Koh Samui, naleznete zde kilometry dlouhé písčité pláže lemované palmami, exotickou tropickou přírodu a průzračné moře. Thajské Koh Samui je místo ideální pro relaxaci a odpočinek. Přístav Nathon je centrem ostrova. Nejpopulárnějšími plážemi na Koh Samui jsou Chaweng a Lamai, zde je nejvíce hotelů, penzionů, welness salonů a restaurací. Je zde také rušný noční život. Pokud ale naopak hledáte klid na ostrově Koh Samui, pak jsou pro vás ideální pláže na severu ostrova, jako je Mae Nam, Bophut, Bang Rak (Big Buddha) a Choeng Mon, tyto pláže jsou mnohem méně navštěvované než jsou pláže Chaweng a Lamai.'}
                               points={['Nabídka – ubytování Koh Samui', 'Výlety Koh Samui',
                                   'Golf Koh Samui',
                                   'Počasí Koh Samui',
                                   'Co navštívit v Koh Samui']}/>
                <PlaceCardInfo heading={'Thajsko – Krabi'}
                               text={'Thajsko Krabi, je ostrov, na kterém naleznete jak dostatek vyžití, tak oproti ostatním letoviskům i mnohem větší klid pro relaxaci a odpočinek. Ubytování na Krabi s sebou nese mnoho útesů a jeskyní střídající se s rovinami. Do thajského Krabi návštěvníci nejezdí za ruchem velkých letovisek, ani za nákupy či nočním životem, protože na ostrově Krabi vás čeká nádherná krajina a hlavně výlety na okolní ostrovy a ostrůvky. Thajské Krabi je místo vhodné jak pro nezávislé cestovatele, tak i pro ty co hledají skvělý hotelový servis.'}
                               points={['Nabídka – ubytování Krabi', 'Výlety Krabi',
                                   'Golf Krabi',
                                   'Počasí Krabi',
                                   'Co navštívit v Krabi']}/>
                <PlaceCardInfo heading={'Thajsko – Koh Lanta'}
                               text={'Thajsko Koh Lanta, je ostrov ležící v Andamanském moři a tyčí se nedotčeností přírodních rájů Thajska. Protože byl ostrov Koh Lanta ještě do nedávna mimo turistický průmysl, vydávají se sem turisté z přeplněných letovisek za cílem odpočinku a klidu. Ubytování na Koh Lanta je jako stvořené pro milovníky autentického prostředí života a pro potápěče z celého světa. I tak je zde ale dostatek vyžití v různých směrech. Západní pobřeží ostrova Koh Lanta lemují překrásné a nedotčené pláže. Abyste mohli prozkoumat krásy tohoto ostrova, je nejlepší zvolit pronájem motocyklu (lze pronajmout i taxi).'}
                               points={['Nabídka – ubytování Koh Lanta', 'Výlety Koh Lanta',
                                   'Golf Koh Lanta',
                                   'Počasí Koh Lanta',
                                   'Co navštívit v Koh Lanta']}/>
                <PlaceCardInfo heading={'Thajsko – Koh Tao'}
                               text={'Thajsko Koh Tao, ostrov, který je jinak přezdívaný jako „želví ostrov“, se nachází v jižním Thajsku a míří sem mnoho turistů, kteří netouží po velké civilizaci a je to zároveň ideální destinace pro potápěče a milovníky romantiky. Thajský Koh Tao leží asi jen 60 kilometrů jižně od známého Koh Samui, kde přistanete letadlem a za hodinu a půl cesty lodí dorazíte na Koh Tao. Ubytování na Koh Tao znamená četné pobřeží, které vytváří nespočet malých izolovaných zátok a díky tomu si zde najdete své místo, kam nikdo jiný nepřijde. Nejdelší pláží Koh Tao je pláž Sairee, která lemuje ostrov kolem dokola, na ni najdete výtečné restaurace, bary, obchůdky i půjčovny potápěčského vybavení. Je také hlavní zábavní tepnou tohoto ostrova. Koh Tao nabící celkově mnoho obchůdků a tradičních restaurací včetně restaurací s mezinárodní kuchyní. Ostrov není příliš velký, ale je zde mnoho aktivit, které během své dovolené můžete dělat. Thajský ostrov Koh Tao nabízí ty nejlepší podmínky na světě pro šnorchlování, velmi pravděpodobně zde i na vlastní kůži zažijete kontakt s rejnoky či delfíny. Hlavní dominantou ostrova Koh Tao je také fakt, že jednou ročně sem připlouvají želvy, aby do jemného písku nakladli svá vajíčka, odtud ostrov dostal přezdívku „želví ostrov“.'}
                               points={['Nabídka – ubytování Koh Tao', 'Výlety Koh Tao',
                                   'Golf Koh Tao',
                                   'Počasí Koh Tao',
                                   'Co navštívit v Koh Tao']}/>
                <PlaceCardInfo heading={'Thajsko – Koh Samet'}
                               text={'Thajsko Koh Samet, je maličký, ale nádherný ostrov, kde vám sluneční paprsky nedají pokoj, protože tento ostrov je nejslunnějším ostrovem Thajka. Ubytování na Koh Samet bude především o lenošení, opalování na pláži a kopání v krásně průzračném moři. Koh Samet je oázou klidu v Thajském zálivu a myslet zde na práci nebo jakékoliv jiné starosti by zde byl hřích. Chcete-li utéci starostem a hektickému stylu života, je pro vás thajský Koh Samet tou pravou volbou. Klidné a kouzelné pláže jsou vhodné pro milovníky přírody a klidu. Nejkrásnější pláže ostrova Koh Samet lemují celé východní pobřeží. Jsou to většinou menší zálivy uzavřené skalami. Striktní opatření vlády omezují hotelový business, a proto na ostrově Koh Samet nepotkáte obrovské komplexy hotelů, ani noční ruch. I tak si ale zamilujete příjemné plážové restaurace s výtečnou kuchyní. Pokud však zatoužíte po rušnějším prostředí, Pattaya je od Koh Samet vzdálená jen co by kamenem dohodil (70 km) a zde je akce a městský ruch na každém rohu. Ostrov Koh Samet je oblíbené víkendové místo pro samotné Thajce (obyvatelé Bangkoku či Pattayi), i oni sem jezdí za odpočinkem.'}
                               points={['Nabídka – ubytování Bangkok', 'Výlety Koh Samet',
                                   'Golf Koh Samet',
                                   'Počasí Koh Samet',
                                   'Co navštívit v Koh Samet']}/>
                <PlaceCardInfo
                    heading={'Thajsko – Koh Phangan'}
                    text={'Thajsko Koh Phangan, je krásný hornatý ostrov s hustým pralesem, zdoben vodopády a je známý především svými Full Moon Party (největší plážová party na světě), které každý měsíc za úplňku přivádějí na pláž Had Rin více než deset tisíc tanečníků. Ale i pro klienty, kteří neholdují hlučné zábavě, Koh Phangan nabízí hezké opuštěné a klidné pláže. Asi deset minut podél západního pobřeží se nachází ideální pláž pro šnorchlování – Haad Son, Ao Chao Phao, což je skvělá pláž pro koupání a Bottle beach je přístupná po stezce v džungli a je dobrá jak pro koupání tak i šnorchlování. Koh Phangan leží na severu od ostrova Koh Samui. Hotely a ubytování na Koh Phangan nabízejí na krásných, klidných plážích na severu ostrova služby té nejvyšší úrovně. Na ostrově Koh Phangan se nachází rozvinutá infrastruktura, včetně velkých obchodů.'}
                    points={['Nabídka – ubytování Koh Phangan', 'Výlety Koh Phangan',
                        'Golf Koh Phangan',
                        'Počasí Koh Phangan',
                        'Co navštívit v Koh Phangan']}/>
                <PlaceCardInfo heading={'Thajsko – Koh Chang'}
                               text={'Thajsko Koh Chang, je dramaticky členitý ostrov, jinak také přezdívaný „sloní ostrov“. Koh Chang je plný džunglí (deštný prales) a je druhý největší ostrov Thajska. Koh Chang je v dnešní době považován za „zapomenutou perlu“, protože zde turistický ruch není ještě tak velký, jako je na jiných ostrovech a přesto Koh Chang nabízí tak krásná místa, bílé písčité pláže a naprosto dostačující infrastrukturu. Na ostrově je minimum turistů a pláže tu jsou jen pro vás. Na západním pobřeží ostrova jsou větší krásné, dlouhé a písčité pláže lemované kokosovými palmami, a proto je zde většina resortů, hotelů, restaurací a zábavních center či podniků. Na východním pobřeží otrova Koh Chang je ubytovacích možností málo, spíše zde žijí místní obyvatelé. Ubytování na Koh Chang je opravdový ráj.  Zachovalá a nedotčená příroda dodává neobyčejný pocit romantiky a odměňuje návštěvníky nezapomenutelnými zážitky. Z Bangkoku do přístavu Laem Ngop je to 350 km a poté trajektem necelou hodinu na Koh Chang. Na ostrově se dá najmout taxi, ale ideální k jeho prozkoumání ostrova je pronájem motocyklu.'}
                               points={['Nabídka – ubytování Koh Chang', 'Výlety Koh Chang',
                                   'Golf Koh Chang',
                                   'Počasí Koh Chang',
                                   'Co navštívit v Koh Chang']}/>
                <PlaceCardInfo
                    heading={'Thajsko – Koh Kood'}
                    text={'Thajsko Koh Kood. Snad nikde jinde si nedopřejete tak božský klid jako na ostrově Koh Kood. Ostrov je poměrně novou turistickou destinací. Ubytování na Koh Kood znamená útěk před civilizací a za relaxací. I když je Koh Kood čtvrtý největší ostrov Thajska, turistů tu potkáte opravdu minimum. Je zde několik resortů a nízkých bungalovů, ležících jen několik metrů od čisté a bílé pláže, budovy se v tropické zeleni skoro ztrácí. Ohromný a nevkusný hotelový komplex tu ale opravdu nenajdete, vše je především z přírodních materiálů, ale vybaveno vším potřebným. Tropická příroda je zde na dosah ruky a kdo vynechá cestu k vodopádu Nam Tok Khlong Chao, jako by na ostrově Ko Kood vlastně nebyl. Povrh ostrova Koh Kood je převážně hornatý. Koh Kood na své cestě do Thajska budou obdivovat milovníci přírody, klidu či plážového lenošení, je to úplný ráj odpočinku. Pokud máte rádi dobrodružství a poznání, je tento ostrov pro vás to pravé místo.'}
                    points={['Nabídka – ubytování Koh Kood', 'Výlety Koh Kood',
                        'Golf Koh Kood',
                        'Počasí Koh Kood',
                        'Co navštívit v Koh Kood']}/>
                <PlaceCardInfo
                    heading={'Thajsko – Khao Lak'}
                    text={'Thajsko – Khao Lak je pobřeží s pásem klidných, romantických a půvabných pláží na pobřeží, s několika vesničkami, zátokami a resorty. Khao Lak leží na pobřeží Andamanského moře v jižní části Thajska. Někdy se o tomto místě hovoří jako „thajské samotě“. V této destinaci neleží hlava na hlavě, je to místo s klidnějším prostředím, ale rozhodně to neznamená, že byste se tu nudili a museli ležet jen na pláži. Nejsou zde žádné obrovské hotely, protože dle vyhlášky zde nesmí být hotel vyšší než palma. Srdcem Khao Lak je vesnička Bang La On, kde je mnoho výtečných restaurací a obchůdků. Nejživější pláží Khao Lak je Hat Nang Thong. Tato destinace je ideální pro potápěče, milovníky podmořského života či rybáře. V blízkosti jsou i golfová hřiště, sloní farma a džungle. Ubytování na Khao Lak je velice lákavá volba. Khao Lak leží asi jen 80 km od Phuketu a je snadno dostupný.\n' +
                        '\n'}
                    points={['Nabídka – ubytování Khao Lak', 'Výlety Khao Lak',
                        'Golf Khao Lak',
                        'Počasí Khao Lak',
                        'Co navštívit v Khao Lak']}/>
                <PlaceCardInfo
                    heading={'Thajsko – Hua Hin'}
                    text={'Thajko – Hua Hin je nejstarší, ale výborně zařízené plážové letovisko, se všemi možnostmi vyžití, ležící 220 Km od Bangkoku směrem na jih. Klidné prostředí Hua Hin s thajskou atmosférou je vhodné jak pro rodiny s dětmi tak i pro klienty, kteří unikají před shonem velkoměst. Obliba lázní a plážových resortů na Hua Hin stále roste, a proto se toto letovisko stalo útočištěm pro zámožné obchodníky, nejvyšší sociální vrstvu z Bangkoku a pro bohaté cizince. Princ Chulachakrabongse si zde roku 1926 postavil letní sídlo – Klai Klangwon, které je stále ještě využívané královskou rodinou. Oblast Hua Hin má hezkou pláž, která vychází z pevniny, kdy ji rozděluje kamenná masa na dvě části – rybářský přístav a krásnu 3 km dlouhou pláž s buddhistickými chrámy. Atrakcí na Hua Hin jsou i koně, kteří zde vozí turisty po pláži. Je zde golfové hřiště pro milovníky golfu. Atrakce a zajímavosti Hia Hin: Železniční stanice, hora nad zálivem s vyhlídkou Khao Takiap, palác Klai Kanwong, vodopád Pa La U, národní parky Kaeng Krachan a Khao Sam Roi Yot, chrámy v Petchaburi a další. Ubytování Hua Hin je skvělá volba.\n' +
                        '\n'} points={['Nabídka – ubytování Hua Hin', 'Výlety Hua Hin',
                    'Golf Hua Hin',
                    'Počasí Hua Hin',
                    'Co navštívit v Hua Hin']}/>
                <PlaceCardInfo
                    heading={'Thajsko – Koh Lipe'}
                    text={'Hledáte místo v Thajsku, kde zažít něco vzrušujícího anebo kde jen relaxovat? Potápění, plachtění, šnorchlování, opalování na pláži nebo masáže? Koh Lipe má krásné útesy, pláže, pobřeží a okolní přírodu stvořenou pro jakékoliv aktivity. Jde o maličký ostrov, který pěšky obejdete za několik hodin. Na ostrov Koh Lipe můžete cestovat jak sami tak s rodinou. Ubytovat se můžete v luxusním klimatizovaném hotelu nebo jen v travnaté chýši. Ostrov Koh Lipe nabízí vždy něco pro každého. Je to malý ostrov v Adang – Rawi souostroví Andamanského moře v provincii Satun jihozápadního Thajska. V blízkosti jsou malajské hranice. Koh Lipe se nachází na hranici národního mořského parku Tarutao. Ostrov Koh Lipe má tři hlavní pláže: Sunset Beach, Sunrise Beach a Pattaya Beach. Centrum ostrova Koh Lipe protíná Walking street – dlouhá ulička plná obchůdků, restaurací, barů, služeb a masáží. Ostrov se v současné době orientuje na střední a vyšší klientelu a je oblíben i mezi Thajci. Krása ostrova Koh Lipe je také v korálových útesech, kde je možnost vidět barevné korály a exotické tropické ryby. Ubytování na Koh Lipe nabízí různé možnosti.'}
                    points={['Nabídka – ubytování Koh Lipe', 'Výlety Koh Lipe',
                        'Golf Koh Lipe',
                        'Počasí Koh Lipe',
                        'Co navštívit v Koh Lipe']}/>
                <PlaceCardInfo
                    heading={'Thajsko – Koh Yao'}
                    text={'Kho Yao je souostroví v zálivu Ao Phang Nga, které tvoří asi 44 maličkých ostrůvků, kdy jsou zde ale dva hlavní – Kho Yao Yai a Kho Yao Noi. Z těchto ostrovů je to stejně daleko na ostatní ostrovy – Phuket, Krabi a Phi Phi. Na Kho Yao je absolutní klid, prázdné pláže, jednoduchý život místních Thajců a chybí zde opravdu jakékoliv vymoženosti dnešní civilizace. Místní obyvatelé zde pěstují kaučuk, kokosové ořechy a kešu ořechy, živí se také rybolovem. Protože jde o muslimské obyvatelstvo, není zde alkohol v restauracích či supermarketech (v hotelech ano). Nedotčená příroda Kho Yao  fascinuje každého návštěvníka tohoto ostrova. Na půvabných plážích jsou hotely jen vysoké kategorie a rozhodně zde nehrozí budoucí masivní turistický průmysl. Toto je místo pro ty, co hledají únik před civilizací a zároveň se za ní mohou kdykoliv snadno vydat. Ubytování na Kho Yao je jako bydlet v naprosté přírodě daleko od civilizace.'}
                    points={['Nabídka – ubytování Koh Yao', 'Výlety Koh Yao',
                        'Golf Koh Yao',
                        'Počasí Koh Yao',
                        'Co navštívit v Koh Yao']}/>
                <PlaceCardInfo
                    heading={'Thajsko – Chiang Mai'}
                    text={'Chiang Mai, nebo-li růže severu, jde o jedno z nejhezčích thajských měst, kde se nacházejí nejvýznamnější památky. Město Chiang Mai obklopuje vodní příkop. Na území starého města stojí 121 thajských chrámů (celkem je jich zde ale asi 300), nejzajímavějším chrámem je Wat Phra Singh ze 14. století. Noční bazar a víkendové trhy jsou zde pro milovníky nákupů. Pro sportovce je zde zase vyžití v trekingu po kopcích Thajska. Toto město Chiang Mai je nejdůležitějším hospodářským a kulturním centrem severního Thajska. Chiang Mai slouží jako ideální výchozí bod pro výlety po celém území severního Thajska. Městem protéká řeka Ping, jejíž břehy jsou posety vzácnou květinou a dalšími nádhernými rostlinami. Je zde spousta hotelů, restaurací i obchodů se suvenýry. Hlavní město Thajska Bangkok je vzdálené asi 700 km. Je zde i letiště Chiang Mai International Airport, na které létají vnitrostátní linky. Kromě nejznámějších náboženských chrámů (Wat Chiang Mun, Wat Chedi Luang, Wat Phra Jao Mengrai a Wat Phra Singh) byste měli navštívit také místní umělecké muzeum a muzeum hmyzu a přírodních krás. Tato destinace Chiang Mai neleží u moře, ale ubytování v Chiang Mai má své kouzlo.'}
                    points={['Nabídka – ubytování Bangkok', 'Výlety Chiang Mai',
                        'Golf Chiang Mai',
                        'Počasí Chiang Mai',
                        'Co navštívit v Chiang Mai']}/>
                <PlaceCardInfo
                    heading={'Thajsko – Chiang Rai'}
                    text={'Město Chaing Rai leží asi 180 km na sever od Chiang Mai a slouží hlavně jako základna pro výlety do okolí. Pro turisty jsou zde zajímavé chrámy, kdy minimálně dva stojí za návštěvu. V chrámu Wat Phra Kaew můžete spatřit původní domov nejslavnější památky země, Smaragdového Buddhu. V chrámu Wat Doi Chom Thong vystavěném v barmánském stylu vás kromě jiného čeká vyhlídka na řeku a na historickou část města. Domorodci jsou tu podporováni v pěstování jahod, okurek a zelí namísto opia. Na oplátku jim stát staví školy a nové silnice a nechává jim také příjmy od turistů, kteří si od nich kupují ručně vyrobené výrobky. Koho zajímají více přírodní krásy provincie Chaing Rai, ten by určitě neměl vynechat vodopád Khun Kon. Ten leží asi 30 km na jih od Chaing Rai, a je se svou výškou 70 m v provincii nejvyšší. Je také považován za nejkrásnější vodopád. Z vesnic okolo řeky Mae Kok se můžete vydat do některého výcvikového tábora slonů či na výlet do pralesa. Ubytování Chiang Rai nabízí skvělý odpočinek. Destinace Chaing Rai neleží u moře.'}
                    points={['Nabídka – ubytování Bangkok', 'Výlety Chiang Rai',
                        'Golf Chiang Rai',
                        'Počasí Chiang Rai',
                        'Co navštívit v Chiang Rai']}/>


            </div>
        </div>
        <Footer href={''} contact={''}/>
    </div>
}

export default LocalPlaceDescription;
