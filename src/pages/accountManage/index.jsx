import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNavigator } from "@/redux/reducers/navigator";
import TitlePrevHeader from "@components/common/titlePrevHeader";
import request from "@/api/request";
import Navigator from "@components/navigator";
import { useNavigate } from "react-router";
import styled from "styled-components";

const AccountManage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(({ user }) => user);
  const [createDate, setCreatedData] = useState("");

  const fetchData = async () => {
    try {
      const { createdTime } = await request(
        `/api/user/${user.user.email}`,
        "get"
      );

      setCreatedData(String(createdTime).slice(0, 10));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!user.user) {
      navigate("/");
    }
    dispatch(changeNavigator("mypage"));
    fetchData();
  }, []);

  return (
    <>
      <TitlePrevHeader title={"계정관리"} background={"white"} />

      <StyledAccountManage>
        <div>이정보는 공개 프로필에 포함되지 않습니다</div>
        <label htmlFor="cretedData">가입일</label>
        <input id="cretedData" placeholder={createDate} readOnly />
      </StyledAccountManage>
      <MembershipWithdrawal>탈퇴하기</MembershipWithdrawal>
      <Navigator />
    </>
  );
};

export default AccountManage;

const StyledAccountManage = styled.section`
  width: 90%;
  margin: 30px auto 0 auto;

  div {
    text-align: center;
    margin-bottom: 70px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
  }

  input {
    display: block;
    width: 100%;
    color: #878787;
    border: 1px solid #878787;
    border-radius: 5px;
    padding: 8px 4px;
    filter: drop-shadow(0px 0px 4px #c4c4c4);
  }
`;

const MembershipWithdrawal = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 100px;
  left: 10px;
  font-weight: 600;
  cursor: pointer;
`;
