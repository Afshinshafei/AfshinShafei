import React from 'react'

function Research() {
  return (
    <section className="section" id="research">
      <div className="arcade-card">
        <h2 className="section-title">
          <span className="pixel-bracket">[</span> PH.D. RESEARCH <span className="pixel-bracket">]</span>
        </h2>
        <div className="section-content">
          <p className="bio-text">
            An advanced early warning system was developed during my PhD research, integrating 
            the E-TEPS model, which utilizes a Super-Resolution Generative Adversarial Network 
            to enhance climate downscaling for temperature and precipitation with elevation data, 
            and the FourCastNet global forecasting model.
          </p>
          <p className="bio-text">
            The accuracy and spatial resolution of high-resolution climate predictions were 
            significantly improved, allowing for rapid and precise forecasts of extreme weather 
            events in Italy. This system supports more effective climate-related decision-making 
            and disaster preparedness by providing timely and detailed insights into critical 
            climate variables.
          </p>
          
          <div className="research-interests">
            <h3 className="subsection-title">Fields of Interest</h3>
            <div className="interests-grid">
              <span className="interest-tag">Weather Forecasting</span>
              <span className="interest-tag">AI</span>
              <span className="interest-tag">Environmental Sciences/Engineering</span>
              <span className="interest-tag">Flood Risk Management</span>
              <span className="interest-tag">Climate Change</span>
              <span className="interest-tag">Remote Sensing</span>
              <span className="interest-tag">Machine Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research
