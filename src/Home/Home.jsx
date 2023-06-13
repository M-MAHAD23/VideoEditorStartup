import styled from 'styled-components';
import { Routes, Route, useLocation } from 'react-router-dom';
import Videos from '../Components/Videos';
import Edit from '../Components/edit/Edit';
import { useState } from 'react';
import Upload from '../Components/Upload';
import Button from '../Components/Button';
import Overlay from '../Components/edit/overlays/Overlay';
// import Trim from '../Components/edit/trim/Trim';

export default function Home() {
  const location = useLocation();
  const [modal, setModal] = useState(false);

  // Check if the current route is '/'
  const isHomePage = location.pathname === '/';

  return (
    <HomeContainer>
      {isHomePage ? (
        <div>
          <div className="upload">
            <Button
              name="Upload"
              icon={<i className="fas fa-plus"></i>}
              onClick={() => {
                setModal(true);
              }}
              bg="#1e90ff"
            />
          </div>
          {modal && <Upload />}
          <h1>Edit Videos</h1>
        </div>
      ) : null}
      <Routes>
        <Route path="/" element={<Videos />} />
        <Route path="/videos/:id" element={<Edit />} />
        <Route path="/videos/:id/overlay" element={<Overlay />} />
        {/* <Route path="/videos/:id/trim" element={<Trim />} /> */}
      </Routes>
      {modal && <div className="overlay" onClick={() => setModal(false)}></div>}
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  padding: 3rem 18rem;

  h1 {
    color: #fff;
    background: linear-gradient(to right, #00b894 40%, #705DF2);
    -webkit-background-clip: text;
    background-clip: none;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .upload {
    display: flex;
    justify-content: flex-start;
  }
`;
