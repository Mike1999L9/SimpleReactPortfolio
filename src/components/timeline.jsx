import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span><hr></hr>
                <h2 className="colorlib-heading animate-box">University Engagements</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Activity-Position in  <b>2018</b></h2>
                        <ul>
                          <li><b>Business International Peer Mentor </b></li>
                            <ul>
                              <li>Business International Peer Mentors assist newly commencing international students to the Faculty of Business.</li>
                            </ul>
                          <li><b>Certified Practising Accountant (CPA) Australia Student Ambassador</b></li>
                            <ul>
                              <li>
                            CPA Australia Student Ambassadors act as a liaison between CPA Australia, UOW, peers and the broader local community.
                              </li>
                            </ul>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>Activity-Position in <b>2019</b></h2>
                      <ul>
                          <li><b>Kooloobong Village Student Leader</b></li>
                            <ul>
                              <li>Student Leaders in UOW accommodation make an important contribution to the residential community.</li>
                            </ul>
                          <li><b>Global Communicators Program Participant</b></li>
                            <ul>
                              <li>
                              Global Communicators Program Participants have attended sessions that enable them to form intercultural friendships, build cultural literacy and become global citizens.
                              </li>
                            </ul>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>Activity-Position in <b>2020</b></h2>
                        <p>Well, there is nothing important I could tell you. Wish I could have done this website earlier since I was already staying at the home having my online classes. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
