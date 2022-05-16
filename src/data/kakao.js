import { $BASE_URL } from "@/utils/BASE_URL";

const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${$BASE_URL}/oauth/callback/kakao&response_type=code`;
