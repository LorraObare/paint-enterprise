import './Styles/BriefHistory.css';

function BriefHistory(){
    return(
        <section className="history-section">
      <div className="container">
        <h2>Our Journey</h2>
        <div className="history-content">
          <div className="history-text">
            <p>
              Founded in 2010, our company began with a simple vision: to create exceptional experiences that inspire and engage. 
              What started as a small team of three passionate individuals has grown into a thriving creative agency with over 
              50 talented professionals.
            </p>
            <p>
              Throughout our journey, we've partnered with clients across industries, from emerging startups to established 
              global brands. Our commitment to excellence and innovation has earned us recognition and trust in the market.
            </p>
            <p>
              Today, we continue to push boundaries and explore new horizons, always staying true to our founding principles 
              of creativity, integrity, and client satisfaction. As we look to the future, we remain dedicated to delivering 
              solutions that make a meaningful impact.
            </p>
          </div>
          <div className="history-milestones">
            <div className="milestone">
              <span className="year">2010</span>
              <span className="event">Company founded</span>
            </div>
            <div className="milestone">
              <span className="year">2013</span>
              <span className="event">First major client partnership</span>
            </div>
            <div className="milestone">
              <span className="year">2016</span>
              <span className="event">Expanded to international markets</span>
            </div>
            <div className="milestone">
              <span className="year">2019</span>
              <span className="event">Received industry recognition award</span>
            </div>
            <div className="milestone">
              <span className="year">2022</span>
              <span className="event">Celebrated 100th successful project</span>
            </div>
            <div className="milestone">
              <span className="year">Today</span>
              <span className="event">Continuing to innovate and grow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default BriefHistory;