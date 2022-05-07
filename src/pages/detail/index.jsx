import request from "@/api/request";
import Navigator from "@components/navigator";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { FixedUploadBtn } from "@components/common/button";
import TitlePrevHeader from "@/components/common/titlePrevHeader";
import calDate from "@/utils/calDate";

const Detail = (props) => {
  const [, pathname] = useLocation().pathname.split("/");
  const [videoInfo, setVideoInto] = useState(null);

  const fetchData = async () => {
    try {
      const data = await request(`/api/videos/${pathname}`, "get");
      setVideoInto(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <Navigator />
      <TitlePrevHeader title={"View"} background={"black"} />
      <div>
        <div>
          <div>
            <img src={videoInfo?.uploader?.profileImgUrl} alt="프로필 이미지" />
            <div>
              <span>{videoInfo?.uploader?.nickname}</span>
              <div>{/* 카테고리 담겨야함 */}</div>
            </div>
          </div>
          <div>{/* 하트모양 */}</div>
        </div>
        <div>
          <div>
            <div>{videoInfo?.title}</div>
            <div>{videoInfo?.content}</div>
          </div>
          <div>{calDate(videoInfo?.createdDate)}</div>
        </div>
        <div>
          <video>
            <source src={videoInfo?.videoUrl} />
          </video>
        </div>
      </div>
      <FixedUploadBtn />
    </section>
  );
};

export default Detail;
