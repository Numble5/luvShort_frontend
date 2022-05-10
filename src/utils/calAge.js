export const calAge = (birthday) => {
  const now = new Date().getFullYear() + 1;
  const birthYear = birthday.slice(0, 4);

  return now - birthYear;
};
