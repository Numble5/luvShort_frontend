import { debounce } from "lodash";
import request from "@/api/request";

export const toggleLiked = debounce(
  async ({ target, heartState, setModal, setHeartState, email }) => {
    try {
      const id = target.dataset.id;

      if (heartState) {
        // 트루면 삭제
        await request(`/api/hearts/${id}`, "put", {
          userEmail: email,
        });
        setModal(true);
      } else {
        await request(`/api/hearts/${id}`, "post", {
          userEmail: email,
        });
        setHeartState(true);
      }
    } catch (e) {
      console.log(e);
    }
  },
  200
);
