import { date } from '../../_components/Clock'

function DrawNumber() {
    const randNumber = (date.getFullYear() * date.getDate() * (date.getMonth() + 1)) % 9999;
    const randString = randNumber.toString();
    const lastNumbers = randString.slice(2);
    return (lastNumbers);
}
export const rand = DrawNumber()


// const randNumber = Math.round(min + (Math.random() * (max - min)));
// const randString = randNumber.toString();
// const lastNumbers = randString.slice(2);
// return(lastNumbers);

// await api.post('/draws',{
        //     draw: randString,
        //     day: ''
        // }) 