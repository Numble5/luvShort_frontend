export const birthdayCheck = (birth) => {
  if (birth.length !== 8) return false;

  var result = true;
  const year = String(birth).slice(0, 4);
  const month = String(birth).slice(4, 6);
  const day = String(birth).slice(6, 8);

  const value = `${year}-${month}-${day}`;
  const Y = new Date().getFullYear();
  try {
    var date = value.split("-");
    var y = parseInt(date[0], 10),
      m = parseInt(date[1], 10),
      d = parseInt(date[2], 10);

    if (y >= Y) return false;
    var dateRegex =
      /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
    result = dateRegex.test(d + "-" + m + "-" + y);
  } catch (err) {
    result = false;
  }
  return result;
};

export const checkNickname = (nickname) => {
  if (!nickname) {
    return;
  }
  const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
  console.log(regex.test(nickname));
  if (regex.test(nickname)) {
    return true;
  } else {
    return false;
  }
};
