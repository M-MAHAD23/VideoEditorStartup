import styled from 'styled-components';
import VideoPlayer from './vedio-player/VideoPlayer'
import Topbar from './topbar/Topbar'
import { Link } from 'react-router-dom'
import BackButton from './back/Back';

export default function Edit() {
  return (
    <>
      <BackButton>
        <Link to={'/'}><i className="fas fa-arrow-left"></i>Back</Link>
      </BackButton>
      <Topbar />
      <EditContainer>
        <VideoPlayer />
        <h1>Video Selected.</h1>
      </EditContainer>
    </>
  )
}

const EditContainer = styled.div`
  width: '100%';
  height: '100%';
  display: 'flex';
  flex-direction: 'column';
  justify-content: 'space-between';
  align-items: 'center';
`;