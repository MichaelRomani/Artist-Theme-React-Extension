import React from 'react'

const logoImg = {
  google: (
    <div>
    <img
      alt="Google"
      id="g-logo"
      style={{ height: 110, width: 110, marginTop: 70 }}
      src="https://ih1.redbubble.net/image.397523821.3440/flat,800x800,075,f.u2.jpg"
    />
  </div>
  ),
  howToVid: (
    <div>
      <iframe
        title="video"
        alt='tutorial video'
        width="500"
        height="300"
        src="https://www.youtube.com/watch?v=1QzIQqOuHRQ&feature=youtu.be"
        frameborder="0"
        gesture="media"
        allow="encrypted-media"
        allowfullscreen
      />
    </div>
  )
}

export default logoImg
