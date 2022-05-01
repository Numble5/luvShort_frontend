import axios from "axios";

/*
     요청보내는 방식 예제
     await request("/api/auth/kakao-login","post,{access_token: accesstoke});

     보내야하는 query string이 없을 경우 세번째는 비워두셔도 됩니다.
     
*/
const BASE_URL = "http://13.209.236.146:8080";

const request = async (req, option, qs = {}, payload = {}) => {
  try {
    const FULL_URL = `${BASE_URL}${req}`;
    const { data } = await axios({
      url: FULL_URL,
      method: option,
      params: qs,
      data: payload,
    });

    return data;
  } catch (e) {
    console.log(e);
  }
};

export default request;
