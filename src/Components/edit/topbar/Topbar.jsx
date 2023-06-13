import { Merge, ContentCut, Layers } from '@mui/icons-material';
import Button from '../../Button';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Overlay from '../overlays/Overlay';

function Topbar() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleOverlayClick = () => {
    navigate(`/videos/${id}/overlay`);
  };

  // const handleTrimClick = () => {
  //   navigate(`/videos/${id}/trim`);
  // }


  const EditOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10vh;
`;

  return (
    <EditOptions>
      <div className="">
        <Button
          name="Overlay"
          icon={<Layers />}
          onClick={handleOverlayClick}
          bg="#1e90ff"
        />
      </div>
      <div className="">
        <Button name="Trim" icon={<ContentCut />} onClick={null} bg="#1e90ff" />
      </div>
      <div className="">
        <Button name="Merge" icon={<Merge />} onClick={null} bg="#1e90ff" />
      </div>
      <Routes>
        <Route path="/videos/:id/overlay" element={<Overlay />} />
      </Routes>
    </EditOptions>
  );
}

export default Topbar;
