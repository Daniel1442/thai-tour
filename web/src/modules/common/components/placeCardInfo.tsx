import React from "react";

interface ComponentProps {
    heading: string
    text: string
    points: string[]
}

const PlaceCardInfo: React.FC<ComponentProps> = ({heading, text, points}) => {
    return (
        <div className={'row m-3'}>
            <div className={'col-12'}>
                <div className={"mt-3 col-12 d-flex justify-content-start"}><h5>{heading}</h5>
                </div>
                <div className={"col-12 d-flex justify-content-start"}>
                    <p className={'mb-0'}>{text}</p></div>
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
                                         backgroundColor: '#ffffff',
                                         borderRadius: '4px'
                                     }}>
                                    <div
                                        className={'col-lg-12 col-sm-12 ps-0 d-flex justify-content-start'}>
                                        <div className=' entry-content'>
                                            {points.map((element, index) => {
                                                return <p>&#x2714; {element}</p>

                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PlaceCardInfo