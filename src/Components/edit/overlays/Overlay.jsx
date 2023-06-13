import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../Button';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import OverlayVideoPlayer from './OverlayVideoPlayer';

const OverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #353740;
  color: white;
  height: 100%;
`;

const BackButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 8vh;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  color: whitesmoke;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: none;
  background-color: #6e6e80;
  color: whitesmoke;
`;

const EditContainer = styled.div`
  width: '100%';
  height: '100%';
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
`;

function Overlay() {
  const [text, setText] = useState('');
  const [xCoordinate, setXCoordinate] = useState('');
  const [yCoordinate, setYCoordinate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any logic with the form data
    console.log('Text:', text);
    console.log('X-Coordinate:', xCoordinate);
    console.log('Y-Coordinate:', yCoordinate);
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous route
  };

  return (
    <>
      <OverlayContainer>
        <BackButton onClick={handleGoBack}>
        <ArrowBack />
        </BackButton>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Text: </Label>
            <br />
            <Input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>X-Coordinates: </Label>
            <br />
            <Input
              type="number"
              value={xCoordinate}
              onChange={(e) => setXCoordinate(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Y-Coordinates: </Label>
            <br />
            <Input
              type="number"
              value={yCoordinate}
              onChange={(e) => setYCoordinate(e.target.value)}
            />
          </FormGroup>
          <Button
            name="Save Video"
            icon={null}
            onClick={null}
            bg="#1e90ff"
          />
        </Form>
      </OverlayContainer>
      <EditContainer>
        <OverlayVideoPlayer />
      </EditContainer>
    </>
  );
}


export default Overlay;