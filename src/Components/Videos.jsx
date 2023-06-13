import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../Context/global';
import DeleteIcon from '@mui/icons-material/Delete';

const VideosStyled = styled.div`
  .videos-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 1.5rem;
        padding-top: 3rem;
        transition: all 0.4s ease;
        opacity: 0;
        animation: fade-in 0.5s ease-in-out forwards;
        @keyframes fade-in {
        0% {
            opacity: 0;
            transform: scale(0);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
        }

        .background{
            border: 1px  solid white;
            border-radius: 5px;
            border-color: white;
        }

        .video {
        position: relative;
        transition: all 0.4s ease;
        width: 100%;
        cursor: pointer;
        border-radius: 15px;

        video {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 5px;
        }
        }


.ditails {
  position: relative;
  display: flex;
  flex-direction: column;
}

.ditails h4 {
  color: #32ffce;
  padding: 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 500;
}

.ditails p {
  color: #fff;
  opacity: 0.8;
  font-size: 1rem;
  line-height: 1.4rem;
}

.delete-icon-background{
    display: flex;
    align-items: center;
    justify-content: center;
}

.delete-icon{
    position: relative;
    cursor: pointer;
    color: #32ffce;
    
}


    }
`;

export default function Videos() {
    const { videos } = useGlobalContext();

    const handleDeleteClick = (event) => {
        event.stopPropagation();
        // Add your delete logic here
    };

    return (
        <VideosStyled>
            <div className="videos-container">
                {videos.map((video) => {
                    return (
                            <Link key={video._id} to={`/videos/${video._id}`}>
                                <div className='background'>
                                    <div className="video">
                                        <video src={video.videoUrl}></video>
                                    </div>
                                    <div className='ditails'>
                                        <h4>{video.title}</h4>
                                        <p>{video.description}</p>
                                    </div>
                                    <span className="delete-icon-background">
                                        <DeleteIcon className="delete-icon" onClick={handleDeleteClick} />
                                    </span>
                                </div>
                            </Link>
                    );
                })}
            </div>
        </VideosStyled>
    );
}