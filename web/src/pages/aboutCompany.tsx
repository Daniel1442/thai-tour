import React, {useEffect} from "react";
import Card from "../modules/common/components/card";
import SidebarForInfo from "../modules/catalog/components/sidebarForInfo";

const AboutCompany = () => {

    let width = typeof window !== 'undefined' && window.innerWidth;
    useEffect(() => {
        width = typeof window !== 'undefined' && window.innerWidth;
    }, [width]);

    return <div className={'container pt-5'}>
        <div className={'row'}>
            <div className={'col-lg-9 col-sm-12'}>
                <h3 className={'font-black mb-5'}>Portfolio služeb ThaiTour</h3>
                <div className={'row'}>

                    <Card heading={'Vedení společnosti'} text={'Zajímá vás, kdo stojí v čele největší internetové cestovní agentury v České republice? Seznamte se s členy představenstva a vrcholovým vedením Invia.'} link={'#'}
                          image={"data:image/png;base64,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"}/>
                    <Card heading={'Sekce pro investory'} text={'Zajímají vás struktura, ekonomické výsledky nebo jakékoli důležité dokumenty společnosti Invia? Všechny informace naleznete v přehledné formě zde.'} link={'#'}
                          image={"data:image/png;base64,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"}/>
                    <Card heading={'Portfolio služeb'} text={'Invia, to není jen největší online prodejce zájezdů v České republice. Prohlédněte si široké spektrum produktů a služeb jak pro cestovatele, tak pro majitele webových stránek či cestovních agentur.'} link={'#'}
                          image={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAACBCAYAAAAL1bxGAAAAAXNSR0IArs4c6QAACdhJREFUeF7tnU2PFEUYgAs3CowbDLoJl108wpUTIXv2zAGJ/Asx4WeQiP8Cgx48e96gJ65yhF1NTBaIBmcR3NW8Y3qpbXqmq96uj66uZy6QbH289bz1TFdX93Sf+u3g8F/DBwIQqIbAKaSvJtcMFAILAkjPRIBAZQSQvrKEM1wIID1zAAKVEUD6yhLOcCGA9MwBCFRGAOkrSzjDhQDSMwcgUBkBpK8s4QwXAkjPHIBAZQSQvrKEM1wIID1zAAKVEUD6yhLOcCGA9MwBCFRGAOkrSzjDhQDSMwcgUBkBpK8s4QwXAkjPHIBAZQSQvrKEM1wIID1zAAKVEUD6yhLOcCGA9MwBCFRGAOkrSzjDhQDSMweWEtibH5rvnh6YvYNDszc/Mrtz+ffQbM7WFnW2Zmtmc/ae2Ty7Zq5unDbXNt6HZgEEkL6AJKUMsRH968d/eXcrXwYi/o2tGV8A3vTSVUD6dKxH3ZPIfu/xS/Pg6asgcd68eMbcvrR+vCoI0iiNBCGA9EEwlt3IvV9emq4juxy5b26dWQxOlu9bspSfrS2W+PLZnR8t/v/zs787vyya+rcvr5cNaGLRI/3EEuozHBH2zqM/zcP91yeqXdv4wHx5ad1riS5tyZfA97vzd74ARP5vt89z1PdJTsSySB8R7pibfrj/xtzaeX4iRJHz7pWPvGTvGmPXl0motsfMtJTYkL6UTAWMs0v4ry59aEIvw9unDYgfMIkDmkL6AfBKrCpH4e0f90+Efn/748FH92Us2l8wLPXzzxqkz5+DpBHc2nlx4hw+pvDNwNpfNCL+zmcbScdNZ28JIH1Fs+HOoz9ObLL1CS+X76RO16e5QUeuy1/95LSRS3SrPu22pLzsH/BJTwDp0zPP0mP7aOtyDv/pD787xyo7/nevnFu5Q2+f43N+74w2eEGkD450nA3ay3oR9P72+d5AfaSXxlzO1zVx9AZKAS8CSO+Fq8zC7c20vmV9M0pb+ifXL5wYfHODjtybb9/Y0/eFoo2lTPLjjBrpx5mXoFHZ5/J9Utodr5LeLtcWWc7VV53j20d7zu2DptqpMaR3wlR2IblE1xyZXY/yMmJX6aWszxeL/SXBTn76uYX06Zkn7bG9a95epq8Kxkd6H5Hbm4o+X0RJ4U20M6SfaGKbYdlHYN+ltI/0tsguR297ie9yJWHiaUo6PKRPijt9Z7b0fefa7eh8pLeP9C77Br7l05Obbo9IP93cLkZmH1F9l9E+0tvX4F1WFEifb+IhfT72SXq2N/Hk1tfmTjqXzl2l11yG8z0dcImXMm4EkN6NU7GlXMXtGmBf3a5Ha7ks7aUvpM83pZA+H/skPfeJ67p77xKsyx15djtDYnOJhzLdBJB+4jMj1PK+D5PrEb5phyN9H9F4f0f6eGxH0XKojbyuwdjP0PN9AAcbefmmB9LnY5+k51SX7HwHY9805LLb79s+5ZcTQPqJzw77UprvEjzmOfeQm4YmnrLow0P66IjzdjDk3Dmm9EP2GvISLb93pC8/h70j0J7Xx5J+yO8BegdLgV4CSN+LqPwC2iV+LOn5aW3eOYX0efkn6V37q7YY0mvu3ksCqaJOkH6kyRY5vnn88p23z7iE2/X8Ofvo6vIrOOknhvQc5V0yGLcM0sflq2q969n0vg21f1E39MGYPr/DXxZr++UXvr8F8GVA+W4CSD/CmdF+VLVviMuO5Ha7UkbeKrvqsVYi6YPdV73lXOJrL+u5Nu9CLU4ZpI/DdVCr9rLa9+ewqzpuv2Mu1WOo26sM3/sFBsGk8jsEkH5kk8K+nBVDDhHwi50Xx8/Mi/06aV5rNbIJZoxB+pHlxN7o8n3SjetQul4zJe+h971/vq+/rvfeh1y59PXP3zmnL2IOxNgx7xp4+4gvZUIt93lV9binGkf6EeUn9f3oXeILDtlku7E1836TbZfszZcJL6wcz0RD+vHkYvEKac3z6YcMoevpN017cuRvXlAp/9+avbdYDTQx7s6PFv//df7Pibfc2PHwpNsh2YlTF+njcPVuNfYGXl9Aq+Tvq9v1d5cXWmrapc5wAkg/nGGQFlJs4LkEKvLfW9wJ+Ob4iO5Sr1nGy4bg5xfPej2A07V9yoUhgPRhOA5uJdUGnk+gzdF/7+DQ7M2PzO5c/j08FnprtmY2Zcl/ds1c3TjtvQfgEwtlwxFA+nAs1S3xFBk1OioqCCC9AlroKjk28EKPgfbKIYD0mXOVewMv8/DpPgMBpM8A3e7S3sDLHIpX9/9fwlszd6+cY9POi1z+wkifMQdDf02XMfTjrn1fcDGGmGuPAekzzYApCN+gQ/xMk0jZLdIrwQ2p1ha+xN+Wt39Mg/hDZkTaukiflreZgvANMsRPPHkCdYf0gUC6NDMl4RHfJePjLIP0ifLSPiqWuKRfhqo9thgP/0iUpiq6QfpEabZvwJmS8MuO+DwsI9HEUnSD9ApomipjvLdeM45VdWI92y90nLW3h/SJZgDSJwJNN70EkL4XUZgCSB+GI60MJ4D0wxk6tYD0TpgolIAA0ieALF3Y0vt2GeqBlT792huPPvWasmzkaailqYP0aTgPkl5CjPU47K7ht18lrUGE9BpqaeogfRrOg6RPfYvrsqfa+qBCeh9aacsifSLenNMnAk03vQSQvhdRmAJIH4YjrQwngPTDGTq1gPROmCiUgADSJ4AsXQzdDU8UZrBuePd8MJTBG0L64Ei7G5zSQzP6kMnGI6+x6qOU7+9In4h96DfIJArbqxuRXT5yeVFeh8VnnASQPkNeXM7vXcrEDt1+aOeT6xc6u+NHNrGzEL59pA/PtLdFF6FdyvR2NLAA0g8EONLqSJ8hMS5Cu5SJHTrSxyacp32kz8Dddyd/2dI6dui+m4/s2MfOSJj2kT4MR69WfGTK+ZQdeXPtrZ3nTmNjx94J0ygKIX2GNLjs5ItE8trn25fXM0T4tkt5/t1Pz96Yh/uvO+Ngxz5relSdI70KG5UgUC4BpC83d0QOARUBpFdhoxIEyiWA9OXmjsghoCKA9CpsVIJAuQSQvtzcETkEVASQXoWNShAolwDSl5s7IoeAigDSq7BRCQLlEkD6cnNH5BBQEUB6FTYqQaBcAkhfbu6IHAIqAkivwkYlCJRLAOnLzR2RQ0BFAOlV2KgEgXIJIH25uSNyCKgIIL0KG5UgUC4BpC83d0QOARUBpFdhoxIEyiWA9OXmjsghoCKA9CpsVIJAuQSQvtzcETkEVASQXoWNShAolwDSl5s7IoeAigDSq7BRCQLlEkD6cnNH5BBQEUB6FTYqQaBcAkhfbu6IHAIqAkivwkYlCJRLAOnLzR2RQ0BFAOlV2KgEgXIJIH25uSNyCKgIIL0KG5UgUC6B/wBwy/YmaHvdSwAAAABJRU5ErkJggg=="}/>
                    <Card heading={'Získaná ocenění'} text={'Invia se může pochlubit řadou prestižních ocenění a diplomů, které získávala po celou dobu své působnosti v České republice.'} link={'#'}
                          image={"data:image/png;base64,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"}/>
                    <Card heading={'Klienti ThaiTour'} text={'Kdo jsou naši klienti? Jak jsou spokojeni s našimi zaměstnanci a s našimi službami? Přečtěte si, co o nás říkají naši klienti, kteří již v minulosti využili našich služeb.'} link={'#'}
                          image={"data:image/png;base64,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"}/>
                </div>
            </div>
            <div className={'col-lg-3 col-sm-12'}>
                <SidebarForInfo active={'ABOUT_COMPANY'}/>
            </div>
        </div>
    </div>

}

export default AboutCompany;
