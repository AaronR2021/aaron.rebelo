import React from 'react';
import ReactPlayer from 'react-player'


function ProjectLayout({props}) {
    const {text,viedo}=props    
    return (
      <>
        <div className='modal-card'>
            <div className='video'>
            <ReactPlayer
            className='react-player'
            url= {`${viedo}`}
            width='100%'
            height='100%'
            max-height="100px"
            controls = {true}
            />
            <p>{text}</p>
            </div>
        </div>
    </>
    )
}

export default ProjectLayout

