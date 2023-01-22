type compulsoryPrayerTimes = {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
};

type sunnahPrayerTimes = {
  midnight: string;
  lastThirdOfTheNight: string;
};

type prayerName =
  | "none"
  | "fajr"
  | "sunrise"
  | "dhuhr"
  | "asr"
  | "maghrib"
  | "isha";

export { compulsoryPrayerTimes, sunnahPrayerTimes, prayerName };
