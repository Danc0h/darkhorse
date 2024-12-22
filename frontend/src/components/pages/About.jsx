import React from "react";
import "./About.css"; // Your custom CSS styles

const About = () => {
  return (
    <div className='about-us-container'>
      <section className='daily-odds'>
        <h2>Did you know That</h2>
        <h3> Less is More</h3>
        <p className='p'>
          Did you know that less is more? Did you know the power of 2+ daily
          odds? Did you know you can make 100,000 out of 100 in 10 days using
          only 2 odds! If you don't believe check the table below.
        </p>
        <div className='table-responsive'>
          <table className='table table-bordered  table-striped table-hover'>
            <thead className='table-primary'>
              <tr>
                <th className='border'>Day</th>
                <th className='border'>Bet Amount</th>
                <th className='border'>Odds</th>
                <th className='border'>Winning</th>
                <th className='border'>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border'>Day 1</td>
                <td className='border'>$100.00</td>
                <td className='border'>2.00</td>
                <td className='border'>$200.00</td>
                <td className='border'>$200.00</td>
              </tr>
              <tr>
                <td className='border'>Day 2</td>
                <td className='border'>$200.00</td>
                <td className='border'>2.00</td>
                <td className='border'>$400.00</td>
                <td className='border'>$400.00</td>
              </tr>
              <tr>
                <td className='border'>Day 3</td>
                <td className='border'>$400.00</td>
                <td className='border'>2.00</td>
                <td className='border'>$800.00</td>
                <td className='border'>$800.00</td>
              </tr>
              <tr>
                <td className='border'>Day 4</td>
                <td className='border'>$800.00</td>
                <td className='border'>2.00</td>
                <td className='border'>$1,600.00</td>
                <td className='border'>$1,600.00</td>
              </tr>
              <tr>
                <td className='border'>Day 5</td>
                <td className='border'>$1,600.00</td>
                <td className='border'>2.00</td>
                <td className='border'>$3,200.00</td>
                <td className='border'>$3,200.00</td>
              </tr>
              <tr>
                <td className='border'>Day 6</td>
                <td className='border'>$3,200.00</td>
                <td className='border'>2.00</td>
                <td className='border'>$6,400.00</td>
                <td className='border'>$6,400.00</td>
              </tr>
              <tr>
                <td className='border'>Day 7</td>
                <td className='border'>$6,400.00</td>
                <td className='border'>2.00</td>
                <td className='border'>$12,800.00</td>
                <td className='border'>$12,800.00</td>
              </tr>
              <tr>
                <td className='border'>Day 8</td>
                <td className='border'>$12,800.00</td>
                <td className='border'>2.00</td>
                <td className='border'>$25,600.00</td>
                <td className='border'>$25,600.00</td>
              </tr>
              <tr>
                <td className='border'>Day 9</td>
                <td className='border'>$25,600.00</td>
                <td className='border'>2.00</td>
                <td className='border'>$51,200.00</td>
                <td className='border'>$51,200.00</td>
              </tr>
              <tr>
                <td className='border'>Day 10</td>
                <td className='border'>$51,200.00</td>
                <td className='border'>2.00</td>
                <td className='border'>$102,400.00</td>
                <td className='border'>$102,400.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className='p'>
          Sounds Juicy and seems easy,right!?Well,not so fast..The above is a
          theoretical description of the power of 2 daily 'sure' odds and here,
          we are about practical and real world stuff.Keep the FACTS folowing in
          mind:
        </p>
        <ul className='ul'>
          <li>
            It is not entirely impossible to make 2+ daily odds ,we already
            pulled and tested it with real world games
          </li>
          <li>
            On a period of 10 days,you could make a lose on a particular
            day,let's say day 4, and win the other 6 ,which means you break your
            streak in the middle and lose money
          </li>
          <li>
            You can make a succesful streak but lose on day 9 and go back to
            square one!This means you were close to your 100k dream but lost all
            your money on day 9!{" "}
          </li>
        </ul>
        <p className='p'>
          Why is it hard to maintain a 10 day streak of 2 odds? Well put
          yourself in a scenario where you placed all your bets on a strong team
          i.e Man City or Real Madrid to win for their every matches the entire
          season..Despite their dominance,somwhere in the middle of the league
          they will make a lose and that lose could be the one to hypothetically
          break your streak,and that's where we come in!
        </p>
      </section>
    </div>
  );
};

export default About;
