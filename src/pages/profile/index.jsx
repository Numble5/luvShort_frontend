import React from "react";
import Header from "@/components/header";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Profile = () => {
  const user = useSelector(({ user }) => user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.user) {
      navigate("/");
    }
  }, [user]);

  return <Header type={"프로필"} />;
};

export default Profile;
