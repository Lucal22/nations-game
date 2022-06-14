//Using Dubai timezone

function changeTimeZone(date, timeZone) {
    return new Date(
      date.toLocaleString('en-US', {
        timeZone,
      }),
    );
  }
  export const date = changeTimeZone(new Date(), 'Asia/Dubai');
  
  export const day = date.getDate();
  export const month = date.getMonth() + 1;
  export const FullYear = date.getFullYear();