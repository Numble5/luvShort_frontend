const calDate = (date) => {
  // 임시 데이터
  const now = new Date(); // 현재 시간
  const [nowYear, nowMonth, nowDay, nowHour, nowMinutes] = [
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
  ];

  const baseDate = new Date(date);
  const [dateYear, dateMonth, dateDay, dateHour, dateMinutes] = [
    baseDate.getFullYear(),
    baseDate.getMonth() + 1,
    baseDate.getDate(),
    baseDate.getHours(),
    baseDate.getMinutes(),
  ];

  if (nowYear !== dateYear) {
    return `${nowYear - dateYear}년 전`;
  } else if (nowMonth !== dateMonth) {
    return `${nowMonth - dateMonth}달 전`;
  } else if (nowDay !== dateDay) {
    return `${nowDay - dateDay}일 전`;
  } else if (nowHour !== dateHour) {
    return `${nowHour - dateHour}시간 전`;
  } else {
    return `${nowMinutes - dateMinutes}분 전`;
  }
};

export default calDate;
