export function dateFormate(dates) {
  const date = new Date(dates);

  return `${date?.getFullYear()}-${date?.getMonth() + 1}-${date?.getDate()}`;
}

export function getDateMinusDays(date, days) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() - days);
  return newDate;
}
