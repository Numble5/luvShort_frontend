import styled from "styled-components";
import React from "react";

import VideoList from "@components/videoList";
import Navigator from "@components/navigator";

import LeftArrow from "@/static/step/Vector 3.svg";
import noInterests from "@/static/Interests/noInterests.svg"

const InterestBlock = styled.div`
    width : 100%;
    height : 100%;
    
    .top {
        padding : 53px 30px 0 30px;
        .top-display {
            display : flex;
            justify-content : space-between;
            span { font-size: 18px;}
        }

    }
    .contents {
        h3 {
            color: #979797;
            text-align: center;
            font-size: 14px;
            margin-top:27px;
            line-height: 19px;
        }
        img {
            display:block;
            margin:auto;
            text-align:center;
        } //이미지 중앙정렬이 안 먹음
    }
`;

const Interests = () => {
    return (
        <InterestBlock>
            <div className="top">
                <div className="top-display">
                    <img src={LeftArrow} alt="좌측화살표"/>
                    <span>관심영상</span>
                    <div></div>
                </div>
            </div>
                
            <div className="contents">
                <h3>마음에 드는 영상에 하트를 누르고<br/> 관심영상을 업데이트해보세요!</h3>
                <div><img src={noInterests} alt="아직 영상이 없어요"/> </div>
                <VideoList></VideoList>
            </div>
            
            <Navigator></Navigator>
        </InterestBlock>
        
    )
}
export default Interests;

