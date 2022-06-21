import { dateUae } from '../../_components/Clock';


function DrawNumber() {
    const randNumber = (dateUae.getFullYear() * dateUae.getDate() * (dateUae.getMonth() + 1) % 9999) + 1000;
    const randString = randNumber.toString();
    return (randString);
}
export const rand = DrawNumber()
