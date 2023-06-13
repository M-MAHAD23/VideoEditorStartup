import styled from 'styled-components'

const VideoPlayerStyled = styled.div`
    flex: 8;
    width: 50%;
    transition: all .4s ease;
    opacity: 0;
    animation: fade-in .5s ease-in-out forwards;
    transform-origin: center;


    .vedio-position {
        position: relative;
        left: 100%;
        transform: translateX(-50%);
    }

    @media screen and (max-width: 768px) {
    .vedio-position {
        width: 80%; /* Adjust the width as needed for smaller screens */
    }
    }

    @media screen and (max-width: 480px) {
    .vedio-position {
        width: 90%; /* Adjust the width as needed for even smaller screens */
    }
    }


    .video-container{
        overflow: hidden;
    }

    video{
        width: 100%;
        height: auto;
    }

    @keyframes fade-in{
        0%{
            opacity: 0;
            transform: scale(0);
        }
        100%{
            opacity: 1;
            transform: scale(1);
        }
    }

    .video-js .vjs-duration{
        display: block;
    }
    .video-js .vjs-current-time{
        display: block;
    }
    
    .video-js .vjs-time-divider{
        display: block;
    }

    .vjs-icon-placeholder:before {
        font-size: 24px;
        color: #F3F0F9;
    }

    .vjs-progress-control:hover .vjs-progress-holder,
    .vjs-progress-control:focus .vjs-progress-holder{
        height: 8px;
    }

    .video-js .vjs-progress-holder{
        height: 5px;
        transform: all .4s ease-in-out;
        &:hover{
            height: 8px;
        }
    }

    .video-js .vjs-button{
        top: 37%;
    }

    .video-js{
        font-family: 'Poppins', sans-serif;
        .vjs-fullscreen-control, .vjs-picture-in-picture-control{
            position: absolute;
        }
        .vjs-fullscreen-control{
            right: 0;
        }
        .vjs-picture-in-picture-control{
            right: 40px;
        }

        .vjs-time-control{
            top: 26%;
            padding: 0;
            span{
                font-family: 'Roboto', sans-serif;
                opacity: 0.8;
            }
        }
        .vjs-play-control{
            display: flex;
            order: 1;
        }

        .vjs-current-time {
            display: flex;
            order: 1;
            font-size: 1.2rem;
            font-weight: 600;
        }
        .vjs-time-divider{
            display: flex;
            order: 3;
            top: 20%;
            position: relative;
            margin: 0 6px;
            padding: 0;
            min-width: initial;
            font-size: 1rem;
            font-weight: 500;
            opacity: 0.8;
        }

        .vjs-duration{
            display: flex;
            order: 3;
            font-size: 1rem;
            font-weight: 500;
            opacity: 0.8;
            top: 35%;
        }

        .vjs-volume-panel{
            position: absolute;
            right: 75px;
        }
        .vjs-volume-control.vjs-volume-horizontal{
            top: 42%;
        }
    }

    .vjs-control-bar {
        display: flex;
        justify-content: flex-start; /* Center icons horizontally */
        align-items: center;
        background: #0b0b0b;
        height: 70px;
        box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2);
        transition: all .4s ease;
        bottom: -48px;
        &:hover{
            bottom: 0;
            .vjs-progress-control{
                margin-top: 0.5rem;
                transition: all .4s ease;
            }
        }
    }

    .video-js .vjs-progress-control{
        position: absolute;
        width: 100%;
        top: 0;
        height: 20px;
        margin-top: 0.05rem;
        transition: all .4s ease;
    }
    .vjs-button:hover,
    .vjs-button:focus {
        color: #fff;
    }

    .vjs-play-progress {
        background: #F3F0F9;
    }

    .video-js .vjs-play-progress:before{
        display: none;
    }

    .vjs-slider-bar {
        background: #F3F0F9;
    }

    .vjs-load-progress{
        div{
            background: #1e90ff;
        }
    }

    .vjs-slider-handle {
        background: #F3F0F9;
        border-color: #F3F0F9;
    }

    .vjs-volume-panel {
        margin-right: 10px;
    }

    .vjs-volume-control .vjs-slider-bar {
        background: #705DF2;
    }

    .vjs-volume-level {
        background: #F3F0F9;
        height: 5px;
    }
    
    .vjs-volume-bar.vjs-slider-horizontal {
        width: 10em;
        height: 5px;
    }

    .vjs-slider-horizontal .vjs-volume-level:before {
        display: none;
    }

    .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal{
        width: 10em;
    }

    .video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal{
        width: 10em;
    }

    /* Set the direction of the controls to right-to-left */
    .video-js.vjs-controls-disabled .vjs-control-bar {
        direction: rtl;
    }
`;

export default VideoPlayerStyled