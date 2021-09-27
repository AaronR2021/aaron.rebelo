import React from 'react';
import ReactPlayer from 'react-player'


function ProjectLayout({props}) {
    const {github,img,text,viedo,id}=props    
    return (
      <>
        {
            console.log(id,":",github,img,text,viedo,'dddddddddddd'),
            console.log(`videos/${viedo}`)
        }
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

