import styled from "styled-components";
import VideoItem from "../videoItem";

const VideoList = ({ videos }) => {
  return (
    <VideoListWrapper>
      <h2 className="sr-only">영상리스트</h2>
      <StyledUl>
        {videos.map((video) => {
          return <VideoItem key={video.video_idx} video={video} />;
        })}
      </StyledUl>
    </VideoListWrapper>
  );
};
export default VideoList;

const VideoListWrapper = styled.section`
  padding-bottom: 100px;
`;

const StyledUl = styled.ul``;
