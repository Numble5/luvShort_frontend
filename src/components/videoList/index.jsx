import styled from "styled-components";
import VideoItem from "../videoItem";

const VideoList = ({ videos, type }) => {
  return (
    <VideoListWrapper>
      <h2 className="sr-only">영상리스트</h2>
      <StyledUl>
        {videos.map((video) => {
          return <VideoItem key={video.video_idx} video={video} type={type} />;
        })}
      </StyledUl>
    </VideoListWrapper>
  );
};
export default VideoList;

const VideoListWrapper = styled.section`
  padding-bottom: 100px;
  width: 97%;
  margin: 20px auto;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
