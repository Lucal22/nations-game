import React from 'react';
import { dateUae } from '../../_components/Clock';
import CardList from '../../ContentArea/components/CardList';

export default function DrawedCountries(props) {

    const randNumber = (dateUae.getFullYear() * (dateUae.getDate() - props.date) * (dateUae.getMonth() + 1) % 9999) + 1000;
    const randString = randNumber.toString();
    const lastNumbers = randString.slice(-2);

    return (
        <tr>
            {
                CardList.map((items) => {
                    return items.numbers.map((number, key) => {
                        return (number === lastNumbers ?
                            <td key={key}>
                                {items.country}
                            </td>

                            : null)
                    })
                })
            }
        </tr>
    )
}
