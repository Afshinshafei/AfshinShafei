import React from 'react'
import profileImage from '../../profile_image.png'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-avatar-wrapper">
          <img
            src={profileImage}
            alt="Profile of Afshin Shafei"
            className="header-avatar"
          />
        </div>
        <h1 className="neon-text glitch" data-text="AFSHIN SHAFEI">
          AFSHIN SHAFEI
        </h1>
        <p className="subtitle neon-subtitle">
          Research Fellow @ Sapienza Università di Roma
        </p>
        <p className="subtitle">
          Ph.D. in Environmental and Hydraulic Engineering
        </p>
        <div className="header-divider"></div>
      </div>
    </header>
  )
}

export default Header
