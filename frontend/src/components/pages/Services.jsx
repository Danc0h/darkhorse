import React from "react";
import "./Services.css";
import { Button } from "../Button";

const services = [
  {
    title: "1. Our 2+ Odds Strategy",
    description: (
      <>
        Pulling 2 successful odds for 10 days is quite difficult, but
        fortunately, we don't need 10 days—we only need 3 to make a significant
        amount. Only 3? That's right! We do it, and we always make money off
        this strategy. We provide two sets of well-analyzed and carefully chosen
        games of football and basketball on a daily basis. We don't talk much
        either; just view our achievement and success data{" "}
        <a href='/your-link-here'>here</a>. Before you get started, you need to
        know the following:
      </>
    ),
    image: "/images/image-1.jpg",
  },
  {
    title: "2. Roll Overs Guide",
    description: (
      <>
        We provide 2 sets of 2+ odds on a DAILY basis! Based on their
        winnings,we advice you whether you should roll over the previous
        winnings or not.We're all about making balanced decisions to grow our
        banks!Check our progress <a href=''>here</a>
      </>
    ),
    image: "/images/image-4.jpg",
  },
  {
    title: "3. We're Analytical based",
    description: (
      <>
        We combine the power of thorough analysis along with very simple
        principles of probability and logarithms to make consistent
        profits.Leave all the technical work to us,your job is to make money!{" "}
        <a href=''>here</a>
      </>
    ),
    image: "/images/image-4.jpg",
  },
  {
    title: "4.We make Consistent Profits",
    description: (
      <>
        Tired of losing your money to bookmarkers and scammers selling you 'VIP"
        tips that keep losing',we make consistent profits here!In the past 24
        days alone,we're grossing at +80,000.You don't be believe it,Check our
        progress data<a href=''>here</a>
      </>
    ),
    image: "/images/image-4.jpg",
  },

  {
    title: "5. We Don't Gamble, We Invest",
    description: (
      <>
        We are all about taking taking calculated risks by taking small and
        consistent wins to achieve win in the long run. Once you signup,you will
        always receive two sets of 2+ daily odds along with advice on what stake
        to put and whether to roll over or not
      </>
    ),
    image: "/images/image-2.png",
  },

  {
    title: "6. We're Transparent",
    description: (
      <>
        Unlike the other scam artists who sell you false 'sure tips' that keep
        losing,we keep our winnings posted as well as the track of our progress{" "}
        <a href=''></a>.Let's be honest,why would fraudsters care about posting
        their daily achievement knowing that they're prone to severe loses?
      </>
    ),
    image: "/images/image-4.jpg",
  },
];

const Services = () => (
  <div className='services-page'>
    <header className='services-header'>
      <h1>Get to know</h1>
      <h2>Our strategy</h2>
    </header>

    <div className='services-list'>
      {services.map((service, index) => (
        <div
          key={index}
          className={`service-item ${index % 2 === 0 ? "even" : "odd"}`}
        >
          <img
            src={service.image}
            alt={service.title}
            className='service-image'
          />
          <div className='service-content'>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button className='join-us-button'>Join Us</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
