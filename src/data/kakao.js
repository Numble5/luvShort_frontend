import { $BASE_URL } from "@/utils/BASE_URL";

// const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
// const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=cb35cf8c852a69a0ff7192f0f1ca071d&redirect_uri=${$BASE_URL}/oauth/callback/kakao&response_type=code`;
