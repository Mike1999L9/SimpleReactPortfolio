import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span><hr></hr>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am an accounting graduate from University of Wollongong. Due to the current situation, I have slowly got bored and here I am, building a portfolio web-application as one of my 'past time' hobbies. Hope you like it!</p>
                    <p>I love loads of things in my life e.g. playing piano, gaming, lifing iron, cycling etc. Trying to make myself a happier person.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I love to do at the moment?</span><hr></hr>
                <h2 className="colorlib-heading">Qualities that compose of me.</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span> 
                <div className="desc">
                    <h3>Consistency  </h3>
                    <p> Having a consistency effort on matters is the one belief I have been long holding. I am the type of guy who would grind on a daily basis instead of rushing it all in a short period of time. </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-heart"/>
                </span>
                <div className="desc">
                    <h3>Work-Life balance</h3>
                    <p>Valuing the concept of work-life balance for which I believe by taking care yourself (e.g. having healthy physical/mental state or developing interests in life) would certainly increase productivity at work.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Can-do attitude</h3>
                    <p>Willing to step outside my comfort zone to stretch my abilities in different aspects of life. Wasn't sure what programming does not long before, now I am already writing websites.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
