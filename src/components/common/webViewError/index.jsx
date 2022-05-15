import styled from "styled-components";
import React from "react";

const WebViewErrorBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 24px;
    font-weight: 600;
  }
`;

const WebViewError = () => {
  return (
    <WebViewErrorBlock>
      <div>
        <h1>
          이 서비스는 모바일에 최적화된 서비스입니다.
          <br />
          모바일로 이용해주세요
        </h1>
      </div>
    </WebViewErrorBlock>
  );
};

export default WebViewError;
