export const calAge = (birthday) => {
  birthday = String(birthday);
  const now = new Date().getFullYear() + 1;
  const birthYear = Number(birthday.slice(0, 4));

  return now - birthYear;
};
