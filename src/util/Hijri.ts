export type hijriCorrection = 2 | 1 | 0 | -1 | -2;

const islamicMonthNames = [
  "Muharram",
  "Safar",
  "Rabi'ul Awwal",
  "Rabi'ul Akhir",
  "Jumadal Ula",
  "Jumadal Akhira",
  "Rajab",
  "Sha'ban",
  "Ramadan",
  "Shawwal",
  "Dhul Qa'ada",
  "Dhul Hijja",
];

// const gmod = (n: number, m: number): number => ((n % m) + m) % m;

/**
 * reference https://www.al-habib.info/islamic-calendar/hijricalendartext.htm
 * performs calculations and returns hijri date for given gregorian date
 * @param gregorianDate new Date(year,monthIndex,day) for gregorian calendar
 * @param hijriCorrection adjustments in hijir calendar if any
 * @return hijri day, hijri monthIndex i.e 0 for first month ,11 for last, hijri year
 */
export const getHijriDate = (
  gregorianDate: Date,
  hijriCorrection: hijriCorrection
): string => {
  if (hijriCorrection) {
    const adjustmili = 1000 * 60 * 60 * 24 * hijriCorrection;
    const gregorianmili = gregorianDate.getTime() + adjustmili;
    gregorianDate = new Date(gregorianmili);
  }
  let day = gregorianDate.getDate();
  let month = gregorianDate.getMonth();
  let year = gregorianDate.getFullYear();
  let m = month + 1;
  let y = year;
  if (m < 3) {
    y -= 1;
    m += 12;
  }

  let a = Math.floor(y / 100);
  let b = 2 - a + Math.floor(a / 4);
  if (y < 1583) b = 0;
  if (y == 1582) {
    if (m > 10) b = -10;
    if (m == 10) {
      b = 0;
      if (day > 4) b = -10;
    }
  }

  const jd =
    Math.floor(365.25 * (y + 4716)) +
    Math.floor(30.6001 * (m + 1)) +
    day +
    b -
    1524;

  b = 0;
  if (jd > 2299160) {
    a = Math.floor((jd - 1867216.25) / 36524.25);
    b = 1 + a - Math.floor(a / 4);
  }
  const bb = jd + b + 1524;
  let cc = Math.floor((bb - 122.1) / 365.25);
  const dd = Math.floor(365.25 * cc);
  const ee = Math.floor((bb - dd) / 30.6001);
  day = bb - dd - Math.floor(30.6001 * ee);
  month = ee - 1;
  if (ee > 13) {
    cc += 1;
    month = ee - 13;
  }
  year = cc - 4716;

  const iyear = 10631 / 30;
  const epochastro = 1948084;

  const shift1 = 8.01 / 60;

  let z = jd - epochastro;
  const cyc = Math.floor(z / 10631);
  z = z - 10631 * cyc;
  const j = Math.floor((z - shift1) / iyear);
  const iy = 30 * cyc + j;
  z = z - Math.floor(j * iyear + shift1);
  let im = Math.floor((z + 28.5001) / 29.5);
  if (im == 13) im = 12;
  const id = z - Math.floor(29.5001 * im - 29);

  return `${id} ${islamicMonthNames[im - 1]} ${iy} AH`;
};

export default getHijriDate;
