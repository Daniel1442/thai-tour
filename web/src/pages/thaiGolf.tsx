import React, {useEffect} from "react";
import PlaceTripCard from "../modules/trip/components/cityList/placeTripCard";
import GolfParagraph from "../modules/thaiGolf/components/cityList/golfParagraphWithImage";
import {Alert} from "react-bootstrap";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {TripRow} from "../modules/homepage/models";

const ThaiGolf = () => {

    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    return <div className={'container'}>
        <h1 className={'mt-5'}>
            Golf v exotickém Thajsku</h1>
        <div className={'row'}>
            <div className={'col-12'}>
                <LazyLoadImage  src={'http://www.thaitour.cz/wp-content/uploads/2013/10/golf.jpg'} width={'100%'}/>
            </div>
            <div className={'col-12'}>
                <h3 className={'mt-5 mb-3'}>Golfové destinace v Thajsku</h3>
            </div>
            <PlaceTripCard trip={{} as TripRow}/>
            <PlaceTripCard trip={{} as TripRow}/>
            <PlaceTripCard trip={{} as TripRow}/>
            <PlaceTripCard trip={{} as TripRow}/>
            <PlaceTripCard trip={{} as TripRow}/>
            <PlaceTripCard trip={{} as TripRow}/>
            <PlaceTripCard trip={{} as TripRow}/>
            <PlaceTripCard trip={{} as TripRow}/>

        </div>
        <GolfParagraph
            paragraph={'Thajsko je fascinující turistická destinace a v současné době si získalo výbornou pověst k prožití exotické dovolené s golfem, a to díky svým skvělým a moderním golfovým hřištím, thajské pohostinnosti, nadstandartním službám, kulturou této země či díky tropickému podnebí, díky kterému zde můžete hrát golf po celý rok!\n' +
                '\n' +
                'Turisté exotické Thajsko vyhledávají již několik desetiletí, ať už kvůli dovolené v naprostém ráji nebo kvůli jedinečnému golfovému zážitku a jejich počet stále roste.\n' +
                '\n' +
                'Světová organizace World Golf Travel Agents Association, která se zabývá golfovou turistikou, vyhlásila Thajsko jako nejlepší destinaci na světě pro exotickou dovolenou s golfem. Pomohla tomu jistě široká nabídka skvělých golfových hřišť po celém Thajsku, které každým rokem a celoročně přitahují mnoho golfistů z celého světa.'}
            img={'http://www.thaitour.cz/wp-content/uploads/2013/10/Golf1-230x200.jpg'}
            heading={'Dovolená v Thajsku s golfem'}/>
        <GolfParagraph
            paragraph={'Thajsko nabízí rozličný golf, a to hlavně díky své rozmanité krajině, jsou zde roviny, ale také nádherné hory. Hledáte-li golfové hřiště v horském prostředí, u plážového resortu či v okolí měst Bangkok a Pattaya, všude najdete hřiště, která budou splňovat vaše nejvyšší nároky.\n' +
                '\n' +
                'V Thajsku se pravidelně organizují i světové golfové turnaje. Např. na Phuketu na hřišti Blue Canyon, v Pattayi zase na Siam Country Club aj. Hráči jako Tiger Woods nebo Ernie Els na těchto světových turnajích nechybějí.\n' +
                '\n' +
                'Thajsko je v mnoha ohledech kvalitnější golfovou destinací, než je mnoho evropských zemí, které nabízejí golf. V Thajsku si navíc golf zahrajete jen za zlomek ceny. Místní hřiště nejsou přeplněná, ať hrajete v populárním letovisku přímo u moře v Pattayi či na jednom z tropických ostrovů Phuket či Koh Samui.'}
            img={'http://www.thaitour.cz/wp-content/uploads/golf_pattaya-230x200.jpg'}
            heading={'Thajsko vám splní golfový sen'}/>
        <GolfParagraph
            paragraph={'Poplatky za „green fee“ a asistentku – cadie, jsou opravdu nízké. Cadie vám bude ochotně pomáhat po celou dobu hry s vaším golfovým náčiním, rychlou orientací po hřišti, hledáním míčků, počítáním skóre, uhrabáváním bunkrů, prostě za vás bude dělat vše nepříjemné a ještě se na vás bude po celou dobu mile usmívat. Dokonce vám namasíruje i záda pokud právě čekáte na svou hru. Ve všední den se v Thajsku dá hrát již od 1800,- Kč.\n' +
                '\n' +
                'golfMnoho golfových hřišť v Thajsku nevyžaduje žádnou registraci od hráčů, kteří si přijdou zahrát. Není problém si zde golf třeba jen vyzkoušet či se ho tu naučit hrát. V Thajsku vás to bude stát zlomek toho, co byste zaplatili jinde ve světě. Golfové školy jsou v Thajsku skoro na každém golfovém hřišti. Učitelé jsou zde kvalifikovaní a škola má většinou stanovený výukový program. Instruktoři mluví většinou kromě thajštiny také anglicky nebo německy. Učitelé své žáky učí čestnosti, sebevědomí, respektu, vytrvalosti, sportovnímu duchu a vybranému chování, což jsou důležité životní hodnoty i pro běžný život.'}
            img={'http://www.thaitour.cz/wp-content/uploads/golf-230x200.jpg'} heading={'Poplatky'}/>
        <div className={'container'}>
            <Alert variant={'danger'}>
                Jakmile si zvyknete na thajský způsob golfu, tak už nebudete chtít hrát nikde jinde!
            </Alert>
            <Alert variant={'success '}>
                Golf v Thajském ráji je srovnatelný s jakoukoliv jinou golfovou destinací světa. V Thajsku ale zaplatíte
                jen zlomek ceny a užijete si skvělý zážitek, at jste profesionální golfista či začátečník.
            </Alert>
            <Alert variant={'success '}>
                Pokud máte zájem o golf v Thajsku, tak nás prosím kontaktujte. Můžeme Vám zajistit ubytování kdekoliv v
                Thajsku, a to jakéhokoliv typu a úrovně. Pobyt v Thajsku pro Vás bude jedním z největších zážitků Vašeho
                života. Thajská pohostinnost, skvělá vybavenost hotelů a vysoká kvalita služeb Vás ohromí.
            </Alert>
        </div>
    </div>
}

export default ThaiGolf;
