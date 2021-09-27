import React from 'react';
import StarfieldAnimation from 'react-starfield-animation'
function background() {
    return (
        <div className='background'>
            <StarfieldAnimation
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100%'
        }}
      />
        </div>
    )
}

export default background
