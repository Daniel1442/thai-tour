import React, {useContext, useEffect} from "react";
import PlaceTripInfo from "../modules/trip/components/cityList/placeTripInfo";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useRouter} from "next/router";
import {TripContent, TripContext} from "../context/tripContext";
import TripCitiesCard from "../modules/trip/components/cityList/tripCitiesCard";
import {CityRow} from "../modules/homepage/models";

const TripCatalog = () => {


    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    const router = useRouter()

    const {
        fetchCity,
        cities
    } = useContext(TripContext) as TripContent;

    useEffect(() => {
        fetchCity()
    }, [router]);

    return (<div className={'container'}>
        <h1 className={'mt-5'}>Výlety & aktivity v Thajsku</h1>
        <div className={'row'}>
            <div className={'col-12'}>
                <h3 className={'mt-5 mb-3'}>Destinace pro výlety v Thajsku</h3>
            </div>

            {cities && cities.map((city) => { return <TripCitiesCard city={city}/>})}
            <TripCitiesCard city={{id: "", icon:"http://www.thaitour.cz/wp-content/themes/twentyten/images/vylet_vse.jpg", name: "Zobrazit vše"} as CityRow}/>
        </div>
        <div className={'row'}>
            <div className={'col-lg-4 col-sm-0'}>
                <LazyLoadImage  src={'http://www.thaitour.cz/wp-content/uploads/2013/10/vylety.jpg'}/>
            </div>
            <div className={'col-lg-8 col-sm-12'}>
                <PlaceTripInfo heading={'Bangkok'}
                               paragraph={'Hlavní město Thajska Bangkok, neboli město andělů, je místem kontrastů a přeměn. Na jedné straně vás uchvátí svými historickými památkami, na druhé straně supermoderní architekturou. Staré královské město je historickým srdcem Bangkoku s nádhernými originálními historickými stavbami, chrámy a paláci (Wat Phra Kaew, Wat Pho, Wat Mahathat, Wat Arun, atd.). Čínská čtvrť s úzkými uličkami plná nejrůznějších krámků je nejrušnější a nejbarevnější částí Bangkoku. Toto nádherné město má nekonečně možností pro vaše vyžití.'}/>
                <PlaceTripInfo heading={'Pattaya'}
                               paragraph={'Je nejznámější thajské přímořské letovisko na břehu Siamského zálivu, vzdálené dvě hodiny jízdy od Bangkoku. Nabízí dlouhé pláže s jemným pískem, vodní sporty, levné nákupy i občerstvení a masáže v nepřeberném množství. Můžete zde podniknout nespočet výletů za exotickými zajímavostmi v okolí. Pattaya usíná až časně nad ránem. Na pulzující noční život v Pattayi budete ještě dlouho vzpomínat.'}/>
                <PlaceTripInfo heading={'Mimosa Pattaya'}
                               paragraph={'Městečko lásky Mimosa je mini městečko zajímavé mixem různých typů architektur (holandské, francouzské, italské, britské) a  je plné různých obchůdků a restaurací s velmi příjemnou a relaxační atmosférou. Nesmíte si zde nechat ujít populární thajskou travesti show kde účinkující osoby jsou naprosto dokonalé a půvabné v nádherných kostýmech.'}/>
                <PlaceTripInfo heading={'Silverlake'}
                               paragraph={'Jedním z nejpopulárnějších míst k navštívení v okolí města Pattaya je jediné vinařství ve východním Thajsku nazývané Silveralke. Zde můžete strávit velice příjemné odpoledne. Budete se kochat krásným výhledem na úžasně upravenou krajinu a stříbrné jezero vás oslní svou krásou. Zlatý Buddha na skále je samotným uměleckým dílem. V místní luxusní restauraci neodoláte skvělé kuchyni a zajisté ochutnáte i pár skleniček lahodného vína z thajského místního vinařství.'}/>
                <PlaceTripInfo heading={'Nong Nooch tropická zahrada'}
                               paragraph={'Famózní tropická zahrada Nong Nooch je jednou z největších a nejkrásnějších botanických zahrad v Asii. Zahrada je plná exotických rostlin, kaktusů a orchidejí. Uvádí se zde úžasná představení thajských tradičních tanců z celého Thajska, thajského bojového umění, sloní show a dokonce si zde můžete pohladit tygra, zhoupnout se slonovi na chobotu nebo se na něm nechat povozit.'}/>
                <PlaceTripInfo heading={'Plovoucí trhy (Damnoen Saduak)'}
                               paragraph={'Dříve byly plovoucí trhy běžnou součástí thajského života, ale dnes jsou zábavou hlavně pro turisty a chaotickým zážitkem pro všechny smysly. Projeďte se na loďce po kanálech a navštivte proslulé plovoucí trhy, kde obchodníci nabízejí své zboží na malých loďkách a připravují různé kulinářské speciality, které musíte ochutnat. Plovoucí trhy jsou jak kousek od města Pattaya, tak i ve městě Bangkok, kde jsou ty opravdové a velké, kde je však potřeba si ráno přivstat.'}/>
                <PlaceTripInfo heading={'Ostrov opic'}
                               paragraph={'Chcete-li si užít legraci a jste milovníky zvířat, nesmíte vynechat návštěvu ostrova opic. Můžete se rozhodnout, zda výlet zrealizujete na místní bárce sami s domorodci jako dobrodružný výlet nebo formou pohodlného výletu s jinými turisty na lodi. Nezapomeňte s sebou vzít banány pro krmení opic, je jich tam opravdu hodně, takže vezměte pořádné zásoby.'}/>
                <PlaceTripInfo heading={'Jízda na slonech'}
                               paragraph={'Nasedněte na hřbet slona z nástupního ostrůvku a užívejte si krásnou procházku přírodou mezi loukami a pralesem. Je to doslova živý „offroad“, kdy z výšky hřbetu slona uvidíte, jak slon snadno překonává bahno a další překážky. Slonovi sedí za krkem Mahúd, řidič, který slona celou dobu vede a ovládá. Za povezení a jako pochvalu, pak slona nakrmte banány.'}/>
                <PlaceTripInfo heading={'Delfíní show'}
                               paragraph={'Show s delfíny je bezpochyby skvělá zábava jak pro dospělé tak pro děti. S nadšením budete sledovat aportující delfíny ochotné zdravit diváky na zadních, nebo to, jak se celým tělem vynořují a vyskakuji nad hladinu a na plošinu. Jejich cvičitelé s nimi ve vodě provádí opravdu filmové kousky. Budete-li toužit po kontaktu s delfíny, zde si s nimi budete moci zaplavat a vyfotit se.'}/>
                <PlaceTripInfo heading={'Krokodýlí farma'}
                               paragraph={'Milion Years Stone Park je krokodýlí farma na rozsáhlém území, která zahrnuje skalní zahrady, řadu botanicky vzácných rostlin a nádherné parky. Za pozornost stojí miliony let staré zkameněliny rostlin, 200 let staré bonsaje v thajském stylu, nádrže s krokodýly a řada zvířat. Z dech beroucí krokodýlí show budete mít husí kůži a můžete si zde dokonce zkusit krmit krokodýly.'}/>
                <PlaceTripInfo heading={'Tygří ZOO'}
                               paragraph={'Za desítkami tygrů, kteří žijí s mnichy v klášteře, přijíždějí v Thajsku denně stovky turistů. Snad každého láká si v životě alespoň jedinkrát takového tygra pohladit a zde se vám může tento sen splnit a zažít tak i nezapomenutelný adrenalinový zážitek. Působivá je bezpochyby i samotná tygří show.'}/>
                <PlaceTripInfo heading={'Thajský box'}
                               paragraph={'Muay Thai, neboli thajský box si zde získal obrovskou popularitu. Původně se souboje odehrávaly na tržištích a postupně se přesunuly do ringů. Je to jeden z nejtvrdších bojových sportů, kde jsou povoleny údery lokty a koleny a nepoužívají se skoro žádné chrániče. Zápas se začíná tradičním ceremoniálem – „tancomotlidbou“ a dělá tak ze zápasu opravdu nezapomenutelný zážitek.'}/>
                <PlaceTripInfo heading={'Aquapark'}
                               paragraph={'Thajsko nabízí hned několik aquaparků (Bangkok, Pattaya, Pukhet, atd.), kde se můžete vyblbnout jak vy, tak i vaše děti. Povozit se můžete na tobogánech, někdy i opravdu adrenalinových, můžete se opalovat a kdykoliv zakousnout něco dobrého, to je to, jak lze strávit den plný zábavy a her.'}/>
                <PlaceTripInfo heading={'Podmořský svět'}
                               paragraph={'V Pattayi naleznete jedno z největších, nejdelších a nejkrásnějších mořských akvárií v celé Asii. Při procházce 100 m dlouhým, 4 m vysokým a 6,4 cm silným akrylovým tunelem můžete obdivovat více než 4500 mořských živočichů. Toto místo nadchne nejenom dospělé, ale pro děti to bude naprostá pohádka mezi rybami všeho druhu.'}/>
                <PlaceTripInfo heading={'Kitebording'}
                               paragraph={'Kiting je relativně novým adrenalinovým vodním sportem a v Thajsku je hned několik vhodných oblastí, kde si můžete zakitovat naplno, je to např.: Pattaya, Hua Hin, Chumphon, Phuket nebo Ko Samui. Všechny tyto oblasti mají vhodné povětrnostní podmínky, jen si je potřeba někde dávat pozor na silný odliv a odkryté korály. Nechybí zde ani půjčovny vybavení a výukové kurzy pro ty, kteří se rozhodli s tímto netradičním sportem právě začít.'}/>
                <PlaceTripInfo heading={'Windsurfing & Surfing'}
                               paragraph={'Thajsko nabízí celou řadu možností v oblasti vodních sportů, je ideální jak pro windsurfing tak surfing. V Thajsku jsou vhodné povětrnostní podmínky a vlny, pro tyto sporty. Cenově jsou zde tyto sporty také mnohem výhodnější, než kdekoliv jinde. Chcete-li se prohánět na mořských hladinách a užít si tento vzrušující sport naplno, Thajsko je to pravé místo. Je zde mnoho půjčoven a výukových škol, kde se vám budou rádi věnovat v případě, že s tímto sportem právě začínáte.'}/>
                <PlaceTripInfo heading={'Golf'}
                               paragraph={'V Thajsku je golf velice populárním sportem. Jsou zde stovky golfových hřišť světové kvality, navržené nejlepšími designéry světa a jen zlomkové ceny v porovnání s ostatními světovými hřišti. Golf je zde skvělým zážitkem pro golfisty všech úrovní. Světová organizace World Golf Travel Agents Association, která se zabývá golfovou turistikou, vyhlásila Thajsko jako nejlepší destinaci na světě pro exotickou dovolenou s golfem.'}/>
                <PlaceTripInfo heading={''} paragraph={'a mnoho dalšího…'}/>

            </div>

        </div>
    </div>)
}

export default TripCatalog;
