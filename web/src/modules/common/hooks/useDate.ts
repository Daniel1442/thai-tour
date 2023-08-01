import {useState} from 'react';
import {initDate as init} from '../helper/dateHelper';

export const useDate = (value: Date | undefined = undefined) => {

    const initDate = () => {

        return init();
    }

    const [date, setDate] = useState<Date>(value ? value : initDate());

    return {date, setDate, initDate};
}