import './Styles/BriefHistory.css';
import companyImage from './assets/companyImage.jpg';

function BriefHistory(){
    return(
        <section className="history-section">
          <div className="container">
            <h2>Our Journey</h2>
            <div className="history-content">
              <div className="history-image">
                <img src={companyImage} alt="Company Brand" className="history-image" />
              </div>
              <div className="history-text-timeline">
                <div className="history-text">
                  <p>
                    Established in 2019, Gemasu has grown to a company with an annual turnover of 7million Kenya Shillings and now produces 5000 Litres of paint per month. Having established the Kenyan Home market, focus has spread to take on entire Kisumu County and entire Western Kenya.
                  </p>
                  <p>
                    Gemasu is not only in Decorative Paints, Automative Paints are in the portfolio under world & regional leading brands via PPG- Nexa Autocolour and Plascon South Africa. The Gemasu Automative division also manufacture under the brand Duco to bring rapid technology improvements, Gemasu has sought and obtained international brand partnerships for product lines which provide solutions such as Flowcrete UK for flooring.
                  </p>
                  <p>
                    Today, we continue to push boundaries and explore new horizons, always staying true to our founding principles of creativity, integrity, and client satisfaction. As we look to the future, we remain dedicated to delivering solutions that make a meaningful impact.
                  </p>
                </div>
                <div className="history-milestones">
                  <div className="milestone">
                    <span className="year">2019</span>
                    <span className="event">Company founded</span>
                  </div>
                  <div className="milestone">
                    <span className="year">2020</span>
                    <span className="event">Began manufacturing products</span>
                  </div>
                  <div className="milestone">
                    <span className="year">2020</span>
                    <span className="event">Expanded to international markets</span>
                  </div>
                  <div className="milestone">
                    <span className="year">2021</span>
                    <span className="event">Received industry recognition</span>
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
          </div>
        </section>
    );
}

export default BriefHistory;