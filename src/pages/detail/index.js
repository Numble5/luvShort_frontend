import request from "@/api/request";
import Navigator from "@components/navigator";
import { useEffect } from "react";
import { useLocation } from "react-router";

const Detail = (props) => {
  const [, pathname] = useLocation().pathname.split("/");

  const fetchData = async () => {
    try {
      const { data } = await request(`/api/videos/${pathname}`, "get");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navigator />
    </div>
  );
};

export default Detail;
