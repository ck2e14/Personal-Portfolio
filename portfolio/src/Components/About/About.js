import React from 'react';
import './About.css';
// import { Link } from 'react-router-dom';
// import MacDesk from '../../Assets/mac-desk.jpg';



const About = () => {
   return (
      <>
         <div className="about-background"></div>

         <div className="about-tagline">

               What <br/>makes <br/>me <br/>tick?
         </div>

         <div className="about-contents">

            <div className="about-1">
               Over the past year I have taken on the challenge of becoming a full-stack web developer. I kickstarted my journey at FlatIron's London coding school, where I was grounded in the MVC paradigm and got my feet wet with Ruby on Rails before learning core principles and practice of vanilla JavaScript. 
            </div>

            <div className="about-2">
              The course culminated with a solo, four week project synthesising React.js, Rails, PostgreSQL, JWT user authorisation, ES6, HTML5 and CSS3.
            </div>

            <div className="about-3">
               Since then I have continued to work to improve my understanding of these technologies and take on new challenges, like working with Pebble Solutions Ltd. to build a front-end website showcasing their abilities. 

               Through commitment and approach, I learn fast and relish problem-solving. I ensure that each project I undertake is an improvement of what came before.
            </div>

         </div>
      </>
   );
}

export default About;
