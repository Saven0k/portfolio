export function getAge(birthDate: string, now = new Date()) {
  const [birthYear, birthMonth, birthDay] = birthDate.split("-").map(Number);
  const { year, month, day } = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Moscow",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }).formatToParts(now).map(({ type, value }) => [type, value])
  );
  const birthdayAhead = Number(month) < birthMonth ||
    (Number(month) === birthMonth && Number(day) < birthDay);

  return Number(year) - birthYear - Number(birthdayAhead);
}
