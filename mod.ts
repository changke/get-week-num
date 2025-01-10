/**
 * Calculates the ISO week number for a given date.
 *
 * The ISO week date system is a leap week calendar system that is part of the ISO 8601 date and time standard.
 * ISO 8601 assigns numbers to each week of the year. A week starts on Monday and ends on Sunday.
 * The first week of the year is the week that contains the first Thursday of the year.
 *
 * Source: https://weeknumber.net/how-to/javascript
 *
 * @example
 * ```typescript
 * const currentWeekNum = getWeekNum(); // default is current date
 * const weekNum = getWeekNum(new Date('2023-06-01')); // 22, get the week number for a specific date
 * ```
 *
 * @param {Date=} date - The date object for which to calculate the week number.
 * @returns {number} The ISO week number of the given date.
 */
const getWeekNum = (date: Date = new Date()): number => {
  const d = new Date(date.getTime());
  d.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
  // January 4 is always in week 1.
  const week1 = new Date(d.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round(((d.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};

export default getWeekNum;
export {getWeekNum};
