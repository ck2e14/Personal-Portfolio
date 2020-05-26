import React from 'react';
import './About.css';
import MacDesk from '../../Assets/mac-desk.jpg';
import Watercolor from '../../Assets/watercolor.jpg';
import TopDown from '../../Assets/topDown.jpg';
import Notepad from '../../Assets/notepad.jpg';

const About = () => {
   return (
      <>
         <div className="about-background"></div>
         
         <div className="lower-images-flex-container">

               <div className="flex-image-container-1">
                  <img src={MacDesk} alt="macDesk" className="flex-images"/>
               </div>

               <div className="flex-image-container-2">
                  <img src={Watercolor} alt="watercolor" className="flex-images"/>
               </div>

               <div className="flex-image-container-3">
                  <img src={TopDown} alt="topDown" className="flex-images"/>
               </div>

               <div className="flex-image-container-4">
                  <img src={Notepad} alt="notepad" className="flex-images"/>
               </div>

         </div>
         
         <div className="about-tagline">

               What <br/>makes <br/>me <br/>tick?
         </div>

         <div className="about-contents">

            <div className="about-1">
               Over the past year I set myself on the challenge of becoming a full-stack web developer. <br/><br/>I kickstarted my journey at FlatIron's London coding school, where I got my feet wet with <span>Ruby on Rails</span> before learning core principles and best-practices of vanilla <span>JavaScript (ES6), and then React.js.</span> 
            </div>

            <div className="about-2">
              The course culminated with a solo, four week project synthesising <span>React.js, Ruby on Rails, PostgreSQL, JWT user authorisation, ES6, HTML5 and CSS3.</span>
            </div>

            <div className="about-3">
               Since then I have continued to work to improve my understanding of these technologies and take on new challenges, like working with Pebble Solutions Ltd. to build a front-end website showcasing their abilities. **LINK**    
               <br/><br/>

               Through commitment and approach, <span>I learn fast and relish problem-solving.</span> I ensure that each project I undertake is an improvement of what came before. <br/><br/> Ultimately I'm driven by the satisfaction of creating web applications that perform and feel just as intended.
               <br/>
            </div>

         </div>
      </>
   );
}

export default About;
