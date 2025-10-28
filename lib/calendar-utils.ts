import {
  addMonths,
  endOfMonth,
  isBefore,
  parseISO,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";

export function getSurroundingMonthsPeriod(monthRange = 3) {
  const today = new Date();
  const startDate = startOfMonth(subMonths(today, monthRange));
  const endDate = endOfMonth(addMonths(today, monthRange));
  const firstSunday = startOfWeek(startDate, { weekStartsOn: 0 });

  return { startDate, endDate, firstSunday };
}

export function isPastDate(date: string) {
  const today = startOfDay(new Date());
  const sessionDate = startOfDay(parseISO(date));
  return isBefore(sessionDate, today);
}
