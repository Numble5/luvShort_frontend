import styled from "styled-components";
import React, { useEffect, useState } from "react";
import request from "@/api/request";

import VideoList from "@components/videoList";
import Navigator from "@components/navigator";

import LeftArrow from "@/static/step/Vector 3.svg";
import noInterests from "@/static/Interests/noInterest.svg"

// const data = {
//     video_idx:"1",
//     title:"love dive",
//     nickname:"tearofglass",
//     thumbnailUrl:"https://i.ytimg.com/vi/UAQT5Hgrm1Q/maxresdefault.jpg",
//     profileImgUrl:"https://photo.newsen.com/mphoto/2021/12/11/202112111841155510_1.jpg",
//     updatedDate:"2022.12.06",
//     isExist:"True", //interest
// }

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
            position:absolute;
            top: calc(50vh - 71px);
            left: 50%;
            transform: translateX(-50%);
        }
        
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
                <img src={noInterests} alt="관심영상 없음" />
                <VideoList></VideoList>
            </div>
            
            <Navigator></Navigator>
        </InterestBlock>
        
    )
}
export default Interests;

