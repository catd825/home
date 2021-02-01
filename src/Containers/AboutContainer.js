import React from 'react'
import { SiReact, SiJavascript, SiRuby, SiRails, SiNodeDotJs, SiMongodb, SiRedux} from "react-icons/si";
import { Button } from "reactstrap"
import { Link } from "react-router-dom"



class About extends React.Component {
    render(){
        return(
            <div className="container" id="about" style={{width: "75%"}}>
                <h3>ABOUT CATHY</h3>
                <br/>
                {/* <img width="175px" src={require('../images/cathy.png')} />
                <br/><br/> */}
                               
                    <p className="left">
                        Hi!  I'm Cathy, and I'm based in Brooklyn, NY.  I graduated from the Software Engineering program at the Flatiron School in Fall 2020. 
                    </p>

                    <p className="left">
                        Before Flatiron, I worked in a wide array of roles, primarily financial roles within advertising agencies, as well as data collection at a market research agency.  Agency experience strengthened my collaborative skills and ability to work in a fast paced environment.  
                    </p>

                    <p className="left">
                        Learning to code was always a goal of mine.  My interest in front-end development started back in high school when I built websites with HTML and CSS for fun.  When I went on to work in financial and market research roles after college, both of which required me to work with tons of data to build reports. Looking back, that fueled my love for backend development.
                    </p>     

                    <p className="left">
                        In 2020, I finally decided to make the leap into full-stack development.  At Flatiron, we learned object-oriented programming, SQL, ORM, ActiveRecord, MVC pattern (<b>Ruby on Rails</b>), <b>JavaScript</b> fundamentals and front-end frameworks (<b>ReactJS</b>).  After graduating bootcamp, I've had fun exploring new frameworks and databases, most recently <b>Node, Express, and Mongo</b>.  I've also begun to explore <b>Redux</b> and <b>OAuth</b> flows, including the <b><a href="https://medium.com/javascript-in-plain-english/creating-a-financial-app-with-the-plaid-api-nodejs-express-and-react-4e142066eb6c?source=friends_link&sk=ae4a53090618e6c9073f6bbb968ae18b">Plaid API auth flow</a></b>.  I'm interested in a role where I can use these skills and continue to learn more!
                    </p>  
        
                    <br/>
                    
                    {/* <p className="left"> Proficient In: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="http://www.reactjs.org" target="_blank" rel="noopener noreferrer"><SiReact className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <a href="http://www.javascript.com" target="_blank" rel="noopener noreferrer"><SiJavascript className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <a href="https://ruby-lang.org/en" target="_blank" rel="noopener noreferrer"><SiRuby className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer"><SiRails className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer"><SiPostgresql className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <br/><br/>

                        Currently Learning: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="http://nodejs.org" target="_blank" rel="noopener noreferrer"><SiNodeDotJs className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <a href="http://mongodb.com" target="_blank" rel="noopener noreferrer"><SiMongodb className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <a href="http://redux.js.org" target="_blank" rel="noopener noreferrer"><SiRedux className="icon" size={30}/></a>

                    </p> */}


                    <br/>
                    <Button style={{ color: 'white' }} to="/home" tag={Link}>return to main</Button>        
            </div>
        )
    }
}

export default About