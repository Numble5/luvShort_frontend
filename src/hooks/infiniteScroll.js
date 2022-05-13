import request from "@/api/request";

const MAX_VIDEO_IDX = 100000;
const DATA_SIZE = 4;

export const MainFirstFetchData = async ({
  email,
  payload,
  lastIdx,
  setLastIdx,
  setVideoList,
}) => {
  try {
    setLastIdx(MAX_VIDEO_IDX);
    const result = await request(
      "/api/videos/filter",
      "post",
      { lastVideoIdx: MAX_VIDEO_IDX, userEmail: email, size: DATA_SIZE },
      payload
    );

    if (result.length === 0) {
      setVideoList([]);
      return;
    }

    setLastIdx(result[result.length - 1].video_idx);
    setVideoList(result);
  } catch (e) {
    console.log(e);
  }
};

export const MainFetchData = async ({
  entry,
  payload,
  email,
  lastIdx,
  setLastIdx,
  setVideoList,
}) => {
  if (entry.isIntersecting) {
    try {
      const result = await request(
        "/api/videos/filter",
        "post",
        {
          lastVideoIdx: lastIdx,
          userEmail: email,
          size: DATA_SIZE,
        },
        payload
      );

      if (result.length === 0) return;
      setLastIdx(result[result.length - 1].video_idx);
      setVideoList((videoList) => [...videoList, ...result]);
    } catch (e) {
      console.log(e);
    }
  }
};
