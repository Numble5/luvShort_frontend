import styled from "styled-components";
import React from "react";

const LikeCancelBlock = styled.div`
background: rgba(0, 0, 0, 0.5);
width: 100vw;
height: 100vh;
overflow: hidden;
`;

const LikeCancelModal = styled.div`
max-width: calc(100vw - 10%);
min-height: 133px;
position: absolute;
top: calc(50vh - 66px);
left: calc(50vw - 165px);

background: #FFFFFF;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
border-radius: 7px;

text-align:center;
.ModalText {
padding: 31px;
padding-bottom: 74px;
    .mainText {
        font-size:14px;
        color: #3D3D3D;
    }
    .subText {
        font-size:11px;
        color: #F3576C;
    }
}

.No {
    width: 50%;
    height: 43px;
    background: #F6F6F6;
    border-radius: 0px 0px 0px 6px;

    border: 0;
    border-top: 1px solid #CFCFCF;
    color: #5DCCC6;

    position: absolute;
    left: 0;
    bottom:0;
}
.Yes {
    width: 50%;
    height: 43px;
    background: #5DCCC6;
    border-radius: 0px 0px 6px 0px;

    border: 0;
    border-left: 1px solid #CFCFCF;
    border-top: 1px solid #CFCFCF;
    color: #FFFFFF;

    position: absolute;
    right: 0;
    bottom:0;
}
`;

const likeCancel = () => {
    return (
        <LikeCancelBlock>{/*백그라운드 이미지 투명검정  */}
            <LikeCancelModal>
                <div className="ModalText">
                    <p className="mainText"> aaa님의 영상을 관심영상에서 삭제할까요?</p>
                    <br/>
                    <p className="subText">*취소해도 상대방에게 간 알림은 회수되지 않습니다.</p>
                </div>

                <div className="ModalButtons">
                    <button className="No">아니요</button>
                    <button className="Yes">네, 삭제할래요</button> 
                </div>
            </LikeCancelModal>
        </LikeCancelBlock>
        
    )
}
export default likeCancel;