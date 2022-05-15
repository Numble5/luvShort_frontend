import { changeModalTrue } from "@/redux/reducers/modal";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import add from "./assets/add.svg";

const MyVideoEdit = ({
  video_idx,
  videoType,
  setId,
  setType,
  setIsUpload,
  Pagetype,
}) => {
  const dispatch = useDispatch();

  const editVideo = ({ target }) => {
    const id = target.dataset.id;
    const type = target.dataset.type;

    setId(id);
    setType(type);
    if (!Pagetype) {
      dispatch(changeModalTrue());
    }
    setIsUpload(false);
  };

  return (
    <EditButton onClick={({ target }) => editVideo({ target })}>
      <img data-id={video_idx} data-type={videoType} src={add} alt="추가" />
    </EditButton>
  );
};

export default MyVideoEdit;

const EditButton = styled.button`
  width: 15px;
  margin-left: 10px;
  background: transparent;
  background: red;
  border: none;
  position: relative;

  img {
    position: absolute;
    top: -4px;
    left: -6px;
    width: 20px;
  }
`;
