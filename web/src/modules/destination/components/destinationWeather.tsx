import React from 'react';
import WeatherCard from "./weatherCard";
import WaterCard from "./waterCard";

const DestinationWeather: React.FC = () => {


    return (
        <div className={'row mt-5 mb-5'}>

            <h2 className={'font-blue'}>Počasí</h2>
                <div className={'row'}>
                    <div className={'col-lg-4 col-sm-12 mt-3'}>

                        <h5>Aktuální počasí</h5>
                        <div className={'row mt-3'}>
                            <div className={'col-lg-6 col-sm-12'}>
                                <WeatherCard heading={'Teplota'}/>
                            </div>
                            <div className={'col-lg-6 col-sm-12'}>
                                <WaterCard/>
                            </div>
                        </div>
                    </div>
                    <div className={'col-lg-8 col-sm-12 mt-3'}>
                        <h5>Předpověď na další dny</h5>
                        <div className={'row mt-3'}>
                            <div className={'col-lg-3 col-sm-12'}>
                                <WeatherCard heading={'Zítra'}/>
                            </div>
                            <div className={'col-lg-3 col-sm-12'}>
                                <WeatherCard heading={'Středa'}/>
                            </div>
                            <div className={'col-lg-3 col-sm-12'}>
                                <WeatherCard heading={'Čtvrtek'}/>
                            </div>
                            <div className={'col-lg-3 col-sm-12'}>
                                <WeatherCard heading={'Pátek'}/>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    )
}
export default DestinationWeather;
