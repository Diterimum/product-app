import React from 'react';
import './Features.css';

function Features(){
  return(
    <section className="features">
      <h2>Advantages</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Power</h3>
          <p>Death Star is equipped with a super laser capable of destroying entire planets with a single shot.</p>
        </div>
        <div className="feature-item">
          <h3>Advanced technology</h3>
          <p>Equipped with the latest technology, Death Star is the pinnacle of engineering.</p>
        </div>
        <div className="feature-item">
          <h3>Perfect protection</h3>
          <p>Death Star is capable of withstanding any and all attacks.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;