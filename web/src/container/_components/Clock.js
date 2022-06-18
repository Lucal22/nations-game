//Using Dubai timezone

function changeTimeZone(date, timeZone) {
  return new Date(
    date.toLocaleString('en-US', {
      timeZone,
    }),
  );
}
export const dateUae = changeTimeZone(new Date(), 'Asia/Dubai');

export const dayUae = dateUae.getDate();
export const monthUae = dateUae.getMonth() + 1;
export const FullYearUae = dateUae.getFullYear();