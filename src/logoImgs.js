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
        width="560"
        height="200"
        src="https://www.youtube.com/embed/3hOZaTGnHU4?rel=0&autoplay=1&showinfo=0"
        frameborder="0"
        gesture="media"
        allow="encrypted-media"
        allowfullscreen
      />
    </div>
  )
}

export default logoImg
