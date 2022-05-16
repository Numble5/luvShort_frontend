import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Carousel from "../../carousel/carousel";
import { changeModalFalse } from "@/redux/reducers/modal";

import base_circle from "./assets/base_circle.svg";
import plus_circle from "./assets/plus_circle.svg";
import deleted from "./assets/deleted.svg";
import InterestCategories from "@/components/interests";
import Circle from "@pages/step/assets-step2/Ellipse 454.svg";
import {
  setCategories,
  setCategoriesInterests,
  setInterests,
} from "@/redux/reducers/video";
import request from "@/api/request";
import { $BASE_URL } from "@/utils/BASE_URL";

const InterestModalBlock = styled.div`
  #modal-background {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background: rgba(1, 1, 1, 0.3);
  }
  .modal-box {
    position: fixed;
    top: 25%;
    left: 2.5%;
    z-index: 2;
    width: 95%;
    background-color: #ffffff;
    border-radius: 10px;
    overflow: hidden;
  }

  .select_interests_container {
    padding-left: 1em;
    margin-bottom: 2em;
    .interest-list {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;

      .interest-item {
        padding: 0.8em 1.2em;
        display: flex;
        align-items: center;
        border: 1px solid #c4c4c4;
        border-radius: 25px;

        img {
          margin-right: 6px;
        }
        @media screen and (max-width: 488px) {
          font-size: 11px;
        }
        @media screen and (min-width: 488px) {
          width: calc((100% - 165px) / 3);
        }
        @media screen and (min-width: 1024px) {
          width: calc((100% - 165px) / 3);
        }

        > span {
          color: inherit;
          font-size: inherit;
        }

        &.selected {
          border: 1px solid #5dccc6;
          color: #5dccc6;
        }
      }
    }
  }
  .modal-button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      outline: none;
      border: none;
    }
    .cancel {
      flex: 0.5;
      button {
        width: 100%;
        background: #f6f6f6;
        color: #777777;
        height: 43px;
      }
    }
    .exit {
      flex: 0.5;
      button {
        width: 100%;
        background: #5dccc6;
        color: #ffffff;
        height: 43px;
      }
    }
  }
`;

export const InterestsModal = () => {
  const dispatch = useDispatch();
  const categories = useSelector(({ video }) => video.categories);
  const interests = useSelector(({ video }) => video.interests);
  const [beforeCategories, setBeforeCategories] = useState(categories);
  const [beforeInterests, setBeforeInterests] = useState(interests);
  const modal = useSelector(({ modal }) => modal.value);
  const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => props.modal && "hidden"}
  }
`;

  const toggleInterest = (name) => {
    const newInterest = beforeInterests.map((item) =>
      item.name === name ? { ...item, checked: !item.checked } : item
    );
    const checkedInterestLength = newInterest.filter(
      (item) => item.checked === true
    ).length;
    if (checkedInterestLength === 4) {
      return;
    }
    if (beforeCategories?.includes(name)) {
      const newCategories = beforeCategories.filter((item) => item !== name);
      setBeforeCategories(newCategories);
    } else {
      setBeforeCategories([...beforeCategories, name]);
    }
    setBeforeInterests(newInterest);
  };

  const closeModal = () => {
    dispatch(changeModalFalse());
  };

  const onClickSetCategoriesInterests = () => {
    dispatch(setCategoriesInterests({ beforeCategories, beforeInterests }));
    closeModal();
  };

  return (
    <>
      <GlobalStyle modal={modal} />
      <InterestModalBlock>
        <div id="modal-background" onClick={closeModal}></div>
        <div className="modal-box">
          <div className="selected_interests">
            <InterestCategories
              title=""
              categories={beforeCategories}
              border={false}
            />
          </div>
          <div className="select_interests_container">
            <div className="interest-list">
              {beforeInterests?.map((item, index) => (
                <div
                  key={index}
                  className={
                    item.checked ? "interest-item selected" : "interest-item"
                  }
                  onClick={() => toggleInterest(item.name)}
                >
                  <div>
                    <img
                      src={item.checked ? item.imgSrc : Circle}
                      alt="취미아이콘"
                    />
                  </div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="modal-button-container">
            <div className="cancel" onClick={closeModal}>
              <button>취소하기</button>
            </div>
            <div className="exit" onClick={onClickSetCategoriesInterests}>
              <button>저장하기</button>
            </div>
          </div>
        </div>
      </InterestModalBlock>
    </>
  );
};

export const DeletedModal = ({ title }) => {};

export const ChattingModal = ({
  title,
  description,
  leftButton,
  leftFunction = () => {},
  rightButton,
  rightFunction,
}) => {
  const dispatch = useDispatch();
  const modal = useSelector(({ modal }) => modal.value);
  const GlobalStyle = createGlobalStyle`
    body {
      overflow: ${(props) => props.modal && "hidden"}
    }
  `;

  const closeModal = () => {
    dispatch(changeModalFalse());
    leftFunction();
  };

  return (
    <>
      <GlobalStyle modal={modal} />
      <ModalBlock>
        {title === "선택한 영상을 삭제할까요?" ? (
          <></>
        ) : (
          <div id="modal-background" onClick={closeModal}></div>
        )}
        <div className="modal-box">
          <div className="modal-question">
            <div className="modal-question-container">
              <h1 className="title">{title}</h1>
              <p>{description}</p>
            </div>
          </div>
          <div className="modal-button-container">
            <div className="cancel" onClick={closeModal}>
              <button>{leftButton}</button>
            </div>
            <div className="exit">
              {rightButton === "로그아웃하기" ? (
                <a
                  href={`https://kauth.kakao.com/oauth/logout?client_id=cb35cf8c852a69a0ff7192f0f1ca071d&logout_redirect_uri=http://${$BASE_URL}/oauth/logout/kakao`}
                >
                  {rightButton}
                </a>
              ) : (
                <button onClick={rightFunction}>{rightButton}</button>
              )}
            </div>
          </div>
        </div>
      </ModalBlock>
    </>
  );
};

export const MainEditDeleteModal = ({ videoType, id, setEditModal }) => {
  const [del, setDel] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "");
  }, []);

  const changeModal = () => {
    setEditModal(true);
    setDel(false);
  };

  const toggleDeletedModal = () => {
    setDel(false);
    setEditModal(true);
  };

  const deleteModalView = () => {
    setDel(true);
  };

  const deleteItem = async () => {
    try {
      await request(`/api/videos/${id}`, "delete");
      window.location.reload();
    } catch (e) {}
  };

  return (
    <div>
      <EditDeletedModalBackground onClick={changeModal} />
      {del ? (
        <ChattingModal
          title={"선택한 영상을 삭제할까요?"}
          description={"*삭제완료 후에는 복원할 수 없습니다."}
          leftButton={"아니요"}
          leftFunction={toggleDeletedModal}
          rightButton={"네,삭제할래요"}
          rightFunction={deleteItem}
        />
      ) : (
        <></>
      )}
      <StyledEditDeleted>
        <button onClick={deleteModalView}>삭제하기</button>
        {videoType === "EMBED" ? (
          <Link to={`/videos/embed/edit/${id}`}>수정하기</Link>
        ) : (
          <Link to={`/videos/edit/${id}`}>수정하기</Link>
        )}
      </StyledEditDeleted>
    </div>
  );
};

export const EditDeletedModal = ({ videoType, id }) => {
  const dispatch = useDispatch();
  const modal = useSelector(({ modal }) => modal.value);
  const [deleteModal, setDeleteModal] = useState(false);
  const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => props.modal && "hidden"}
  }
`;

  const deleteModalView = () => {
    setDeleteModal(true);
  };

  const toggleDeletedModal = () => {
    setDeleteModal(false);
  };

  const deleteItem = async () => {
    try {
      await request(`/api/videos/${id}`, "delete");
      setDeleteModal(false);
      dispatch(changeModalFalse());
      window.location.reload();
    } catch (e) {}
  };

  const changeModal = () => {
    dispatch(changeModalFalse());
  };
  return (
    <>
      {!modal ? (
        <></>
      ) : (
        <div>
          <GlobalStyle modal={modal} />
          <EditDeletedModalBackground onClick={changeModal} />
          {deleteModal ? (
            <ChattingModal
              title={"선택한 영상을 삭제할까요?"}
              description={"*삭제완료 후에는 복원할 수 없습니다."}
              leftButton={"아니요"}
              leftFunction={toggleDeletedModal}
              rightButton={"네,삭제할래요"}
              rightFunction={deleteItem}
            />
          ) : (
            <></>
          )}
          <StyledEditDeleted>
            <button onClick={deleteModalView}>삭제하기</button>
            {videoType === "EMBED" ? (
              <Link
                to={`/videos/embed/edit/${id}`}
                onClick={() => dispatch(changeModalFalse())}
              >
                수정하기
              </Link>
            ) : (
              <Link
                to={`/videos/edit/${id}`}
                onClick={() => dispatch(changeModalFalse())}
              >
                수정하기
              </Link>
            )}
          </StyledEditDeleted>
        </div>
      )}
    </>
  );
};

export const UploadModal = () => {
  const dispatch = useDispatch();
  const onClickChangeModalFalse = () => {
    dispatch(changeModalFalse());
  };
  return (
    <StyledUploadModal>
      <Link to="/file-upload/embed" className="embeded__btn">
        <div className="embeded__btn-wrapper" onClick={onClickChangeModalFalse}>
          <img src={plus_circle} alt="임베드" />
          <span>임베드 영상 업로드</span>
        </div>
      </Link>
      <Link to="/file-upload" className="self__btn">
        <div onClick={onClickChangeModalFalse}>
          <img src={base_circle} alt="직접" />
          <span>직접 영상 업로드</span>
        </div>
      </Link>
    </StyledUploadModal>
  );
};

export const MainLoginModal = () => {
  const items = [
    {
      idx: "carousel1",
      title: "자연스러운 매칭 서비스",
      content1: "조회수, 좋아요수는 필요 없어요!",
      content2: "그냥 서로의 영상에 하트를 누르면 자연스럽게 매칭돼요.",
    },
    {
      idx: "carousel2",
      title: "관심사 기반의 추천",
      content1: "나와 관심사/취미가 비슷한 사람을 찾고 싶으신가요?",
      content2: "회원님의 관심사가 반영된 영상을 추천해드려요.",
    },
    {
      idx: "carousel3",
      title: "차별화된 소개방식",
      content1:
        "외모, 직업, 인기등급 다 좋지만, 좀 더 다양한 매력을 짧은 영상에 담아 나를 소개해보세요!",
    },
  ];

  return (
    <StyledModal>
      <div className="loginModal_wrapper">
        <Carousel items={items} />
      </div>
      <a href="/login">로그인하고 시작하기</a>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  width: 350px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;

  .loginModal_wrapper {
    margin: 12px;
    margin-bottom: 25px;
  }

  > a {
    display: block;
    text-align: center;
    line-height: 50px;
    background-color: #5dccc6;
    font-weight: 700;
    color: #ffffff;
    border: none;
    width: 100%;
    font-size: 17px;
    height: 50px;
  }

  .slick-dots {
    bottom: -20px;
  }

  .slick-dots li.slick-active button:before {
    color: #5dccc6;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const StyledUploadModal = styled.div`
  .embeded__btn,
  .self__btn {
    display: block;
    width: 330px;
    height: 126px;
    font-size: 24px;
    font-weight: 600;
    border-radius: 10px;
    line-height: 126px;

    * {
      color: white;
      text-align: center;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        margin-right: 4px;
      }
    }
  }

  .embeded__btn {
    background-color: #5dccc6;
    margin-bottom: 15px;
  }
  .self__btn {
    background-color: #f3576c;
  }
`;

const ModalBlock = styled.div`
  #modal-background {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background: rgba(1, 1, 1, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-box {
    position: fixed;
    top: 35%;
    left: 2.5%;
    z-index: 2;
    width: 95%;
    height: 133px;
    background-color: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .modal-question {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      &-container {
        text-align: center;
        > h1 {
          font-size: 14px;
          margin-bottom: 10px;
          color: #3d3d3d;
        }
        > p {
          font-size: 11px;
          color: #f3576c;
        }
      }
    }
    .modal-button-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        outline: none;
        border: none;
      }
      .cancel {
        flex: 0.5;
        button {
          width: 100%;
          background: #f6f6f6;
          color: #777777;
          height: 43px;
        }
      }
      .exit {
        flex: 0.5;

        a {
          display: block;
          width: 100%;
          background: #5dccc6;
          color: #ffffff;
          height: 43px;
          line-height: 45px;
          text-align: center;
        }

        button {
          width: 100%;
          background: #5dccc6;
          color: #ffffff;
          height: 43px;
        }
      }
    }
  }
`;

const StyledDeletedModal = styled.div`
  .background {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background: rgba(1, 1, 1, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .deleted-modal {
    background-color: white;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    width: 331px;
    overflow: hidden;
    border-radius: 10px;

    img,
    button {
      display: block;
    }

    img {
      margin: 20px auto 5px auto;
    }

    span {
      display: block;
      text-align: center;
      margin-bottom: 20px;
    }

    button {
      background-color: #5dccc6;
      border: none;
      color: white;
      font-weight: 600;
      text-align: center;
      width: 100%;
      padding: 16px 0;
    }
  }
`;

const StyledEditDeleted = styled.div`
  width: 100%;
  border-radius: 8px 8px 0 0;
  background-color: white;
  z-index: 2;
  position: fixed;
  left: 0;
  bottom: 78px;
  text-align: center;

  a,
  button {
    font-weight: 600;
    display: block;
    margin: 25px 0;
  }

  button {
    border: none;
    background: transparent;
    font-size: 16px;
    margin: 25px auto;
  }
`;

const EditDeletedModalBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(1, 1, 1, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
